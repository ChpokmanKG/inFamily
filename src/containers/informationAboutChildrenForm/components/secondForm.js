import React from 'react';

class SecondForm extends React.Component {

  changeImgFamily(e) {
    this.props.funcChangeImgFamily(e.target.files[0]);
  }

  componentDidMount() {
    console.log(this.props);
  }

  changeImgIncome(e) {
    this.props.funcChangeImgIncome(e.target.files[0]);
  }

  changeImgResidence(e) {
    this.props.funcChangeImgResidence(e.target.files[0]);
  }

  changeImgBiography(e) {
    this.props.funcChangeImgBiography(e.target.files[0])
  }

  changeImgCriminal(e) {
    this.props.funcChangeImgCriminal(e.target.files[0]);
  }

  changeImgHealth(e) {
    this.props.funcChangeImgHealth(e.target.files[0]);
  }

  changeImgCharJob(e) {
    this.props.funcChangeImgCharJob(e.target.files[0]);
  }

  changeImgCharRes(e) {
    this.props.funcChangeImgCharRes(e.target.files[0])
  }

  sendForm(e) {
    e.preventDefault();

    const {
      name,
      phone,
      email,
      device_id,
      family,
      income,
      residence,
      criminal_record,
      health,
      char_job,
      char_res,
      biography
    } = this.props.formData;

    const data = {
      name,
      phone,
      email,
      device_id,
      family,
      income,
      residence,
      criminal_record,
      health,
      char_job,
      char_res,
      biography
    }
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }


    this.props.sendFormThunk(data,config);
  }

  render() {
    return (
      <form className="content__registration-form w100 all-center" onSubmit={e => this.sendForm(e)}>
        <h4 style={{marginTop: '10px'}}>Сбор документов</h4>

        {/* family */}
        <label>
          <b>Справка о составе семьи</b><br />
          <span>
            C места жительства
          </span>
        </label>
        <input type="file" required={true} onChange={e => this.changeImgFamily(e)}/>

        {/* income */}
        <label>
          <b>Справка о заработной плате</b><br />
          <span>
            Копия сведения о совокупном доходе граждан и выписка из домовой книжки с место жительства или документ, подтверждающий право собственности на жилое помещение
          </span>
        </label>
        <input type="file" required={true} onChange={e => this.changeImgIncome(e)}/>

        {/* residence */}
        <label>
          <b>Место проживания</b><br />
          <span>
            Право собственности на жилье или договор об аренде
          </span>
        </label>
        <input type="file" required={true} onChange={e => this.changeImgResidence(e)}/>

        {/* biography */}
        <label>
          <b>Полная автобиография</b><br />
          <span>
            Полная автобиография
          </span>
        </label>
        <input type="file" required={true} onChange={e => this.changeImgBiography(e)}/>

        {/* criminal_record */}
        <label>
          <b>Справка об отсутствии судимости</b><br />
          <span>
            Справка органов внутренних дел об отсуствии судимости
          </span>
        </label>
        <input type="file" required={true} onChange={e => this.changeImgCriminal(e)}/>

        {/* health */}
        <label>
          <b>Медицинское заключение</b><br />
          <span>
            Медицинское заключение государственного лечебно-профилактического учереждения о состоянии здоровья лица и членов его семьи, желающего усыновить ребенка, оформленное в порядке, установленном Министерством здравоохранения Кыргызской Республики
          </span>
        </label>
        <input type="file" required={true} onChange={e => this.changeImgHealth(e)}/>

        {/* char_job */}
        <label>
          <b>Харатеристики с места работы</b><br />
          <span>
          Харатеристики с места работы
          </span>
        </label>
        <input type="file" required={true} onChange={e => this.changeImgCharJob(e)}/>

        {/* char_res */}
        <label>
          <b>Харатеристики с места жительства</b><br />
          <span>
            Харатеристики с места жительства
          </span>
        </label>
        <input type="file" required={true} onChange={e => this.changeImgCharRes(e)}/>

        <input type="submit" value="Отправить"/>
      </form>
    )
  }
}

export default SecondForm;