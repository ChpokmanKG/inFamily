import React from 'react';
import { connect } from 'react-redux';
import { getCategoriesThunk } from './action'
import CategoriesWrap from './components/categoriesWrap';
import Loading from '../../components/loading';

class Categories extends React.Component {

  componentDidMount(){
    this.props.getCategories(this.props.match.params.newsId)
  }

  render() {
    const { loading,error } = this.props.categories;
    const { news } = this.props.categories;
    return (
      <div className="content__text-wrap" style={{padding: '0 0 20px 0',boxSizing: 'border-box'}}>
        {loading ? <Loading /> : news.map((item,index) => {
          return <CategoriesWrap title={item.title} img={item.image} text={item.content} key={index}/>
        })}
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    categories: store.categories
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCategories: id => dispatch(getCategoriesThunk(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Categories);