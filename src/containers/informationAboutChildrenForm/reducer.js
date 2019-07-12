import {
  CHANGE_NAME,
  CHANGE_NUMBER,
  CHANGE_EMAIL,
  IMG_FAMILY,
  IMG_INCOME,
  IMG_RESIDENCE,
  IMG_BIOGRAPHY,
  IMG_CRIMINAL,
  IMG_HEALTH,
  IMG_CHAR_JOB,
  IMG_CHAR_RES,

  SEND_FORM,
  SEND_FORM_SUCCES,
  SEND_FORM_ERROR,
} from './action';

const initalState = {
  name: '',
  phone: '',
  email: '',
  device_id: 'YOLOSWAG',
  family: null,
  income: null,
  residence: null,
  criminal_record: null,
  health: null,
  char_job: null,
  char_res: null,
  biography: null,
  registered: false,
  loading: true,
}

export default ( state = initalState, action ) => {
  switch(action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: action.payload
      }

    case CHANGE_NUMBER:
      return {
        ...state,
        phone: action.payload
      }

    case CHANGE_EMAIL:
      return {
        ...state,
        email: action.payload
      }

    case IMG_FAMILY:
      return {
        ...state,
        family: action.payload
      }

    case IMG_INCOME:
      return {
        ...state,
        income: action.payload
      }

    case IMG_RESIDENCE:
      return {
        ...state,
        residence: action.payload
      }

    case IMG_BIOGRAPHY:
      return {
        ...state,
        biography: action.payload
      }

    case IMG_CRIMINAL:
      return {
        ...state,
        criminal_record: action.payload
      }

    case IMG_HEALTH:
      return {
        ...state,
        health: action.payload
      }

    case IMG_CHAR_JOB:
      return {
        ...state,
        char_job: action.payload
      }

    case IMG_CHAR_RES:
      return {
        ...state,
        char_res: action.payload
      }

    case SEND_FORM:
      return {
        ...state,
        loading: true,
      }

    case SEND_FORM_SUCCES:
      return {
        ...state,
        loading: false,
        registered: true
      }

    case SEND_FORM_ERROR:
      return {
        ...state,
        loading: false,
      }

      default:
        return state;
  }
}