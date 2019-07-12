import API from '../../API';

export const CHANGE_NAME = '[INFORMATION_ABOUT_CHILDREN] CHANGE_NAME';
export const CHANGE_NUMBER = '[INFORMATION_ABOUT_CHILDREN] CHANGE_NUMBER';
export const CHANGE_EMAIL = '[INFORMATION_ABOUT_CHILDREN] CHANGE_EMAIL';
export const IMG_FAMILY = '[INFORMATION_ABOUT_CHILDREN] IMG_FAMILY';
export const IMG_INCOME = '[INFORMATION_ABOUT_CHILDREN] IMG_INCOME';
export const IMG_RESIDENCE = '[INFORMATION_ABOUT_CHILDREN] IMG_RESIDENCE';
export const IMG_BIOGRAPHY = '[INFORMATION_ABOUT_CHILDREN] IMG_BIOGRAPHY';
export const IMG_CRIMINAL = '[INFORMATION_ABOUT_CHILDREN] IMG_CRIMINAL';
export const IMG_HEALTH = '[INFORMATION_ABOUT_CHILDREN] IMG_HEALTH';
export const IMG_CHAR_JOB = '[INFORMATION_ABOUT_CHILDREN] IMG_CHAR_JOB';
export const IMG_CHAR_RES = '[INFORMATION_ABOUT_CHILDREN] IMG_CHAR_RES';

export const SEND_FORM = '[INFORMATION_ABOUT_CHILDREN] SEND_FORM';
export const SEND_FORM_SUCCES = '[INFORMATION_ABOUT_CHILDREN] SEND_FORM_SUCCES';
export const SEND_FORM_ERROR = '[INFORMATION_ABOUT_CHILDREN] SEND_FORM_ERROR';

export const userChangeName = name => ({
  type: CHANGE_NAME,
  payload: name
});

export const userChangeNumber = number => ({
  type: CHANGE_NUMBER,
  payload: number
});

export const userChangeEmail = email => ({
  type: CHANGE_EMAIL,
  payload: email
});

export const changeImgFamily = img => ({
  type: IMG_FAMILY,
  payload: img
})

export const changeImgIncome = img => ({
  type: IMG_INCOME,
  payload: img
})

export const changeImgResidence = img => ({
  type: IMG_RESIDENCE,
  payload: img
})

export const changeImgBiography = img => ({
  type: IMG_BIOGRAPHY,
  payload: img
})

export const changeImgCriminal = img => ({
  type: IMG_CRIMINAL,
  payload: img
})

export const changeImgHealth = img => ({
  type: IMG_HEALTH,
  payload: img
})

export const changeImgCharJob = img => ({
  type: IMG_CHAR_JOB,
  payload: img
})

export const changeImgCharRes = img => ({
  type: IMG_CHAR_RES,
  payload: img
})



export const sendData = () => ({
  type: SEND_FORM,
})

export const sendDataSucces = () => ({
  type: SEND_FORM_SUCCES,
})

export const sendDataError = () => ({
  type: SEND_FORM_ERROR
})

export const sendFormDataThunk = data => dispatch => {
  dispatch(sendData());
  API.postDataForm(data)
    .then(res => {
      console.log('Заебись');
      dispatch(sendDataSucces());
    })
    .catch(err => {
      console.log('Нихуя');
      dispatch(sendDataError());
    })
}

export const sendFormDataFilesThunk = (data, config) => dispatch => {
  //dispatch(sendData());
  console.log('Фотки полетели')
  console.log(data);
  API.postDataFormFiles(data,config)
    .then(res => {
      console.log(res.status, res.data);
      //dispatch(sendDataSucces());
    })
    .catch(err => {
      console.log('Иди нахуй гуглить уебан')
      //dispatch()
    })
}