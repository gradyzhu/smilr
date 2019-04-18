import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAlbum } from '../../actions/albums_actions';
import Footer from '../footer';

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAlbum(this.props.albumId); 
  }

  render() {
    if (!this.props.album) return null;

    let photos = this.props.album.photos.map(photo => {
      return (
        <div className="photos-grid">
          <div className="photo-container">
            <Link to={`/photos/${photo.id}`}>
              <div className="overlay">
                <div className="overlay-50">
                  <div className="flex-col-end-1">
                    <div className="details-title">{photo.title}</div>
                    <div className="details-username">by {photo.username}</div>
                  </div>
                </div>
              </div>
              <img src={photo.imageUrl} className="image"></img>
            </Link>
          </div>
        </div>
      )
    })
    return(
      <>
        <div className="album-show-container flex-col-center">
          <div className="album-back-bar flex-row-left">
            <Link to={`/users/${this.props.userId}/albums`} className="show-back-to-albs flex-row-left">
              <i className="fas fa-arrow-left"></i>
              <p className="show-back-to-albs">Back to albums</p>
            </Link>
          </div>
          <div className="album-head flex-col-center">
              <h1 className="album-name">{this.props.album.name}</h1>
              <h1 className="album-description">{this.props.album.description}</h1>
              <h1 className="album-length">{this.props.album.photos.length} photos</h1>
              <h1 className="album-username">by: {this.props.album.username}</h1>
          </div>
          <ul className="index-ul-container-1 index-items-flex">
            <div className="index-li-flex">{photos}</div>
          </ul>
        </div>
        <Footer />
      </>
    )
  }
}

const mstp = ({entities: {albums, users}}, ownProps) => {
  
  let albumId = Number(ownProps.match.params.id)
  return({
    albumId: albumId,
    album: albums[albumId]
  });
};

const mdtp = dispatch => {
  return({
    fetchAlbum: id => dispatch(fetchAlbum(id))
  });
};

export default connect(mstp, mdtp)(AlbumShow);
