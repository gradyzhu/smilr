import React from 'react';
import AlbumsIndexItem from './albums_index_item';
import CreateAlbumModalContainer from './create_album_modal_container';
import { Link } from 'react-router-dom';
import Footer from '../footer';

class AlbumsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.handleShowModal = this.handleShowModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount() {
    let userId = parseInt(this.props.userId, 10);
    this.props.fetchAlbums(userId);
    this.props.fetchUser(userId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.url !== this.props.match.url) {
      this.props.fetchAlbums(this.props.match.params.id);
      this.props.fetchUser(this.props.match.params.id);
    }
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
    if (!this.props.users[this.props.userId]) return null;

    let user = this.props.users[this.props.userId];
    let showCreateButton = this.props.sessionId === this.props.userId;
    let className = showCreateButton ? "display-block" : "display-none";
    let albums = this.props.albums.map(album => {
        return(
          <AlbumsIndexItem 
            key={album.id}
            albumId={album.id}
            name={album.name}/>
        );
      }
    );
    
    return(
      <>
        <CreateAlbumModalContainer
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
                    <h1 className="username-text">{user.username}</h1>
                  </div>
                  <div className="followers flex-row-left">
                    <div className="border flex-col-center">
                      <h1 className="followers-text">{user.email}</h1>
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
        <div className="full-width flex-center album-options-container">
          <div className="album-options flex-row-end">
            <div className={className}>
              <button
                onClick={this.handleShowModal}
                className="create-new-alb-button flex-row-end">
                + New Album</button>
            </div>
          </div>
        </div>


        <div className="full-width">
          <div className="albums-index-container-wrap flex-row-center">
            <div className="albums-index-container flex-row-start-top-left flex-wrap2">
              {albums}
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default AlbumsIndex;