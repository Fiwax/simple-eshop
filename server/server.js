import express from 'express'
import path from 'path'
import cors from 'cors'
import axios from 'axios'
import bodyParser from 'body-parser'
import sockjs from 'sockjs'
import { renderToStaticNodeStream } from 'react-dom/server'
import React from 'react'

import cookieParser from 'cookie-parser'
import config from './config'
import Html from '../client/html'

const { readFile, writeFile, unlink } = require('fs').promises

const Root = () => ''

try {
  // eslint-disable-next-line import/no-unresolved
  // ;(async () => {
  //   const items = await import('../dist/assets/js/root.bundle')
  //   console.log(JSON.stringify(items))

  //   Root = (props) => <items.Root {...props} />
  //   console.log(JSON.stringify(items.Root))
  // })()
  console.log(Root)
} catch (ex) {
  console.log(' run yarn build:prod to enable ssr')
}

let connections = []

const port = process.env.PORT || 8090
const server = express()

const middleware = [
  cors(),
  express.static(path.resolve(__dirname, '../dist/assets')),
  bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }),
  bodyParser.json({ limit: '50mb', extended: true }),
  cookieParser()
]

middleware.forEach((it) => server.use(it))

// ------API------- //

server.get('/api/v1/items', (req, res) => {
  readFile(`${__dirname}/data.json`, { encoding: 'utf8' }).then((it) => {
    res.json(JSON.parse(it))
  })
})

server.get('/api/v1/rates', async (req, res) => {
 const { data } = await axios('https://api.exchangeratesapi.io/latest?base=USD&symbols=EUR,CAD,USD')
 res.json(data.rates)
})

server.get('/api/v1/logs', async (req, res) => {
  const logs = await readFile(`${__dirname}/logs/logs.json`, { encoding: 'utf-8'})
  .then((item) => {
    return JSON.parse(item)
  })
  res.json(logs)
})

server.post('/api/v1/logs/', async (req, res) => {
     readFile(`${__dirname}/logs/logs.json`).then((item) => {
     const oldLog = JSON.parse(item)
     writeFile(`${__dirname}/logs/logs.json`, JSON.stringify([...oldLog, req.body]), { encoding: 'utf-8' })
   })
   .catch(() => {
      writeFile(`${__dirname}/logs/logs.json`, JSON.stringify([req.body]), { encoding: 'utf-8' })
   })
  res.send({ status: 'Success' })
})

server.delete('/api/v1/logs', (req, res) => {
    unlink(`${__dirname}/logs/logs.json`)
    res.json({ status: 'success' })
})


server.use('/api/', (req, res) => {
  res.status(404)
  res.end()
})

const [htmlStart, htmlEnd] = Html({
  body: 'separator',
  title: 'Skillcrucial - Become an IT HERO'
}).split('separator')

server.get('/', (req, res) => {
  const appStream = renderToStaticNodeStream(<Root location={req.url} context={{}} />)
  res.write(htmlStart)
  appStream.pipe(res, { end: false })
  appStream.on('end', () => {
    res.write(htmlEnd)
    res.end()
  })
})

server.get('/*', (req, res) => {
  const initialState = {
    location: req.url
  }

  return res.send(
    Html({
      body: '',
      initialState
    })
  )
})

const app = server.listen(port)

if (config.isSocketsEnabled) {
  const echo = sockjs.createServer()
  echo.on('connection', (conn) => {
    connections.push(conn)
    conn.on('data', async () => {})

    conn.on('close', () => {
      connections = connections.filter((c) => c.readyState !== 3)
    })
  })
  echo.installHandlers(app, { prefix: '/ws' })
}
console.log(`Serving at http://localhost:${port}`)
