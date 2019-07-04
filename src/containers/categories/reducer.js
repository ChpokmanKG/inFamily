import {
  GET_CATEGORIES,
  GET_CATEGORIES_SUCCES,
  GET_CATEGORIES_ERROR
} from './action';

const initialState = {
  news: [],
  loading: true,
  error: false,
}

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        loading: true
      }
    case GET_CATEGORIES_SUCCES:
      return {
        ...state,
        news: action.categories,
        loading: false,
      }
    case GET_CATEGORIES_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      }
    default:
      return state
  }
}