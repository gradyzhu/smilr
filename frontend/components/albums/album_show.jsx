import React from 'react';
import { Link } from 'react-router-dom';
class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPhotos(); 
    this.props.fetchAlbum(this.props.albumId); 
  }

  render() {
    return(
      <>
        <div className="album-show-container">
          {/* <Link to={`/users/${this.props}/albums`} className="show-back-to-ex flex-row-left"> */}
          <Link to={`/`} className="show-back-to-ex flex-row-left">
            <i className="fas fa-arrow-left"></i>
            <p className="show-back-to-albs">Back to albums</p>
          </Link>
          {/* { photos} */}
        </div>
      </>
    )
  }
}

export default AlbumShow;
