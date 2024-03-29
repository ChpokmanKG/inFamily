import React from 'react';

class FirstForm extends React.Component {

  handleChangeName(e) {
    this.props.nameChange(e.target.value);
  }

  handleChangePhone(e) {
    this.props.phoneChange(e.target.value);
  }

  handleChangeEmail(e) {
    this.props.emailChange(e.target.value);

    function getRandomArbitary() {
      return Math.random() * (100000 - 0) + 0;
    }

    this.props.newDeviceId(getRandomArbitary())
  }

  sendForm(e) {
    e.preventDefault();
    const { name, phone, email, device_id } = this.props;
    const data = {
      name,
      phone,
      email,
      device_id
    }
    console.log('Это из первой формы ',data);
    this.props.sendFormThunk(data);
  }

  componentDidMount(){
    console.log(this.props)
  }

  render() {
    return (
      <form className="content__registration-form w100 all-center" onSubmit={e => this.sendForm(e)}>
        <h4 style={{marginTop: '10px'}}>Регистрация</h4>

        <label>Введите Ф.И.О</label>
        <input placeholder="Введите Ф.И.О"
               value={this.props.name}
               onChange={e => this.handleChangeName(e)}
               type="text"
               required={true}/>
        
        <label>Введите номер телефона</label>
        <input placeholder="Введите номер телефона"
               value={this.props.phone}
               onChange={e => this.handleChangePhone(e)}
               type="number"
               required={true}/>
        
        <label>Введите электронную почту</label>
        <input placeholder="Введите электронную почту"
               value={this.props.email}
               onChange={e => this.handleChangeEmail(e)}
               type="email"
               required={true}/>

        <input type="submit" value="Отправить"/>
      </form>
    )
  }
}

export default FirstForm;