import React from 'react';
import ReactLoading from 'react-loading';
import AlbumsIndexItem from './albums_index_item';
import CreateAlbumModal from './create_album_modal';
// import CreateAlbumFormContainer from './create_album_form_container';
import { Link } from 'react-router-dom';

class AlbumsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };

    this.handleShowModal = this.handleShowModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount() {
    let userId = parseInt(this.props.userId, 10);
    this.props.fetchAlbums(userId);
  }

  handleShowModal(event) {
    this.setState({
      showModal: true
    });
  }

  handleCloseModal(event) {
    this.setState({
      showModal: false
    });
  }
  render() {
    // if (!this.props.user) return null;
    // let user = this.props.user;
    // let email = this.props.user.email;
    let userId = parseInt(this.props.userId, 10);
    let albums = this.props.albums.map(album => {
      if (album.userId === userId) {
        return(
          <AlbumsIndexItem 
            key={album.id}
            albumId={album.id}
            name={album.name}/>
        );
      }
    });

    return(
      <>
        <CreateAlbumModal
          show={this.state.showModal}
          closeModal={this.handleCloseModal}
          userId={parseInt(this.props.match.params.id, 10)}
        />
        {/* banner component */}
        <div className="user-banner-container index-flex-center-col">
          <div className="user-banner flex-col-bottom">
            <div className="user-details-columns flex-row-left">
              <div className="user-avatar flex-col-center">
                <div className="user-avatar-image-well">
                </div>
              </div>
              <div className="user-details-wrap flex-col-center">
                <div className="user-details flex-col-left-text">
                  <div className="username">
                    {/* <h1 className="username-text">{user.username}</h1> */}
                  </div>
                  <div className="followers flex-row-left">
                    <div className="border flex-col-center">
                      {/* <h1 className="followers-text">{email}</h1> */}
                    </div>
                    <div className="border flex-col-center">
                      <h1 className="followers-text">17 Followers</h1>
                    </div>
                    <div className="border flex-col-center">
                      <h1 className="followers-text">32 Followers</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* options bar component */}
        <div className="options-bar-container index-flex-center-col">
          <div className="options-bar index-flex-center-row">
            <div className="option-tab index-flex-center-row">
              <Link to={`/users/${this.props.match.params.id}/photos`} className='options-tabs-font-style'>
                Photostream
              </Link>
            </div>
            <div className="option-tab index-flex-center-row">
              <Link to={`/users/${this.props.match.params.id}/albums`} className='options-tabs-font-style'>
                Albums
              </Link>
            </div>
          </div>
        </div>

        {/* album bar component*/}
        <div className="album-options flex-center-1">

        </div>
        <h1 onClick={this.handleShowModal}>
          New Album
        </h1>

        <div className="full-width flex-center-1">
          <div className="albums-index-container flex-center flex-wrap">
            {albums}
          </div>
        </div>
      </>
    )
  }
}

export default AlbumsIndex;