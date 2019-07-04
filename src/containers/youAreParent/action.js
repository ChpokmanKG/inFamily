import API from '../../API';

export const GET_INFO_FOR_PARENTS = '[YOU_ARE_PARENT] GET_INFO_FOR_PARENTS';
export const GET_INFO_FOR_PARENTS_SUCCES = '[YOU_ARE_PARENT] GET_INFO_FOR_PARENTS_SUCCES';
export const GET_INFO_FOR_PARENTS_ERROR = '[YOU_ARE_PARENT] GET_INFO_FOR_PARENTS_ERROR';

export const getInfoForParents = () => {
  return {
    type: GET_INFO_FOR_PARENTS
  }
}

export const getInfoForParentsSucces = data => {
  return {
    type: GET_INFO_FOR_PARENTS_SUCCES,
    data
  }
}

export const getInfoForParentsError = () => {
  return {
    type: GET_INFO_FOR_PARENTS_ERROR
  }
}

export const getInfoForParentsThunk = () => dispatch => {
  dispatch(getInfoForParents());
  return API.getInfoForParents()
    .then(res => {
      dispatch(getInfoForParentsSucces(res.data));
    })
    .catch(err => {
      dispatch(getInfoForParentsError())
    })
}