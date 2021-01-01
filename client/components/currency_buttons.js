import React from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentRate } from '../redux/reducers/goods'

const Buttons = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <button
        className="focus:outline-none"
        type="button"
        onClick={() => dispatch(setCurrentRate('USD'))}
      >
        USD
      </button>
      <button
        className="mx-2 focus:outline-none "
        type="button"
        onClick={() => dispatch(setCurrentRate('EUR'))}
      >
        EUR
      </button>
      <button
        className="focus:outline-none"
        type="button"
        onClick={() => dispatch(setCurrentRate('CAD'))}
      >
        CAD
      </button>
    </div>
  )
}
Buttons.propTypes = {}

export default Buttons
