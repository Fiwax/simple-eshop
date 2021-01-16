import axios from 'axios'
import { ADD_ID } from './basket'
import { SET_CURRENT_RATE, SORT_BY_PRICE, SORT_BY_NAME } from './goods'

const ROUTER_LOCATION_CHANGE = '@@router/LOCATION_CHANGE'
const GET_LOGS = 'GET_LOGS'
const DELETE_LOGS = 'DELETE_LOGS'

const initialState = {
  list: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGS: {
      return {...state, list: action.list}
    }
    case DELETE_LOGS: {
      return {...state, list: action.list }
    }
    case ADD_ID: {
      const message = `${action.productTitle} was ${
        action.number > 0 ? `added to the basket ` : `removed from the basket`
      } ${+new Date()}`
      axios({
        method: 'post',
        url: '/api/v1/logs',
        data: {
          log: message
        }
      })
      return { ...state, list: [...state.list, message] }
    }
    case SET_CURRENT_RATE: {
      const message = `changed currency from ${action.previosSymbol} to ${action.current.symbol}`
      axios({
        method: 'post',
        url: '/api/v1/logs',
        data: {
          log: message
        }
      })
      .catch((error) => console.log(error))
      return { ...state, list: [...state.list, message] }
    }
    case SORT_BY_PRICE: {
      const message = 'sorted by price'
      axios({
        method: 'post',
        url: '/api/v1/logs',
        data: {
          log: message
        }
      })
      .catch((error) => console.log(error))
      return { ...state, list: [...state.list, message] }
    }
    case SORT_BY_NAME: {
      const message = 'sorted by name'
      axios({
        method: 'post',
        url: 'api/v1/logs',
        data: {
          log: message
        }
      })
      .catch((error) => console.log(error))
      return { ...state, list: [...state.list, message] }
    }
    case ROUTER_LOCATION_CHANGE: {
      const message = `navigate to ${action.payload.location.pathname} page`
      axios({
        method: 'post',
        url: '/api/v1/logs',
        data: {
          log: message
        }
      })
      return {...state, list: [...state.list, message]}
    }
    default:
      return state
  }
}

export function getLogs() {
  return (dispatch) => {
    axios('/api/v1/logs').then(({ data }) => dispatch({ type: GET_LOGS, list: data}))
  }
}

export function deleteLogs() {
  return (dispatch) => {
    axios.delete('api/v1/logs').then(() => dispatch({ type: DELETE_LOGS, list: [] }))
  }
}
// change currency from ${currency1} to ${currency2}
// add ${item-title} to the backet
// remove ${item-title} from the backet
// navigate to ${url} page
// sort by ${title}
// time of action in utc forma (+new Date())
