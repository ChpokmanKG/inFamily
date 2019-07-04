import React from 'react';
import { connect } from 'react-redux';
import { getSpecialistThunk } from './action';
import Loading from '../../components/loading';
import Persons from './component';

class Specialist extends React.Component {

  componentDidMount() {
    this.props.getData()
  }
  
  render() {
    const {people,loading} = this.props.specialist;
    return (
      <div className="content__text-wrap">
        {loading ? <Loading /> : people.map((item,index) => {
          return <Persons text={item.field} key={index} names={item.people}/>
        })}
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    specialist: store.persons
  }
}

const mapDispatchToProps = () => dispatch => {
  return {
    getData: () => dispatch(getSpecialistThunk())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Specialist);