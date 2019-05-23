import React from 'react';
import EditPhotoFormContainer from './edit_photo_form_container';
import CommentsIndexContainer from '../comments/comments_index_container';
import CommentsFormContainer from '../comments/comments_form_container';
import Footer from '../footer';
import { Link } from 'react-router-dom';

class PhotoShow extends React.Component {
  componentDidMount() {
    this.props.fetchPhoto(this.props.photoId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.photoId != prevProps.photoId) {
      this.props.fetchPhoto(this.props.photoId);
    }
  }
  
  handleDelete = e => {
    this.props.deletePhoto(this.props.photoId);
    this.props.history.push("/photos");
  }
  
  render() {
    if (!this.props.photo || Object.keys(this.props.photo).length == 0) return null;
    const { photo: {imageUrl, userId, username}, photoId } = this.props;
    return(
      <>
        <div className="show-container">
          <div className="show-col-container">
            <div className="show-left-col"></div>
            <div className="show-mid-col">
              <Link to={`/`} className="show-back-to-ex flex-row-left">
                <i className="fas fa-arrow-left"></i>
                <p className="show-back-text">Back to explore</p>
              </Link>
              <img 
                className="show-image" 
                src={imageUrl}/>
            </div>
            <div className="show-right-col">
              <div className="show-tool-bar">
                <i className="far fa-edit tool-button"></i>
                <i 
                  onClick={this.handleDelete} 
                  className="far fa-trash-alt tool-button"></i>
              </div>
            </div>
          </div>
          <div className="photo-details-container flex-center">
            <div className="flex-col">
              <div className="flex-row-space">
                <Link to={`/users/${userId}/photos`}
                  className="display-username">
                  {username}
                </Link>
                <button className="blue-button follow-custom">
                  Follow
                </button>
              </div>
              <div className="photo-details-wrap">
                <div className="photo-details">
                  <EditPhotoFormContainer photoId={photoId}/>
                </div>
                <div>
                  <hr className="display-edit-line"></hr>
                  <CommentsIndexContainer/>
                  <hr className="display-edit-line"></hr>
                  <CommentsFormContainer
                    photoId={photoId}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
  )
  }
}

export default PhotoShow;