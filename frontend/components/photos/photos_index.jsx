import React from 'react';
import PhotosIndexItem from './photos_index_item';
import Footer from '../footer';
import { Link } from 'react-router-dom';

class PhotosIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchPhotos();
  }

  render() {
    let photos = this.props.photos.map(photo => {
      return (
          <PhotosIndexItem
            key={photo.id}
            photo={photo.imageUrl}
            photoId={photo.id}
            photoTitle={photo.title}
            photoDescription={photo.description}
            username={photo.username}
            userId={photo.userId}
            className="photos-grid"
          />
      )
    });

    let shuffle = (photos) => {
      var currentIndex = photos.length, temporaryValue, randomIndex;
      while (0 !== currentIndex) {
    
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        temporaryValue = photos[currentIndex];
        photos[currentIndex] = photos[randomIndex];
        photos[randomIndex] = temporaryValue;
      }
      return photos;
    };

    return (
      <>
        <div className="index-flex-center-col">
          <div className="options-bar-container index-flex-center-col">
            <div className="options-bar index-flex-center-row">
              <div className="option-tab index-flex-center-row">
                <Link to="/" className='options-tabs-font-style'>Explore</Link>
              </div>
              <div className="option-tab index-flex-center-row">
                <Link to="/" className='options-tabs-font-style'>Trending</Link>
              </div>
            </div>
          </div>
          <div className="index-page-header-container index-flex-center-col">
            <div className="index-page-header index-flex-left">
              <h1 className="options-font-style">Explore</h1>  
            </div>
          </div>
          <ul className="index-ul-container index-items-flex">
            <div className="index-li-flex">{shuffle(photos)}</div>
          </ul>
        </div>
        <Footer />
      </>
    ) 
  }
}

export default PhotosIndex;
