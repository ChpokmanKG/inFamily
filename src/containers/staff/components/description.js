import React from 'react';

class Description extends React.Component {

  showContent(data) {
    if(data === null) {
      return (
        <>Данные не указаны</>
      )
    }else {
      return (
        <>{data}</>
      )
    }
  }
  
  render() {
    return (
      <>
        <h3 className="block-heading">Рабочие дни и адрес</h3>
        <div className="content__person-desc all-center w100">
          <p>Расписание</p>
          <p>{this.showContent(this.props.schedule)}</p>
        </div>
        <div className="content__person-desc all-center w100">
          <p>Адрес</p>
          <p>{this.showContent(this.props.address)}</p>
        </div>
      </>
    )
  }
}

export default Description;