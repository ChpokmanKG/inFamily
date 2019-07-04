import API from '../../API';

export const GET_INFO_FOR_FUTURE_PARENTS = '[MAIN_PAGE] GET_INFO_FOR_FUTURE_PARENTS';
export const GET_INFO_FOR_FUTURE_PARENTS_ERROR = '[MAIN_PAGE] GET_INFO_FOR_FUTURE_PARENTS_ERROR';
export const GET_INFO_FOR_FUTURE_PARENTS_SUCCESS = '[MAIN_PAGE] GET_INFO_FOR_FUTURE_PARENTS_SUCCESS';

export const getInfoForFutureParents = () => {
  return {
    type: GET_INFO_FOR_FUTURE_PARENTS
  }
}

export const getInfoForFutureParentsSucces = (sections) => {
  return {
    type: GET_INFO_FOR_FUTURE_PARENTS_SUCCESS,
    sections,
  }
}

export const getInfoForFutureParentsError = () => {
  return {
    type: GET_INFO_FOR_FUTURE_PARENTS_ERROR
  }
}

export const getInfoForFutureParentsThunk = () => dispatch => {
  dispatch(getInfoForFutureParents);
  return API.getInfoForFutureParents()
    .then(res => {
      console.log(res.data)
      dispatch(getInfoForFutureParentsSucces(res.data));
    })
    .catch(err => {
      dispatch(getInfoForFutureParentsError());
    })
};