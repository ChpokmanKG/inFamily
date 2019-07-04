import React from 'react';

class CategoriesWrap extends React.Component {

  state = {
    bool: true,
  }

  boolChange() {
    this.setState({
      bool: !this.state.bool
    })
  }
  
  render() {
    return(
      <div>
        <div style={{background: `url(${this.props.img}) center center / cover`}} onClick={() => this.boolChange()} className={this.state.bool ? 'content__categories-wrap all-center' : 'content__categories-wrap all-center w100 br'}>
          <div className={this.state.bool ? 'all-center w100 all-wrap' : 'all-center w100 all-wrap visible'}>
            <h4 className={this.state.bool ? '' : 'invisible'}>{this.props.title}</h4>
          </div>
        </div>
        <div style={{display: this.state.bool ? 'none' : 'block'}} className="content__categories-text-wrap w100">
          <h3>{this.props.title}</h3>
          <p>
            {this.props.text}
          </p>
        </div>
      </div>
    )
  }
}

export default CategoriesWrap;