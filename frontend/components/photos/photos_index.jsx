import React from 'react';
import PhotosIndexItem from './photos_index_item';
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
          className="photos-grid"/>
      </div>
    )});

    // let photos = this.props.photos;

    return (
      <>
        <div className="tester">
          <ul className="test-center">
            <div className="row">{photos}</div>
          </ul>
        </div>
      </>
    ) 
  }
}

export default PhotosIndex;