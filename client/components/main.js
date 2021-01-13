import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getGoods, getCurrency } from '../redux/reducers/goods'

import Header from './header'
import SecondHeader from './secondHeader'
import Card from './card'

const Main = () => {
  const listOfGoods = useSelector((s) => s.goods.listOfGoods)
  const currentRate = useSelector((s) => s.goods.currentRate)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGoods())
  }, [])

  useEffect(() => {
    dispatch(getCurrency())
  }, [])

  return (
    <div>
      <Header />
      <SecondHeader />
      <div className="flex flex-wrap justify-around py-6">
        {listOfGoods.map((it) => {
          return (
            <div key={it.id}>
              <Card
                title={it.title}
                description={it.description}
                price={(it.price * currentRate).toFixed(2)}
                id={it.id}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main
