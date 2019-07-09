import API from '../../API';

export const USER_CHANGE_INPUT_VALUE_NAME = '[INFORMATION_ABOUT_CHILDREN_FORM] USER_CHANGE_INPUT_VALUE_NAME';
export const USER_CHANGE_INPUT_VALUE_PHONE = '[INFORMATION_ABOUT_CHILDREN_FORM] USER_CHANGE_INPUT_VALUE_PHONE';
export const USER_CHANGE_INPUT_VALUE_EMAIL = '[INFORMATION_ABOUT_CHILDREN_FORM] USER_CHANGE_INPUT_VALUE_EMAIL';

export const USER_CHANGE_INPUT_VALUE_INCOME = '[INFORMATION_ABOUT_CHILDREN_FORM] USER_CHANGE_INPUT_VALUE_INCOME';
export const USER_CHANGE_INPUT_VALUE_FAMILY = '[INFORMATION_ABOUT_CHILDREN_FORM] USER_CHANGE_INPUT_VALUE_FAMILY';
export const USER_CHANGE_INPUT_VALUE_RESIDENCE = '[INFORMATION_ABOUT_CHILDREN_FORM] USER_CHANGE_INPUT_VALUE_RESIDENCE';
export const USER_CHANGE_INPUT_VALUE_CRIMINAL_RECORD = '[INFORMATION_ABOUT_CHILDREN_FORM] USER_CHANGE_INPUT_VALUE_RECORD';
export const USER_CHANGE_INPUT_VALUE_HEALTH = '[INFORMATION_ABOUT_CHILDREN_FORM] USER_CHANGE_INPUT_VALUE_HEALTH';
export const USER_CHANGE_INPUT_VALUE_BIOGRAPHY = '[INFORMATION_ABOUT_CHILDREN_FORM] USER_CHANGE_INPUT_VALUE_BIOGRAPHY';
export const USER_CHANGE_INPUT_VALUE_CHAR_JOB = '[INFORMATION_ABOUT_CHILDREN_FORM] USER_CHANGE_INPUT_VALUE_CHAR_JOB';

export const USER_CHANGE_INPUT_VALUE_CHAR_RES = '[INFORMATION_ABOUT_CHILDREN_FORM] USER_CHANGE_INPUT_VALUE_CHAR_RES';
export const CHANGE_BOOL = '[INFORMATION_ABOUT_CHILDREN_FORM] BOOl';


// ACTIONS
export const userChangeInputValueName = value => ({
  type: USER_CHANGE_INPUT_VALUE_NAME,
  payload: value
})

export const changeBool = () => ({
  type: CHANGE_BOOL
})

export const userChangeInputValuePhone = value => ({
  type: USER_CHANGE_INPUT_VALUE_PHONE,
  payload: value
})

export const userChangeInputValueEmail = value => ({
  type: USER_CHANGE_INPUT_VALUE_EMAIL,
  payload: value
})



export const userChangeIncomeImage = file => ({
  type: USER_CHANGE_INPUT_VALUE_INCOME,
  payload: file,
})

export const userChangeCharJobImage = file => ({
  type: USER_CHANGE_INPUT_VALUE_CHAR_JOB,
  payload: file
})

export const userChangeResidenceImage = file => ({
  type: USER_CHANGE_INPUT_VALUE_RESIDENCE,
  payload: file
})

export const userChangeCriminalImage = file => ({
  type: USER_CHANGE_INPUT_VALUE_CRIMINAL_RECORD,
  payload: file
})

export const userChangeHealthImage = file => ({
  type: USER_CHANGE_INPUT_VALUE_HEALTH,
  payload: file
})

export const userChangeBiographyImage = file => ({
  type: USER_CHANGE_INPUT_VALUE_BIOGRAPHY,
  payload: file
})

export const userChangeCharResImage = file => ({
  type: USER_CHANGE_INPUT_VALUE_CHAR_RES,
  payload: file
})

// ACTIONS //


// THUNKS

export const userChangeInputValueNameThunk = value => dispatch => {
  dispatch(userChangeInputValueName(value));
}

export const userChangeInputValuePhoneThunk = value => dispatch => {
  dispatch(userChangeInputValuePhone(value))
}

export const userChangeInputValueEmailThunk = value => dispatch => {
  dispatch(userChangeInputValueEmail(value))
}


export const userChangeIncomeImageThunk = file => dispatch => {
  dispatch(userChangeIncomeImage(file));
}

export const userChangeCharJobImageThunk = file => dispatch => {
  dispatch(userChangeCharJobImage(file));
}

export const userChangeResidenceImageThunk = file => dispatch => {
  dispatch(userChangeResidenceImage(file))
}

export const userChangeCriminalImageThunk = file => dispatch => {
  dispatch(userChangeCriminalImage(file))
}

export const userChangeHealthImageThunk = file => dispatch => {
  dispatch(userChangeHealthImage(file))
}

export const userChangeBiographyImageThunk = file => dispatch => {
  dispatch(userChangeBiographyImage(file))
}

export const userChangeCharResImageThunk = file => dispatch => {
  dispatch(userChangeCharResImage(file));
}
// THUNKS //
