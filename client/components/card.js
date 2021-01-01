import React from 'react'
import { useSelector} from 'react-redux'

const Card = (props) => {
 const symbol = useSelector((s) => s.goods.symbol)

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg my-2 box-border">
      <img
        className="w-full"
        src="https://picsum.photos/600/400/?random"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4 ">
        <div className="font-bold text-xl mb-2 ">{props.title}</div>
        <p>{props.description}</p>
      </div>
      <div className="flex justify-between">
        <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">
          {symbol} {props.price}
        </span>
        <button
          type="button"
          className=" bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-600 m-1"
        >
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default Card