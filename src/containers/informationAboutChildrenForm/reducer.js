import {
  USER_CHANGE_INPUT_VALUE_NAME,
  USER_CHANGE_INPUT_VALUE_PHONE,
  USER_CHANGE_INPUT_VALUE_EMAIL,
  USER_CHANGE_INPUT_VALUE_INCOME,
  USER_CHANGE_INPUT_VALUE_FAMILY,
  USER_CHANGE_INPUT_VALUE_RESIDENCE,
  USER_CHANGE_INPUT_VALUE_CRIMINAL_RECORD,
  USER_CHANGE_INPUT_VALUE_HEALTH,
  USER_CHANGE_INPUT_VALUE_CHAR_JOB,
  USER_CHANGE_INPUT_VALUE_CHAR_RES,
  USER_CHANGE_INPUT_VALUE_BIOGRAPHY,
  CHANGE_BOOL, } from './action';

const initialState = {
  name: '',
  phone: '',
  email: '',
  device_id: 'YOLOSWAG',
  bool: true,
  income: {},
  family: {},
  residence: {},
  criminal_record: {},
  health: {},
  char_job: {},
  char_res: {},
  biography: {}
}

export default (state = initialState,action) => {
  switch(action.type) {
    case USER_CHANGE_INPUT_VALUE_NAME:
      return {
        ...state,
        name: action.payload
      }
    
    case USER_CHANGE_INPUT_VALUE_PHONE:
      return {
        ...state,
        phone: action.payload
      }

    case CHANGE_BOOL:
      return {
        ...state,
        bool: false
      }

    case USER_CHANGE_INPUT_VALUE_EMAIL:
      return {
        ...state,
        email: action.payload
      }

    case USER_CHANGE_INPUT_VALUE_INCOME:
      return {
        ...state,
        income: action.payload
      }

    case USER_CHANGE_INPUT_VALUE_FAMILY:
      return {
        ...state,
        family: action.payload
      }

    case USER_CHANGE_INPUT_VALUE_RESIDENCE:
      return {
        ...state,
        residence: action.payload
      }

    case USER_CHANGE_INPUT_VALUE_CRIMINAL_RECORD:
      return {
        ...state,
        criminal_record: action.payload
      }

    case USER_CHANGE_INPUT_VALUE_HEALTH:
      return {
        ...state,
        health: action.payload
      }
    
    case USER_CHANGE_INPUT_VALUE_CHAR_JOB:
      return {
        ...state,
        char_job: action.payload
      }

    case USER_CHANGE_INPUT_VALUE_CHAR_RES:
      return {
        ...state,
        char_res: action.payload
      }

    case USER_CHANGE_INPUT_VALUE_BIOGRAPHY:
      return {
        ...state,
        biography: action.payload
      }
    
    default:
      return state
  }
}