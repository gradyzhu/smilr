import React from 'react';
import AlbumModalIndexItem from './album_modal_index_item';
import CreateAlbumFormContainer from './create_album_form_container';

class CreateAlbumModal extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  componentDidMount() {
    this.props.fetchPhotos();
  }

  render() {
    const className = this.props.show ? "modal" : "modal display-none";
    const photos = this.props.photos.map(photo => {
      return(
        <AlbumModalIndexItem 
          key={photo.id}
          photo={photo.imageUrl}
        />
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
                <CreateAlbumFormContainer userId={this.props.userId}/>
              </div>
              <div className="vertical-line"></div>
              <div className="modal-photo-index flex-row-center">
                <div className="modal-index-item">
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

{/* <ul className="index-ul-container index-items-flex">
  <div className="index-li-flex">{(photos)}</div>
</ul> */}

  // const handleEsc = event => {
    //   if (event.key == '27') {
      //     className = "modal display-none";
      //   }
      // };
      