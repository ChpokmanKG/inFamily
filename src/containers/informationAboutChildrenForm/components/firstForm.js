import React from 'react';

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
  }

  render() {
    return (
      <form className="content__registration-form w100 all-center" onSubmit={e => this.formSubmit(e)}>
        <h4>Регистрация</h4>
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