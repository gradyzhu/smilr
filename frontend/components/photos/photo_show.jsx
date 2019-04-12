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
              <div className="photo-details-wrap">
                <div className="photo-details">
                  <EditPhotoFormContainer photoId={this.props.photoId}/>
                  <hr className="display-edit-line"></hr>
                  <h1>comments container here</h1>
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