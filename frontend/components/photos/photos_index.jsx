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
        <div>
          <PhotosIndexItem 
            key={photo.id} 
            photo={photo.imageUrl}
            photoId={photo.id}
            photoTitle={photo.title}
            photoDescription={photo.description}
            // username={}
            className="photos-grid"/>
        </div>
    )});

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
    }

    return (
      <>
        <div className="options-bar-wrap">
          <div className="options-bar">
            <Link to="/">Explore</Link>
            <Link to="/">Trending (Coming Soon)</Link>
          </div>
        </div>
        <div className="tester">
          <ul className="test-center">
            <div className="replace-later">{shuffle(photos)}</div>
          </ul>
        </div>
        <Footer />
      </>
    ) 
  }
}

export default PhotosIndex;