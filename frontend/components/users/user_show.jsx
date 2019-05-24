import React from 'react';
import PhotosIndexItem from '../photos/photos_index_item';
import Footer from '../footer';
import { Link } from 'react-router-dom';

class UserShow extends React.Component {
  componentDidMount() {
    const { fetchPhotos, fetchUser, match: { params: {id} }} = this.props;
    fetchPhotos();
    fetchUser(id);
  }

  componentDidUpdate(prevProps) {
    const { fetchPhotos, fetchUser, match: { url, params: {id} }} = this.props;
    if (prevProps.match.url !== url) {
      fetchPhotos(id);
      fetchUser(id);
    }
  }

  render() {
    if (!this.props.user) return null;
    const { user: {email, username}, userId, photos, match: {params: {id} }} = this.props;

    let userPhotos = photos.map(photo => {
      if (photo.userId == userId) {
        return (
          <PhotosIndexItem 
            key={photo.id} 
            username={username}
            photo={photo.imageUrl}
            photoId={photo.id}
            photoTitle={photo.title}
            photoDescription={photo.description}
            commentCount={photo.comments.length}/>
        )
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
                      <h1 className="username-text">{username}</h1>
                    </div>
                    <div className="followers flex-row-left">
                      <div className="border flex-col-center">
                        <h1 className="followers-text">{email}</h1>
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
              <div className="option-tab-index index-flex-center-row">
                <Link to={`/users/${id}/photos`} className='options-tabs-font-style'>
                  Photostream
                </Link>
              </div>
              <div className="option-tab index-flex-center-row">
                <Link to={`/users/${id}/albums`} className='options-tabs-font-style'>
                  Albums
                </Link>
              </div>
            </div>
          </div>

          <div className="filters-bar-container index-flex-center-col">
            <div className="filters-bar index-flex-left">
              <div className="filter-tab index-flex-center-row">
                <div className='filters-tabs-font-style'>All photos ▾</div>
              </div>
            </div>
          </div>

          <ul className="index-ul-container index-items-flex">
            <div className="index-li-flex">{userPhotos}</div>
          </ul>
    
        </div>
        <Footer />
      </>
    ) 
  }
}

export default UserShow;
