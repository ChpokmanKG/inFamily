import { 
    GET_INFO_FOR_FUTURE_PARENTS,
    GET_INFO_FOR_FUTURE_PARENTS_ERROR,
    GET_INFO_FOR_FUTURE_PARENTS_SUCCESS 
} from './actions';

const initialState = {
  sections: [],
  loading: true,
  error: false,
}



export default (state = initialState, action) => {
  switch (action.type) {
    case GET_INFO_FOR_FUTURE_PARENTS:
      return {
        ...state,
        loading: true,
        error: false
      }
    case GET_INFO_FOR_FUTURE_PARENTS_SUCCESS:
      // console.log('reducer');
      // console.log(action.sections);
      return {
        ...state,
        loading: false,
        sections: action.sections
      }

    case GET_INFO_FOR_FUTURE_PARENTS_ERROR:
      return {
        ...state,
        error: true,
      }

    default:
      return state;
  }
}