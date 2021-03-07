import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getGoods, getCurrency } from '../redux/reducers/goods'

import Header from './header'
import SecondHeader from './secondHeader'
import Card from './card'
import Loader from './loader'

const MainPage = () => {
  const listOfGoods = useSelector((s) => s.goods.listOfGoods)
  const  BasketIds = useSelector((s) => s.basket.listOfIds)
  const currentRate = useSelector((s) => s.goods.currentRate)
  const dispatch = useDispatch()
  console.log('quantity', BasketIds)

  const [active, setActive] = useState(true)


  useEffect(() => {
    dispatch(getGoods())
  }, [])

  useEffect(() => {
    dispatch(getCurrency())
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setActive(!active)
    }, 1200)
  }, [])


  return (
    <div>
      <Header />
      {active ? (
        <Loader />
      ) : (
        <>
          <SecondHeader />
          <div className="flex flex-wrap justify-around py-6">
            {listOfGoods.map((it) => {
              const count = BasketIds.find((basket) => basket.id === it.id)
              console.log('found', count)
              return (
                <div key={it.id}>
                  <Card
                    title={it.title}
                    description={it.description.slice(0, 33)}
                    price={(it.price * currentRate).toFixed(2)}
                    id={it.id}
                    count={count?.quantity}
                  />
                </div>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}

MainPage.propTypes = {}

export default MainPage
