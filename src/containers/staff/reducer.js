import {
  GET_INFO_ABOUT_PERSON,
  GET_INFO_ABOUT_PERSON_SUCCES,
  GET_INFO_ABOUT_PERSON_ERROR
} from './action';

const initialState = {
  personData: {},
  loading: true,
  error: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_INFO_ABOUT_PERSON:
      return {
        ...state,
        loading: true,
        error: false
      }
    case GET_INFO_ABOUT_PERSON_SUCCES:
      return {
        ...state,
        personData: action.user,
        loading: false,
        error: false
      }
    case GET_INFO_ABOUT_PERSON_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      }
    default:
      return state
  }
}