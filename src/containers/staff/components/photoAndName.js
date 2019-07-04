import React from 'react';

class PhotoAndName extends React.Component {

  getPhoto() {
    if(this.props.img === null){
      return 'https://www.hgdcpa.com/sites/hgdcpa.com/files/styles/panopoly_image_original/public/unknown_user.png?itok=ulUL-LQC'
    }else {
      return this.props.img;
    }
  }

  render() {
    return (
      <div className="content__person-photo-wrap all-center w100">
          <img src={this.getPhoto()} alt={this.props.name}/>
        <h3>{this.props.name}</h3>
      </div>
    )
  }
}

export default PhotoAndName;