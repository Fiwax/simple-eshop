import axios from 'axios'

const GET_GOODS = 'GET_GOODS'
const GET_CURRENCY = 'GET_CURRENCY'
const SET_CURRENT_RATE = 'SET_CURRENT_RATE'

const SORT_BY_PRICE = 'SORT_BY_PRICE'
const SORT_BY_NAME = 'SORT_BY_NAME'


const initialState = {
  listOfGoods: [],
  rates: {},
  currentRate: 1,
  symbol:'USD'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GOODS: {
      return { ...state, listOfGoods: action.listOfGoods }
    }
    case GET_CURRENCY: {
      return { ...state, rates: action.rates }
    }
    case SET_CURRENT_RATE: {
      return { ...state, currentRate: action.current.currency, symbol: action.current.symbol }
    }
    case SORT_BY_PRICE: {
      return {...state, listOfGoods: action.sortprice}
    }
    case SORT_BY_NAME: {
      return {...state, listOfGoods: action.sortname}
    }
    default:
      return state
  }
}

export function getGoods() {
  return (dispatch) => {
    axios('/api/v1/items').then(({ data }) => {
      dispatch({ type: GET_GOODS, listOfGoods: data })
    })
  }
}

export function getCurrency() {
  return (dispatch) => {
    axios('api/v1/rates').then(({ data }) => dispatch({ type: GET_CURRENCY, rates: data }))
  }
}

export function setCurrentRate(currentType) {
  return (dispatch, getState) => {
    const store = getState()
    const { rates } = store.goods
    dispatch({ type: SET_CURRENT_RATE, current:{ currency:rates[currentType], symbol: currentType }})
  }
}

export function sortByPrice() {
  return (dispatch, getState) => {
    const store = getState()
    const { listOfGoods } = store.goods
    const productsByPrice = [...listOfGoods].sort((a, b) => a.price - b.price)
    dispatch({ type: SORT_BY_PRICE, sortprice: productsByPrice })
  }
}

export function sortByName() {
  return (dispatch, getState) => {
    const store = getState()
    const { listOfGoods } = store.goods
    const productsByName = [...listOfGoods].sort((a, b) => a.title.localeCompare(b.title))
    dispatch({ type: SORT_BY_NAME, sortname: productsByName })
  }
}