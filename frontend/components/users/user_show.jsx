import React from 'react';
import PhotosIndexItem from '../photos/photos_index_item';
import Footer from '../footer';
import CreateAlbumFormContainer from '../albums/create_album_form_container';
import { Link } from 'react-router-dom';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPhotos();
    this.props.fetchUser(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.url !== this.props.match.url) {
      this.props.fetchPhotos(this.props.match.params.id);
      this.props.fetchUser(this.props.match.params.id);
    }
  }

  render() {
    if (!this.props.user) return null;

    let user = this.props.user;
    let userId = this.props.userId;
    let email = this.props.user.email;
    let photos = this.props.photos.map(photo => {
      if (photo.userId == userId) {
        return (
          <PhotosIndexItem 
            key={photo.id} 
            username={this.props.user.username}
            photo={photo.imageUrl}
            photoId={photo.id}
            photoTitle={photo.title}
            photoDescription={photo.description}
            className="photos-grid"/>)
      }
    });
    return (
      <>
        <div className="index-flex-center-col">
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
                        <h1 className="followers-text">{email}</h1>
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
                <h1 className='options-tabs-font-style'>Photostream</h1>
              </div>
              <div className="option-tab index-flex-center-row">
                <h1 className='options-tabs-font-style'>Albums</h1>
              </div>
              <CreateAlbumFormContainer />
            </div>
          </div>

          <div className="filters-bar-container index-flex-center-col">
            <div className="filters-bar index-flex-left">
              <div className="filter-tab index-flex-center-row">
                <Link to="/" className='filters-tabs-font-style'>Date uploaded ▾</Link>
              </div>
              <div className="filter-tab index-flex-center-row">
                <Link to="/" className='filters-tabs-font-style'>Public view ▾</Link>
              </div>
            </div>
          </div>

          <ul className="index-ul-container index-items-flex">
            <div className="index-li-flex">{photos}</div>
          </ul>
        </div>
        <Footer />
      </>
    ) 
  }
}

export default UserShow;
