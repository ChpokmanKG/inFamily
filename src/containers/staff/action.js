import API from '../../API';

export const GET_INFO_ABOUT_PERSON = '[STAFF] GET_INFO_ABOUT_PERSON';
export const GET_INFO_ABOUT_PERSON_SUCCES = '[STAFF] GET_INFO_ABOUT_PERSON_SUCCES';
export const GET_INFO_ABOUT_PERSON_ERROR = '[STAFF] GET_INFO_ABOUT_PERSON_ERROR';

export const getInfoAboutPerson = () => {
  return {
    type: GET_INFO_ABOUT_PERSON
  }
}

export const getInfoAboutPersonSucces = data => {
  return {
    type: GET_INFO_ABOUT_PERSON_SUCCES,
    user: data
  }
}

export const getInfoAboutPersonError = () => {
  return {
    type: GET_INFO_ABOUT_PERSON_ERROR
  }
}

export const getInfoAboutPersonThunk = num => dispatch => {
  dispatch(getInfoAboutPerson());
  return API.getPerson(num)
    .then(res => {
      dispatch(getInfoAboutPersonSucces(res.data))
    })
    .catch(err => {
      dispatch(getInfoAboutPersonError())
    })
}