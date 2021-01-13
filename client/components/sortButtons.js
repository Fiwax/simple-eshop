import React from 'react'
import { useDispatch } from 'react-redux'
import { sortByPrice, sortByName } from '../redux/reducers/goods'
import LogsButton from './logsButton'

const SortButtons = () => {
  const dispatch = useDispatch()
  return (
    <div className="flex justify-end ">
      <button id="sort-name" type="button" className="m-1" onClick={() => dispatch(sortByName())}>
        Sort By Name
      </button>
      <button id="sort-price" type="button" className="m-1" onClick={() => dispatch(sortByPrice())}>
        Sort By Price
      </button>
      <LogsButton />
    </div>
  )
}

export default SortButtons
