import React from 'react'
import { useSelector } from 'react-redux'
import Head from './head'
import Header from './header'
import SecondHeader from './secondHeader'
import BasketCard from './basketCard'


const Dummy = () => {
  const symbol = useSelector((s) => s.goods.symbol)
  const listOfIds = useSelector((s) => s.basket.listOfIds)
  const listOfGoods = useSelector((s) => s.goods.listOfGoods)
  const basketId = listOfIds.map((it) => it.id)
  const goodsInBasket = listOfGoods.filter((item) => basketId.indexOf(item.id) > -1)
  const totalPrice = listOfIds.reduce((acc, rec) => {
    const productPrice = goodsInBasket.find((item) => item.id === rec.id).price * rec.quantity
    return acc + productPrice
  }, 0)
  return (
    <div>
      <Head title="Shop" />
      <Header />
      <SecondHeader />
      <div className="flex justify-center m-20 min-h-50">
        <div className="container bg-gray-300 shadow-lg  rounded ">
          {goodsInBasket.map((item) => {
            const count = listOfIds.find((itBas) => itBas.id === item.id)
            return (
              <div key={item.id} className="flex justify-center items-center">
                <BasketCard
                  image={item.image}
                  title={item.title}
                  price={item.price.toFixed(2)}
                  id={item.id}
                  amount={count?.quantity}
                />
              </div>
            )
          })}
          <div className="flex justify-between  ">
          <div className="total-amount font-bold text-xl flex items-center ml-2">TOTAL PRICE : {(totalPrice).toFixed(2)} {symbol}</div>
          <button type="button" className="block w-1/4 mr-5 px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded-full shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none">
            Proceed
          </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
