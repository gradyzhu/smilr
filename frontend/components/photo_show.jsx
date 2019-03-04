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
          <div>{this.props.photo.title}</div>
          <div>{this.props.photo.description}</div>
          <img src={this.props.photo.imageUrl}/>
        </>
      )
    } else {
      return <></>
    } 
  }
}

export default PhotoShow;