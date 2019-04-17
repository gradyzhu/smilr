import React from 'react';
import AlbumModalIndexItem from './album_modal_index_item';
import { connect } from 'react-redux';
import { fetchPhotos } from '../../actions/photos_actions';
import { createAlbum } from '../../actions/albums_actions';

class CreateAlbumModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      user_id: this.props.sessionId,
      description: "description",
      photoIds: []
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  componentDidMount() {
    this.props.fetchPhotos();
  }

  handleClick(event) {
    let newPhotoId = parseInt(event.currentTarget.id, 10);
    let photoIds = this.state.photoIds;
    if (photoIds.includes(newPhotoId)) {
      let index = photoIds.indexOf(newPhotoId);
      photoIds.splice(index, 1);
    } else {
      photoIds.push(newPhotoId);
    }
    this.setState({
      photoIds: photoIds
    });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    this.props.createAlbum(this.state);
  }

  handleInput(field) {
    return event => {
      this.setState({[field]: event.currentTarget.value});
    };
  }

  render() {
    const className = this.props.show ? "modal display-block" : "modal display-none";
    const photos = this.props.photos.map(photo => {
      return(
        <div 
          className="album-modal-index-item-container flex-row-center"
          key={photo.id}>
          <label>
            <input 
              onClick={this.handleClick}
              type="checkbox" 
              id={photo.id} 
              className="checkbox-style">
            </input>
            <AlbumModalIndexItem photo={photo.imageUrl}/>
          </label>
        </div>
      )
    });
    return(
      <div className={className}>
        <div className="full-width flex-center">
          <i onClick={this.props.closeModal} className="fa fa-times"></i>
          <div className="modal-container-wrap flex-row-center">
            <div className="modal-container flex-col-center">
              <div className="create-album-text-container">
                <h1 className="create-album-text">Step 1: Album details</h1>
              </div>
              {/* <CreateAlbumForm 
                userId={this.props.userId}
                sessionId={this.props.sessionId}
                photoIds={this.state.photoIds}/> */}
              <form
                onSubmit={this.handleSubmit} 
                className="flex-col-center">
                <input
                  type="text"
                  placeholder="name"
                  value={this.state.name}
                  onChange={this.handleInput("name")}
                  className="create-album-form-input"/>
                <textarea
                  type="text"
                  value={this.state.description}
                  onChange={this.handleInput("description")}
                  className="create-album-form-textarea"/>
                <div className="">
                  <button className="blue-button create-album-form-button">
                    Create
                  </button>
                </div>
              </form>
            </div>
            <div className="vertical-line"></div>
            <div className="modal-photo-index flex-row-center">
              <div className="flex-col-center">
                <h1 className="select-photos-text">Step 2: Select photos</h1>
                <div className="modal-index-items">
                  {photos}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mstp = ({entities: {photos}, session}) => {
  return {
    sessionId: session.id,
    photos: Object.values(photos).filter(photo => {
      return (photo.userId === session.id)
    })
  }
};

const mdtp = dispatch => {
  return ({
    fetchPhotos: () => dispatch(fetchPhotos()),
    createAlbum: album => dispatch(createAlbum(album))
  });
};

export default connect(mstp, mdtp)(CreateAlbumModal);