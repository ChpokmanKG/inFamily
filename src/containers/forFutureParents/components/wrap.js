import React from 'react';

class Wrap extends React.Component {
  render() {
    return (
      <div className="content__wrap all-center">
        <div style={{background: `url(${this.props.img}) center center / cover`}} className="content__img-block">
          <div className="content__title all-center">
            {this.props.title}
          </div>
        </div>
      </div>
    )
  }
}

export default Wrap;