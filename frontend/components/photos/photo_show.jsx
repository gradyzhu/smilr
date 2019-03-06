import React from 'react';
import EditPhotoFormContainer from './edit_photo_form_container';
import Footer from '../footer';
class PhotoShow extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchPhoto(this.props.photoId);
  }
  
  handleDelete(e){
    // e.preventDefault();
    this.props.deletePhoto(this.props.photoId);
    this.props.history.push("/photos");
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
            <div>
              <div className="photo-show-image-details">
                <div>{this.props.photo.title}</div>
                <div>{this.props.photo.description}</div>
                <h1>comments here</h1>
                <button onClick={this.handleDelete} className="delete-button">Delete</button>
                <EditPhotoFormContainer photoId={this.props.photoId}/>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )
    } else {
      return <></>
    } 
  }
}

export default PhotoShow;