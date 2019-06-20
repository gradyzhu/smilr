import React, { useState, useEffect } from 'react';
import AlbumsIndexItem from './albums_index_item';
import CreateAlbumModalContainer from './create_album_modal_container';
import { Link } from 'react-router-dom';
import Footer from '../footer';

const AlbumsIndex = props => {
  const [ showModal, setShowModal ] = useState(false);
  const { users, userId, fetchAlbums, fetchUser, sessionId, albums, match: { url, params: {id} }} = props;

  useEffect(() => {
    fetchAlbums(id);
    fetchUser(parseInt(id, 10));
  }, [url]);

  handleShowModal = () => {
    setShowModal(true);
  };

  handleCloseModal = () => {
    setShowModal(false);
  };

  if (!props.users[props.userId]) return null;
  
  let user = users[userId];
  let showCreateButton = sessionId === userId;
  let className = showCreateButton ? "display-block" : "display-none";

  let userAlbums = albums.map(album => {
    return(
      <AlbumsIndexItem 
        key={album.id}
        albumId={album.id}
        name={album.name}
        description={album.description}
        photos={album.photos}/>
      );
  });
  
  return(
    <div>
      <CreateAlbumModalContainer
        show={showModal}
        closeModal={handleCloseModal}
        userId={parseInt(id, 10)}/>

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
                    {/* <h1 className="followers-text">17 Followers</h1> */}
                  </div>
                  <div className="border flex-col-center">
                    {/* <h1 className="followers-text">32 Followers</h1> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="options-bar-container index-flex-center-col">
        <div className="options-bar index-flex-center-row">
          <div className="option-tab index-flex-center-row">
            <Link to={`/users/${id}/photos`} className='options-tabs-font-style'>
              Photostream
            </Link>
          </div>
          <div className="option-tab-album index-flex-center-row">
            <Link to={`/users/${id}/albums`} className='options-tabs-font-style'>
              Albums
            </Link>
          </div>
        </div>
      </div>

      <div className="full-width flex-center album-options-container">
        <div className="album-options flex-row-end">
          <div className={className}>
            <button
              onClick={this.handleShowModal}
              className="create-new-alb-button flex-row-end">
              + New Album
            </button>
          </div>
        </div>
      </div>

      <div className="full-width">
        <div className="albums-index-container-wrap flex-col-start">
          <div className="albums-index-container flex-row-start-top-left flex-wrap2">
            {userAlbums}
          </div>
        </div>
      </div>
      <Footer />
    </div>)
}

export default AlbumsIndex;