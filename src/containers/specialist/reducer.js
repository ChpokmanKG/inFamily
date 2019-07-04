import {
  GET_SPECIALIST,
  GET_SPECIALIST_SUCCES,
  GET_SPECIALIST_ERROR
} from './action';

const initialState = {
  people: [],
  loading: true,
  error: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_SPECIALIST:
      return {
        ...state,
        loading: true,
        error: false
      }
    case GET_SPECIALIST_SUCCES:
      return {
        ...state,
        people: action.data,
        loading: false
      }
    case GET_SPECIALIST_ERROR:
      return {
        ...state,
        error: true
      }
    default:
      return state
  }
} 