import React from 'react';
import { connect } from 'react-redux';
import { getInfoAboutPersonThunk } from './action';
import PhotoAndName from './components/photoAndName';
import Loading from '../../components/loading';
import Contacts from './components/contacts';
import Description from './components/description';

class Staff extends React.Component {

  componentDidMount() {
    this.props.getInfoAboutPerson(this.props.match.params.number)
  }

  render() {
    const {name,photo,contacts,schedule,address} = this.props.person.personData;
    const {loading} = this.props.person;
    return (
      <div className="bg-white w100">
        <div className="content__text-wrap">
          {loading ? <Loading /> : <PhotoAndName img={photo} name={name}/>} 
        </div>
        <div className="content__info-wrap w100">
          {loading ? <></> : <Description schedule={schedule} address={address}/>}
        </div>
        <div className="content__info-wrap w100">
          {loading ? <></> : <Contacts arr={contacts}/>}
        </div>
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    person: store.personsProfile
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getInfoAboutPerson: (id) => dispatch(getInfoAboutPersonThunk(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Staff);