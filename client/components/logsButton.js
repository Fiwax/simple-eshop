import React from 'react'
import { Link } from 'react-router-dom'


const LogsButton = () => {
  return (
    <div className="m-1 ml-2 border-l">
      <Link to="/logs">Logs</Link>
    </div>
  )
}

LogsButton.propTypes = {}

export default LogsButton