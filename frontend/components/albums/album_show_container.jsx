import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAlbum } from '../../actions/albums_actions';

const AlbumShow = props => {
  const { fetchAlbum, album: { photos, name, description, userId } } = props;

  useEffect(() => {
    fetchAlbum(albumId);
  }, []);

  if (props.album) return null;

  let albumPhotos = album.photos.map(photo => {
    const { id, username, title, imageUrl } = photo;
    return (
      <div key={id} className="album-show-index-item-container">
        <Link to={`/photos/${id}`}>
          <div className="album-show-overlay">
            <div className="album-show-overlay-50">
              <div className="album-show-flex-col-end">
                <div className="details-title">{title}</div>
                <div className="details-username">by {username}</div>
              </div>
            </div>
          </div>
          <img src={imageUrl} className="album-show-image"></img>
        </Link>
      </div>
    )
  })

  return (
    <div className="album-show-container flex-col-center">
      <div className="album-back-bar flex-row-left">
        <Link to={`/users/${userId}/albums`} className="show-back-to-albs flex-row-left">
          <i className="fas fa-arrow-left"></i>
          <p className="show-back-to-albs">Back to albums</p>
        </Link>
      </div>
      <div className="album-head">
        <div className="album-head-overlay">
          <div className="album-head-overlay-50 flex-row-end">
            <div className="test">
              <h1 className="album-name flex-row-center">{name}</h1>
              <h1 className="album-description flex-row-center">{description}</h1>
              <h1 className="album-length flex-row-center">{photos.length} photos</h1>
            </div>
          </div>
        </div>
        <img 
          src={bannerImage}
          className="album-head-image">
        </img>
      </div>
      <ul className="index-ul-container-1 index-items-flex">
        <div className="index-li-flex">{albumPhotos}</div>
      </ul>
    </div>
  )
};

const mstp = ({entities: {albums}}, ownProps) => {
  let albumId = Number(ownProps.match.params.id)
  return({
    albumId: albumId,
    album: albums[albumId]
  });
};

const mdtp = dispatch => {
  return({
    fetchAlbum: id => dispatch(fetchAlbum(id))
  });
};

export default connect(mstp, mdtp)(AlbumShow);
// class AlbumShow extends React.Component {
  // componentDidMount() {
  //   this.props.fetchAlbum(this.props.albumId); 
  // }

  // render() {
    // if (!this.props.album) return null;
    // const { album: {photos, name, description, userId} } = this.props;

  // )

    // let bannerImage = (photos[0] === undefined) ? null : photos[0].imageUrl;
//     return(
//       <>
//         <div className="album-show-container flex-col-center">
//           <div className="album-back-bar flex-row-left">
//             <Link to={`/users/${userId}/albums`} className="show-back-to-albs flex-row-left">
//               <i className="fas fa-arrow-left"></i>
//               <p className="show-back-to-albs">Back to albums</p>
//             </Link>
//           </div>
//           <div className="album-head">
//             <div className="album-head-overlay">
//               <div className="album-head-overlay-50 flex-row-end">
//                 <div className="test">
//                   <h1 className="album-name flex-row-center">{name}</h1>
//                   <h1 className="album-description flex-row-center">{description}</h1>
//                   <h1 className="album-length flex-row-center">{photos.length} photos</h1>
//                 </div>
//               </div>
//             </div>
//             <img 
//               src={bannerImage}
//               className="album-head-image">
//             </img>
//           </div>
//           <ul className="index-ul-container-1 index-items-flex">
//             <div className="index-li-flex">{albumPhotos}</div>
//           </ul>
//         </div>
//       </>
//     )
//   }
// }
