import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getGoods, getCurrency } from '../redux/reducers/goods'

import Header from './header'
import Head from './head'
import SecondHeader from './secondHeader'
import Card from './card'
import Loader from './loader'

const MainPage = () => {
  const listOfGoods = useSelector((s) => s.goods.listOfGoods)
  const  BasketIds = useSelector((s) => s.basket.listOfIds)
  const currentRate = useSelector((s) => s.goods.currentRate)
  const { isLoading } = useSelector((s) => s.goods)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGoods())
  }, [])

  useEffect(() => {
    dispatch(getCurrency())
  }, [])

  return (
    <div>
      <Head title="Shop" />
      <Header />
      { isLoading ? (
        <Loader />
      ) : (
        <>
          <SecondHeader />
          <div className="flex flex-wrap justify-around py-6">
            {listOfGoods.map((it) => {
              const count = BasketIds.find((basket) => basket.id === it.id)
              return (
                <div key={it.id}>
                  <Card
                    title={it.title}
                    description={it.description}
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
