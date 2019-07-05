import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getInfoForFutureParentsThunk } from './actions';
import Wrap from './components/wrap';
import Loading from '../../components/loading';

class ForFutureParents extends React.Component {

  componentDidMount(){
    this.props.getData()
  }

  render() {

    let { loading,sections } = this.props.data;
    return(
      <div className="content__text-wrap">
        {loading ? 
              <Loading /> 
              : 
              <>
                <Link to={`/informationAboutChildren/${sections[0].id}`}><Wrap title={sections[0].title} img={sections[0].image} /></Link>
                <Link to={'/informationAboutChildrenForm'}><Wrap title={sections[1].title} img={sections[1].image}/></Link>
                <Link to={'/informationAboutChildrenTest'}><Wrap title={sections[2].title} img={sections[2].image}/></Link>
              </>
              }
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    data: store.forFutureParent
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getData: () => dispatch(getInfoForFutureParentsThunk())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ForFutureParents);