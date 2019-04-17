import React from 'react';
import AlbumModalIndexItem from './album_modal_index_item';
import CreateAlbumForm from './create_album_form';

class CreateAlbumModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      album: {

      }
    };
  }
  componentDidMount() {
    this.props.fetchPhotos();
    // this.props.createAlbum();
  }

  // handleCheck() {
  //   this.setState() {
      
  //   }
  // }

  render() {
    const className = this.props.show ? "modal" : "modal display-none";
    const photos = this.props.photos.map(photo => {
      return(
        <div 
          className="album-modal-index-item-container flex-row-center"
          key={photo.id}>
          {/* <input type="checkbox" id="checkbox-1" className="checkbox-style"></input> */}
          <label for="checkbox-1">
          <AlbumModalIndexItem 
            photo={photo.imageUrl}
          />
          </label>
        </div>
      )
    });
    return(
      <>
        <div className={className}>
          <div className="full-width flex-center">
            <i onClick={this.props.closeModal} className="fa fa-times"></i>
            <div className="modal-container-wrap flex-row-center">
              <div className="modal-container flex-col-center">
                <div className="create-album-text-container">
                  <h1 className="create-album-text">Create a new Album</h1>
                </div>
                {/* <CreateAlbumFormContainer userId={this.props.userId}/> */}
                <CreateAlbumForm 
                  userId={this.props.userId}
                  sessionId={this.props.sessionId}/>
              </div>
              <div className="vertical-line"></div>
              <div className="modal-photo-index flex-row-center">
                <div className="modal-index-items">
                  {photos}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default CreateAlbumModal;
