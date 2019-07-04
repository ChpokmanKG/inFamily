import React from 'react';
import PersonItem from './personItem';
import { Link } from 'react-router-dom';

class Persons extends React.Component {

  state = {
    forClass: true
  }

  changeClass() {
    this.setState({
      forClass: !this.state.forClass
    })
  }

  render() {
    return (
      <>
        <div onClick={() => this.changeClass()}
           className={ this.state.forClass ? 'content__person h100px' : 'content__person w100'}>
          <div className="content__person-title w100 all-center">
            {this.props.text}
          </div>
          {this.props.names.map((item,index) => {
            return <Link to={`/specialist/${item.id}`} key={index}><PersonItem img={item.image} text={item.name} key={index}/></Link>
          })}
        </div>
      </>
    )
  }
}

export default Persons;