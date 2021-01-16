import React from 'react'
import { Link } from 'react-router-dom'


const LogsButton = () => {
  return (
    <div className="m-1 ml-2 md:border-l border-gray-600">
      <Link to="/logs">Logs</Link>
    </div>
  )
}

LogsButton.propTypes = {}

export default LogsButton