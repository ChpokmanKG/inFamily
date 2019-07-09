import React from 'react';
import Axios from 'axios';

class FormForDocuments extends React.Component {

  handleChangeIncomePhoto(e) {
    e.preventDefault();
    let file = e.target.files[0];
    this.props.incomeThunk(file);
  }
  
  handleChangeFamilyPhoto(e) {
    e.preventDefault();
    let file = e.target.files[0];
    this.props.jobThunk(file);
  }

  handleChangeResidencePhoto(e) {
    e.preventDefault();
    let file = e.target.files[0];
    this.props.residenceThunk(file);
  }

  handleChangeCriminalPhoto(e) {
    e.preventDefault();
    let file = e.target.files[0];
    this.props.criminalThunk(file);
  }

  handleChangeJobPhoto(e) {
    e.preventDefault();
    let file = e.target.files[0];
    this.props.healthThunk(file);
  }

  handleChangeBiographyPhoto(e) {
    e.preventDefault();
    let file = e.target.files[0];
    this.props.biographyThunk(file);
  }

  handleChangeJobCharResPhoto(e) {
    e.preventDefault();
    let file = e.target.files[0];
    this.props.charResThunk(file);
  }

  formSubmit(e) {

    e.preventDefault();
    
    const body = {
      name: this.props.name,
      phone: this.props.phone,
      email: this.props.email,
      device_id: this.props.device_id,
      income: this.props.income,
      family: this.props.family,
      residence: this.props.income,
      criminal_record: this.props.criminal_record,
      health: this.props.health,
      char_job: this.props.biography,
      char_res: this.props.char_res,
      biography: this.props.biography,
    }

    console.log(body);
    
    Axios({
      url: 'https://cors-anywhere.herokuapp.com/http://46.101.236.211:5678/api/documents/',
      method: 'post',
      body: body
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <form 
        style={{display: this.props.bool ? 'none' : 'flex'}}
        className="content__registration-form w100 all-center"
        onSubmit={(e) => this.formSubmit(e)}>
        <h4 style={{marginTop: '10px'}}>Сбор документов</h4>
        <label>
          <b>Справка о заработной плате</b><br />
          <span>Копия сведения о совокупном доходе граждан и выписка из домовой
          книжки с место жительства или документ, подтверждающий право
          собственности на жилое помещение</span>
        </label>
        <input type="file" required={true} onChange={e => this.handleChangeIncomePhoto(e)}/>
        <label>
          <b>Справка с места работы</b><br />
          <span>
            Справка с места работы с указанием должности и заработной платы
            либо копия декларации о доходах
          </span>
        </label>
        <input type="file" onChange={e => this.handleChangeFamilyPhoto(e)}/>
        <label>
          <b>Полная автобиография</b><br />
          <span>
            Полная автобиография
          </span>
        </label>
        <input type="file" required={true} onChange={e => this.handleChangeBiographyPhoto(e)}/>
        <label>
          <b>Справка органов внутренних дел</b><br />
          <span>
            Справка органов внутренних дел об отсуствии судимости
          </span>
        </label>
        <input type="file" required={true} onChange={e => this.handleChangeCriminalPhoto(e)}/>
        <label>
          <b>Медицинское заключение</b><br />
          <span>
            Медицинское заключение государственного
            лечебно-профилактического учереждения о состоянии
            здоровья лица и членов его семьи, желающего усыновить
            ребенка, оформленное в порядке, установленном Министерством здравоохранения
            Кыргызской Республики
          </span>
        </label>
        <input type="file" required={true} onChange={e => this.handleChangeJobPhoto(e)}/>
        <label>
          <b>Харатеристики с места работы и Харатеристики с места жительства</b><br />
          <span>
            Харатеристики с места работы и Харатеристики с места жительства
          </span>
        </label>
        <input type="file" required={true} onChange={e => this.handleChangeJobCharResPhoto(e)}/>
        <input type="submit" value='Отправить'/>
      </form>
    )
  }
}

export default FormForDocuments;