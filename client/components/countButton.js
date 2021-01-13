import React from 'react'
import { useDispatch } from 'react-redux'
import { addQuantity, subQuantity } from '../redux/reducers/basket'

const AddToCart = (props) => {
 const dispatch = useDispatch()
  return (
    <div className="flex flex-row border h-6 w-20 rounded-lg border-gray-400 relative">
      <button
        type="button"
        className="font-semibold border-r bg-gray-900 hover:bg-gray-800 text-white border-gray-400 h-full w-20 flex rounded-l focus-outline-none cursor-pointer"
        onClick={() => dispatch(addQuantity(props.id)) }
      >
        <span className="m-auto">+</span>
      </button>
      <div className="product_amount bg-white h-6 w-20 text-xs md:text-base flex items-center justify-center cursor-default">
        {props.count}
      </div>
      <button
        type="button"
        className="font-semibold border-l bg-gray-900 hover:bg-gray-800 text-white border-gray-400 h-full w-20 flex rounded-r focus-outline-none cursor-pointer"
        onClick={() => dispatch(subQuantity(props.id))}
      >
        <span className="m-auto">-</span>
      </button>
    </div>
  )
}

AddToCart.propTypes = {}

export default AddToCart
