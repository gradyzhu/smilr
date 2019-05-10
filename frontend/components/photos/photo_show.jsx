import React from 'react';
import EditPhotoFormContainer from './edit_photo_form_container';
import Footer from '../footer';
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';

class PhotoShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchPhoto(this.props.photoId);
    this.props.fetchUser(this.props[this.props.userId]);
  }

  componentWillUnmount() {
    this.props.clearPhotos();
  }
  
  handleDelete(e){
    this.props.deletePhoto(this.props.photoId);
    this.props.history.push("/photos");
  }
  
  render() {
    if (this.props.photo !== undefined) {
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
                  src={this.props.photo.imageUrl}/>
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
                  <Link to={`/users/${this.props.photo.userId}/photos`}
                    className="display-username">
                    {this.props.photo.username}
                  </Link>
                  <button className="blue-button follow-custom">
                    Follow
                  </button>
                </div>
                <div className="photo-details-wrap">
                  <div className="photo-details">
                    <EditPhotoFormContainer photoId={this.props.photoId}/>
                  </div>
                  <div>
                    {/* <CommentsIndexContainer></CommentsIndexContainer> */}
                    <hr className="display-edit-line"></hr>
                    <h1>comments index container here</h1>
                    <hr className="display-edit-line"></hr>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )
    } else {
      return(
        <div className="loader">
          <ReactLoading type={"spin"} color={"#FF0084"} height={'8%'} width={'8%'} />
          <h1 className="loader-text">loading...</h1>
        </div>
      )
    } 
  }
}

export default PhotoShow;