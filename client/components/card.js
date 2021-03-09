import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addId } from '../redux/reducers/basket'

const Card = (props) => {
 const symbol = useSelector((s) => s.goods.symbol)
 const dispatch = useDispatch()

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg my-2 box-border">
      <img
        className="w-full"
        loading="lazy"
        src="https://picsum.photos/600/400/?random"
        alt={props.title}
      />
      <div className="px-6 py-4 ">
        <div className="font-bold text-lg mb-2 ">{props.title}</div>
        <p>{props.description}...</p>
      </div>
      <div className="flex justify-between">
        <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">
          {symbol} {props.price}
        </span>
        <span
          className={`${!props.count ? 'invisible' : 'text-black font-normal'} `}
        >
          {props.count}
        </span>
        <button
          type="button"
          className="bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-600 m-1"
          onClick={() => dispatch(addId(props.id))}
        >
          Add to cart
        </button>
      </div>
    </div>
  )
}

Card.propTypes = {}

export default Card
