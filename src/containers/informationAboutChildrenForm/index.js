import React from 'react';
import { connect } from 'react-redux';
import FirstForm from './components/firstForm';
import { sendFormDataThunk,sendFormDataFilesThunk } from './action';
import Error from './components/error';
import SecondForm from './components/secondForm';
import {
  userChangeName,
  userChangeNumber,
  userChangeEmail,
  changeImgFamily,
  changeImgIncome,
  changeImgResidence,
  changeImgBiography,
  changeImgCriminal,
  changeImgHealth,
  changeImgCharJob,
  changeImgCharRes,
  newDeviceId
} from './action';

class InformationAboutChildrenForm extends React.Component {

  showContent() {
    const { loading,registered, } = this.props.formData;
    if(loading) {
      return (
        <FirstForm 
          {...this.props.formData}
          newDeviceId={id => this.props.newDeviceId(id)}
          nameChange={e => this.props.name(e)}
          phoneChange={e => this.props.phone(e)}
          emailChange={e => this.props.email(e)}
          sendFormThunk={data => this.props.sendForm(data)}
        />
      )
    }if(registered) {
      return (
        <SecondForm
          {...this.props.formData}
          funcChangeImgFamily={e => this.props.changeImgFamily(e)}
          funcChangeImgIncome={e => this.props.changeImgIncome(e)}
          funcChangeImgResidence={e => this.props.changeImgResidence(e)}
          funcChangeImgBiography={e => this.props.changeImgBiography(e)}
          funcChangeImgCriminal={e => this.props.changeImgCriminal(e)}
          funcChangeImgHealth={e => this.props.changeImgHealth(e)}
          funcChangeImgCharJob={e => this.props.changeImgCharJob(e)}
          funcChangeImgCharRes={e => this.props.changeImgCharRes(e)}
          sendFormThunk={(data,config) => this.props.sendFormDataFilesThunk(data,config)}
        />
      )
    }
    else {
      return (
        <Error />
      )
    }
  }

  render() {

    return (
      <div className="content__text-wrap bg-white">
        {this.showContent()}
      </div>
    )
  }
}

const mapStateToProps = store => ({
  formData: store.formData
})

const mapDispatchToProps = dispatch => ({
  name: e => dispatch(userChangeName(e)),
  phone: e => dispatch(userChangeNumber(e)),
  email: e => dispatch(userChangeEmail(e)),
  sendForm: data => dispatch(sendFormDataThunk(data)),
  sendFormDataFilesThunk: (data,config) => dispatch(sendFormDataFilesThunk(data,config)),
  changeImgFamily: img => dispatch(changeImgFamily(img)),
  changeImgIncome: img => dispatch(changeImgIncome(img)),
  changeImgResidence: img => dispatch(changeImgResidence(img)),
  changeImgBiography: img => dispatch(changeImgBiography(img)),
  changeImgCriminal: img => dispatch(changeImgCriminal(img)),
  changeImgHealth: img => dispatch(changeImgHealth(img)),
  changeImgCharJob: img => dispatch(changeImgCharJob(img)),
  changeImgCharRes: img => dispatch(changeImgCharRes(img)),
  newDeviceId: id => dispatch(newDeviceId(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(InformationAboutChildrenForm);