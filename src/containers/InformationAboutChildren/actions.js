import API from '../../API';

export const GET_INFO_ABOUT_CHILD = '[INFORMATION_ABOUT_CHILD] GET_INFO_ABOUT_CHILD';
export const GET_INFO_ABOUT_CHILD_SUCCES = '[INFORMATION_ABOUT_CHILD] GET_INFO_ABOUT_CHILD_SUCCES';
export const GET_INFO_ABOUT_CHILD_ERROR = '[INFORMATION_ABOUT_CHILD] GET_INFO_ABOUT_CHILD_ERROR';

export const getInfoAboutChild = () => {
  return {
    type: GET_INFO_ABOUT_CHILD
  }
}

export const getInfoAboutChildSucces = info => {
  return {
    type: GET_INFO_ABOUT_CHILD_SUCCES,
    info: info
  }
}

export const getInfoAboutChildError = () => {
  return {
    type: GET_INFO_ABOUT_CHILD_ERROR
  }
}

export const getInfoAboutChildThunk = () => dispatch => {
  dispatch(getInfoAboutChild());
  return API.getInfoAboutChildrens()
    .then(res => {
      dispatch(getInfoAboutChildSucces(res.data));
    })
    .catch(err => {
      dispatch(getInfoAboutChildError())
    })
}