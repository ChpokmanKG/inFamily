import React from 'react';
import Axios from 'axios';

class FirstForm extends React.Component {

  handleChangeName(e) {
    this.props.nameThunk(e.target.value);
  }

  handleChangePhone(e) {
    this.props.phoneThunk(e.target.value);
  }

  handleChangeEmail(e) {
    this.props.emailThunk(e.target.value);
  }

  formSubmit(e) {
    e.preventDefault();
    const body = {
      name: this.props.name,
      phone: this.props.phone,
      email: this.props.email,
      device_id: this.props.device_id
    }

    console.log(body);

    Axios({
      method: 'post',
      url: 'https://cors-anywhere.herokuapp.com/http://46.101.236.211:5678/api/documents/',
      data: body
    }).then(res => {
      console.log(res);
      this.props.changeBool();
    }).catch(err => {
      console.log(err);
      this.props.changeBool();
    })
  }

  render() {
    return (
      <form style={{display: this.props.bool ? 'flex' : 'none'}} className="content__registration-form w100 all-center" onSubmit={e => this.formSubmit(e)}>
        <h4 style={{marginTop: '10px'}}>Регистрация</h4>
        <label>Введите Ф.И.О</label>
        <input placeholder="Введите Ф.И.О" value={this.props.name} onChange={e => this.handleChangeName(e)}/>
        <label>Введите номер телефона</label>
        <input placeholder="Введите номер телефона" value={this.props.phone} onChange={e => this.handleChangePhone(e)}/>
        <label>Введите электронную почту</label>
        <input placeholder="Введите электронную почту" value={this.props.email} onChange={e => this.handleChangeEmail(e)} type="email"/>
        <input type='submit' value="Отправить"/>
      </form>
    )
  }
}

export default FirstForm;