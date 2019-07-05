import React from 'react';
import { connect } from 'react-redux';
import FirstForm from './components/firstForm';
import {
  userChangeInputValueNameThunk,
  userChangeInputValuePhoneThunk,
  userChangeInputValueEmailThunk,
} from './action'

class InformationAboutChildrenForm extends React.Component {

  

  render(){
    const { name,phone,email } = this.props.data;
    return (
      <div className="content__text-wrap">
        <FirstForm 
          name={name}
          phone={phone}
          email={email}
          nameThunk={e => this.props.name(e)}
          phoneThunk={e => this.props.phone(e)}
          emailThunk={e => this.props.email(e)}/>
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
  email: email => dispatch(userChangeInputValueEmailThunk(email))
})

export default connect(mapStateToProps,mapDispatchToProps)(InformationAboutChildrenForm);