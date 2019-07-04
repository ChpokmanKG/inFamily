import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Wrap from '../forFutureParents/components/wrap';
import { getInfoForParentsThunk } from './action';
import Loading from '../../components/loading';

class YouAreParent extends React.Component {

  componentDidMount() {
    this.props.getData()
  }

  render() {
    const { loading,error,section } = this.props.data;
    return (
      <div className="content__text-wrap">
        {
          loading ? <Loading /> : section.map((item, index) => {
            return <Link key={index} to={`/informationAboutChildren/${item.id}`}><Wrap title={item.title} img={item.image}/></Link>
          })
        }
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    data: store.youAreParent
  }
}

const mapDispatchToProps = () => dispatch => {
  return {
    getData: () => dispatch(getInfoForParentsThunk())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(YouAreParent);