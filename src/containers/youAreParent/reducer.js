import {
  GET_INFO_FOR_PARENTS,
  GET_INFO_FOR_PARENTS_SUCCES,
  GET_INFO_FOR_PARENTS_ERROR
} from './action';

const initialState = {
  section: [],
  loading: true,
  error: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_INFO_FOR_PARENTS:
      return {
        ...state,
        loading: true
      }
    case GET_INFO_FOR_PARENTS_SUCCES:
      return {
        ...state,
        section: action.data,
        loading: false,
        error: false
      }
    case GET_INFO_FOR_PARENTS_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      }
    default:
      return state
  }
}