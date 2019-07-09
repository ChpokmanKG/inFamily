import React from 'react';
import { connect } from 'react-redux';
import FirstForm from './components/firstForm';
import FormForDocuments from './components/secondForm';
import {
  userChangeInputValueNameThunk,
  userChangeInputValuePhoneThunk,
  userChangeInputValueEmailThunk,
  userChangeIncomeImageThunk,
  userChangeCharJobImageThunk,
  userChangeResidenceImageThunk,
  userChangeCriminalImageThunk,
  userChangeHealthImageThunk,
  userChangeBiographyImageThunk,
  userChangeCharResImageThunk,
  changeBool,
} from './action'

class InformationAboutChildrenForm extends React.Component {

  

  render(){
    const { name,
            phone,
            email,
            device_id,
            bool,
            income,
            family,
            residence,
            criminal_record,
            health,
            char_job,
            char_res,
            biography } = this.props.data;
    return (
      <div className="content__text-wrap bg-white">
        <FirstForm
          name={name}
          phone={phone}
          email={email}
          bool={bool}
          device_id={device_id}
          nameThunk={e => this.props.name(e)}
          phoneThunk={e => this.props.phone(e)}
          emailThunk={e => this.props.email(e)}
          changeBool={() => this.props.changeBool()}/>
        <FormForDocuments 
          income={income}
          family={family}
          residence={residence}
          criminal_record={criminal_record}
          health={health}
          char_job={char_job}
          char_res={char_res}
          biography={biography}
          device_id={device_id}
          name={name}
          phone={phone}
          email={email}
          
          incomeThunk={(file) => this.props.income(file)}
          jobThunk={file => this.props.job(file)}
          residenceThunk={file => this.props.residence(file)}
          biographyThunk={file => this.props.biography(file)}
          healthThunk={file => this.props.health(file)}
          criminalThunk={file => this.props.criminal(file)}
          charResThunk={file => this.props.charRes(file)}
          bool={bool}/>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  data: store.form
})

const mapDispatchToProps = dispatch => ({
  name: name => dispatch(userChangeInputValueNameThunk(name)),
  phone: phone => dispatch(userChangeInputValuePhoneThunk(phone)),
  email: email => dispatch(userChangeInputValueEmailThunk(email)),
  income: file => dispatch(userChangeIncomeImageThunk(file)),
  job: file => dispatch(userChangeCharJobImageThunk(file)),
  residence: file => dispatch(userChangeResidenceImageThunk(file)),
  biography: file => dispatch(userChangeBiographyImageThunk(file)),
  health: file => dispatch(userChangeHealthImageThunk(file)),
  criminal: file => dispatch(userChangeCriminalImageThunk(file)),
  charRes: file => dispatch(userChangeCharResImageThunk(file)),
  changeBool: () => dispatch(changeBool())
})

export default connect(mapStateToProps,mapDispatchToProps)(InformationAboutChildrenForm);