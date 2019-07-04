import { 
  GET_INFO_ABOUT_CHILD,
  GET_INFO_ABOUT_CHILD_SUCCES,
  GET_INFO_ABOUT_CHILD_ERROR
} from './actions';

const initialState = {
  section: [],
  loading: true,
  error: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_INFO_ABOUT_CHILD:
      return {
        ...state,
        loading: true,
        error: false
      }
    case GET_INFO_ABOUT_CHILD_SUCCES:
      return {
        ...state,
        section: action.info,
        loading: false,
        error: false
      }
    case GET_INFO_ABOUT_CHILD_ERROR:
      return {
        ...state,
        error: true
      }
    default:
      return state
  }
}