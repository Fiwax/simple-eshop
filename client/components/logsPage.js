import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector,  useDispatch } from 'react-redux'
import { getLogs, deleteLogs } from '../redux/reducers/logs'



const LogPage = () => {
  const listOfLogs = useSelector((s) => s.logs.list)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLogs())
  }, [])
  return (
    <div>
      <nav className="flex bg-purple-700 justify-between p-2 text-white box-border h-16">
        <Link
          id="brand-name"
          to="/"
          className="p-1 hover:text-yellow-500 border-r-1 font-bold flex items-center "
        >
          REDUX Shop
        </Link>
        <button type="button" className="p-1 hover:text-yellow-500 border-r-1 font-bold items-center focus:outline-none" onClick={() => dispatch(deleteLogs())}>Delete Logs</button>
      </nav>
      {listOfLogs.map((it) => <div key='id'>{it.log}</div>)}
    </div>
  )
}


export default LogPage