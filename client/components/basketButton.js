import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'



const BasketButton = () => {
  const basket = useSelector((s) => s.basket.listOfIds)
  const basketCount = basket.reduce((acc, rec) => acc + rec.quantity, 0)
  return (
    <div id="order-count">
      <Link to="/basket" className="hover:text-yellow-500">
        <div className="flex h-5 justify-end">
          <div className="relative ">
            <div className="flex flex-row cursor-pointer truncate p-2 px-4  rounded">
              <div className="flex flex-row-reverse ml-2 w-full">
                <div slot="icon" className="relative">
                  <div className="absolute text-xs rounded-full -mt-1 -mr-2 px-1 font-bold top-0 right-0 bg-gray-900 text-white">
                    {basketCount === 0 ? '' : basketCount}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-shopping-cart w-6 h-6 mt-2"
                  >
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

BasketButton.propTypes = {}

export default BasketButton