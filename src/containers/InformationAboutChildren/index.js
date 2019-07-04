import React from 'react';
import { connect } from 'react-redux';
import { getInfoAboutChildThunk } from './actions';
import Wrap from '../forFutureParents/components/wrap';
import Loading from '../../components/loading';
import { Link } from 'react-router-dom';

class InformationAboutChilds extends React.Component {

  componentDidMount() {
    this.props.getInfo();
  }

  render() {
    let {loading,section} = this.props.child;
    return (
      <div className="content__text-wrap">
        {loading ?
                <Loading /> : section.map((item,index) => {
                  return <Link to={`/informationAboutChildren/${item.id}`} key={index}><Wrap title={item.title} img={item.image} key={index}/></Link>
                })
        }
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    child: store.infoAboutChild
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getInfo: () => dispatch(getInfoAboutChildThunk())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(InformationAboutChilds);