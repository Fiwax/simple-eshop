import React from 'react'
import { useDispatch } from 'react-redux'
import { addQuantity, subQuantity } from '../redux/reducers/basket'

//  Таблица товаров (отсортированы по текущей сортировке цена/имя)
// картинка товара(.product__image)
// заголовок(.product__title)
// цена за единицу(.product__price)
// количество товаров в корзине(.product__amout)
// цена за все товары(.product__total_price)
// кнопка минус(.product__remove) - удаляет один товар из текущеего списка. Если количество товаров равно нуля, то он исчезачет
// Строка, которая показывает всю сумму внизу страницы(#total-amount)
const BasketCard = (props) => {
  const dispatch = useDispatch()
  return (
    <div className="py-2 container border-box">
      <div className="flex h-24 w-full  bg-white shadow-lg rounded-lg overflow-hidden">
        <img className="w-1/6 bg-cover" src="https://picsum.photos/600/400/?random" alt="text" />
        <div className="w-2/3 p-1">
          <h1 className="text-gray-900 font-bold text-sm">{props.title}</h1>
          <div className="py-3">
            <div className="flex flex-row border h-6 w-20 rounded-lg border-gray-400 relative">
              <button
                type="button"
                className="font-semibold border-r bg-gray-900 hover:bg-gray-800 text-white border-gray-400 h-full w-20 flex rounded-l focus-outline-none cursor-pointer"
                onClick={() => dispatch(addQuantity(props.id))}
              >
                <span className="m-auto">+</span>
              </button>
              <div className="product_amount bg-white h-6 w-20 text-xs md:text-base flex items-center justify-center cursor-default">
                {props.amount}
              </div>
              <button
                type="button"
                className="font-semibold border-l bg-gray-900 hover:bg-gray-800 text-white border-gray-400 h-full w-20 flex rounded-r focus-outline-none cursor-pointer"
                onClick={() => dispatch(subQuantity(props.id))}
              >
                <span className="m-auto">-</span>
              </button>
            </div>
          </div>
          <div className=" text-gray-700 font-bold text-sm">Price {props.price}</div>
        </div>
        <div className="">
          <button
            type="button"
            className="px-2 ml-40 h-6 w-20  bg-gray-800 text-white text-xs font-bold uppercase rounded"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  )
}

BasketCard.propTypes = {}

export default BasketCard