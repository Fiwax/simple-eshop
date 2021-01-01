import React from 'react'
import { useDispatch } from 'react-redux'
import { sortByPrice, sortByName } from '../redux/reducers/goods'

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
    </div>
  )
}

export default SortButtons
