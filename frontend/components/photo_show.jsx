import React from 'react';

class PhotoShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPhoto(this.props.photoId);
  }
  
  render() {
    if (this.props.photo !== undefined) {
      return(
        <>
          <div className="photo-show-container">
            <div className="photo-show-image-container">
              <div className="photo-show-image-wrap">
                <img 
                src={this.props.photo.imageUrl}
                className="show-image"/>
              </div>
            </div>
            <div className="photo-show-image-details">
              <div>{this.props.photo.title}</div>
              <div>{this.props.photo.description}</div>
              <p1>comments here</p1>
            </div>
          </div>
        </>
      )
    } else {
      return <></>
    } 
  }
}

export default PhotoShow;