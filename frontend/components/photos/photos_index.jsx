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
            <div className="row">{photos}</div>
          </ul>
        </div>
        <Footer />
      </>
    ) 
  }
}

export default PhotosIndex;