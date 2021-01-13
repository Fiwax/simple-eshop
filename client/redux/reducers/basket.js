const ADD_ID = 'ADD_ID'
const ADD_QUANTITY = 'ADD_QUANTITY'
const SUB_QUANTITY = 'SUB_QUANTITY'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

const initialState = {
  listOfIds: []
}
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ID: {
      return { ...state, listOfIds: action.listOfIds }
    }
    case ADD_QUANTITY: {
      return { ...state, listOfIds: action.addQuantity }
    }
    case SUB_QUANTITY: {
      return { ...state, listOfIds: action.subQuantity }
    }
    case REMOVE_FROM_CART: {
      return { ...state, listOfIds: action.removeFromCart }
    }
    default:
      return state
  }
}

export function addId(id) {
  return (dispatch, getState) => {
    const store = getState()
    const { listOfIds } = store.basket
    let isELementFound = false
    let newListOfIds = listOfIds.reduce((acc, rec) => {
      if (rec.id === id) {
        isELementFound = true
        return [...acc, { id: rec.id, quantity: rec.quantity + 1 }]
      }
      return [...acc, rec]
    }, [])

    if (!isELementFound) {
      newListOfIds = [...newListOfIds, { id, quantity: 1 }]
    }
    dispatch({ type: ADD_ID, listOfIds: newListOfIds })
  }
}

export function addQuantity(id) {
  return (dispatch, getState) => {
    const store = getState()
    const { listOfIds } = store.basket
    const count = listOfIds.reduce((acc, rec) => {
      if (rec.id === id) {
        return [...acc, { id: rec.id, quantity: rec.quantity + 1}]
      }
      return [...acc, rec]
    }, [])
    dispatch({ type: ADD_QUANTITY, addQuantity: count})
  }
}

export function subQuantity(id) {
  return (dispatch, getState) => {
    const store = getState()
    const { listOfIds } = store.basket
    const tai = listOfIds.reduce((acc, rec) => {
      if (rec.id === id) {
        const newQuantity = Math.max(rec.quantity - 1, 0)
        if (newQuantity > 0) {
         return [...acc, { id: rec.id, quantity: newQuantity }]
        }
        return [...acc]
      }
      return [...acc, rec]
    },[])
    dispatch({ type: SUB_QUANTITY, subQuantity: tai})
  }
}

export function removeFromCart(id) {
  return (dispatch, getState) => {
    const store = getState()
    const { listOfIds } = store.basket
    const filteredArr = listOfIds.filter((item) => item.id === id)
    dispatch({ type: REMOVE_FROM_CART, action: filteredArr })
  }
}
