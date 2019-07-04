import API from '../../API';

export const GET_CATEGORIES = '[CATEGORIES] GET_CATEGORIES';
export const GET_CATEGORIES_SUCCES = '[CATEGORIES] GET_CATEGORIES_SUCCES';
export const GET_CATEGORIES_ERROR = '[CATEGORIES] GET_CATEGORIES_ERROR';

export const getCategories = () => {
  return {
    type: GET_CATEGORIES
  }
}

export const getCategoriesSucces = data => {
  return {
    type: GET_CATEGORIES_SUCCES,
    categories: data
  }
}

export const getCategoriesError = () => ({
  type: GET_CATEGORIES_ERROR
})

export const getCategoriesThunk = id => dispatch => {
  dispatch(getCategories());
  return API.getCategories(id)
    .then(res => {
      console.log(res.data);
      dispatch(getCategoriesSucces(res.data))
    })
    .catch(err => {
      dispatch(getCategoriesError());
    })
}