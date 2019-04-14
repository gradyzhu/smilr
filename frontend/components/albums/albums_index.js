import React from 'react';
import ReactLoading from 'react-loading';
import AlbumsIndexItem from './albums_index_item';
import CreateAlbumFormContainer from '../albums/create_album_form_container';
import { Link } from 'react-router-dom';

class AlbumsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let userId = parseInt(this.props.userId, 10);
    this.props.fetchAlbums(userId);
  }

  render() {
    // if (!this.props.user) return null;

    // let user = this.props.user;
    // let email = this.props.user.email;
    let albums = this.props.albums.map(album => {
      return(
        <AlbumsIndexItem 
          key={album.id}
          name={album.name}/>
      );
    });

    if (this.props.albums.length !== 0) {
      return(
        <>
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
          <CreateAlbumFormContainer 
            userId={parseInt(this.props.match.params.id, 10)}
          />
          <div className="full-width flex-center-1">
            <div className="albums-index-container flex-center flex-wrap">
              {albums}
            </div>
          </div>
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

export default AlbumsIndex;