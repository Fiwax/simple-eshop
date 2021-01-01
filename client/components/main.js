import React, { useEffect } from 'react'
import { useSelector,  useDispatch } from 'react-redux'
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
      <div className="flex flex-wrap justify-around  md:box-content">
        {listOfGoods.map((it) => (
          <div key={it.id} className="box-border">
            <Card
              title={it.title}
              description={it.description}
              price={(it.price * currentRate).toFixed(2)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
// flex-auto max-w-xs
Main.propTypes = {}

export default Main
