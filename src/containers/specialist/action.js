import API from '../../API';

export const GET_SPECIALIST = '[SPECIALIST] GET_SPECIALIST';
export const GET_SPECIALIST_SUCCES = '[SPECIALIST] GET_SPECIALIST_SUCCES';
export const GET_SPECIALIST_ERROR = '[GET_SPECIALIST] GET_SPECIALIST_ERROR';

export const getSpecialist = () => {
  return {
    type: GET_SPECIALIST
  }
}

export const getSpecialistSucces = data => {
  return {
    type: GET_SPECIALIST_SUCCES,
    data: data
  }
}

export const getSpecialistError = () => {
  return {
    type: GET_SPECIALIST_ERROR
  }
}

export const getSpecialistThunk = () => dispatch => {
  dispatch(getSpecialist());
  return API.getSpecialist()
    .then(res => {
      dispatch(getSpecialistSucces(res.data));
    })
    .catch(err => {
      dispatch(getSpecialistError());
    })
}