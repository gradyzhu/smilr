import React from 'react';
import PhotosIndexItem from '../photos/photos_index_item';
import Footer from '../footer';
import { Link } from 'react-router-dom';

class UserShow extends React.Component {
  state = { offset: 0 }

  componentDidMount() {
    const { fetchPhotos, fetchUser, userId } = this.props;

    fetchPhotos(0, userId);
    fetchUser(userId);

    window.addEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate(prevProps) {
    const { fetchPhotos, fetchUser, url, userId, clearPhotos } = this.props;

    if (prevProps.match.url !== url) {
      clearPhotos();
      fetchUser(userId);
      fetchPhotos(0, userId);
    }
  }

  componentWillUnmount() {
    this.props.clearPhotos();
  }

  handleScroll = e => {
    const { offset } = this.state;
    const { fetchPhotos, userId } = this.props;
    
    let newOffset = offset + 1;
    
    let bottom = window.innerHeight + document.documentElement.scrollTop > document.documentElement.offsetHeight * 0.75;

    if (bottom) {
      fetchPhotos(offset, userId);
      this.setState({ offset: newOffset });
    }
  }

  render() {
    if (!this.props.user) return null;
    debugger
    const { user: {email, username}, photos, userId } = this.props;

    let userPhotos = photos.map(photo => {
        return (
          <PhotosIndexItem 
            key={photo.id} 
            username={username}
            photo={photo.imageUrl}
            photoId={photo.id}
            photoTitle={photo.title}
            photoDescription={photo.description}
            commentCount={photo.comments.length}/>
        );
      }
    );

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
                <Link to={`/users/${userId}/photos`} className='options-tabs-font-style'>
                  Photostream
                </Link>
              </div>
              <div className="option-tab index-flex-center-row">
                <Link to={`/users/${userId}/albums`} className='options-tabs-font-style'>
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
