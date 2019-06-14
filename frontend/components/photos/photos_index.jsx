import React from 'react';
import PhotosIndexItem from './photos_index_item';
import Footer from '../footer';
import { Link } from 'react-router-dom';

class PhotosIndex extends React.Component {
  state = {
    offset: 0
  };

  componentDidMount() {
    const { fetchPhotos } = this.props;
    fetchPhotos(0);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    this.props.clearPhotos();
  }

  handleScroll = e => {
    const { offset } = this.state;
    const { fetchPhotos } = this.props;
    
    let newOffset = offset + 1;

    let bottom = window.innerHeight + document.documentElement.scrollTop > document.documentElement.offsetHeight * 0.75

    if (bottom) {
      fetchPhotos(offset);
      this.setState({ offset: newOffset });
    }
  }

  render() {
    const { photos } = this.props;

    let currentPhotos = photos.map(photo => {
      return (
          <PhotosIndexItem
            key={photo.id}
            photo={photo.imageUrl}
            photoId={photo.id}
            photoTitle={photo.title}
            photoDescription={photo.description}
            username={photo.username}
            userId={photo.userId}
            commentCount={photo.comments.length}/>
      )
    });

    return (
      <>
        <div className="index-flex-center-col">
          <div className="options-bar-container index-flex-center-col">
            <div className="options-bar index-flex-center-row">
              <div className="option-tab-explore index-flex-center-row">
                <Link to="/" className='options-tabs-font-style'>Explore</Link>
              </div>
            </div>
          </div>
          <div className="index-page-header-container index-flex-center-col">
            <div className="index-page-header index-flex-left">
              <h1 className="options-font-style">Explore</h1>  
            </div>
          </div>
          <ul className="index-ul-container index-items-flex">
            <div className="index-li-flex">{currentPhotos}</div>
          </ul>
        </div>
        <Footer />
      </>
    ) 
  }
}

export default PhotosIndex;
