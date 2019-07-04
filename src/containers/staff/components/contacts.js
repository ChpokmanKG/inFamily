import React from 'react';

class Contacts extends React.Component {

  showContent() {
    if(this.props.arr.length > 0){
      const a = this.props.arr.map((item,index) => {
        if(item.type === "Телефон") {
          return (
            <div className="content__number all-center w100" key={index}>
              <p>{item.type}</p>
              <a className="content__call-link" href={'tel:' + item.value}>{item.value}</a>
            </div>
          )
        }
        else {
          return (
            <div className="content__number all-center w100" key={index}>
              <p>{item.type}</p>
              <a className="content__call-link" href={item.value}>{item.value}</a>
            </div>
          )
        }
      })
      return a;
    }
    else {
      return (
        <div className="content__number all-center w100">
          <p>Данные не указаны</p>
        </div>
      )
    }
  }

  // componentDidMount(){
  //   setTimeout(() => {
  //     console.log(this.props.arr);
  //   },2000);
  // }

  render() {
    return ( 
      <div className="content__info-number-wrap all-center">
        <h3>Контактные данные</h3>
        {this.showContent()}
      </div>
    )
  }
}

export default Contacts;