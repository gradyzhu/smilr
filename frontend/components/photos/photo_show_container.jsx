
import PhotoShow from './photo_show';
import { connect } from 'react-redux';
import { 
  fetchPhoto,
  updatePhoto,
  deletePhoto
 } from '../../actions/photos_actions';
import { 
  fetchUser
 } from '../../actions/session_actions';

const mapStateToProps = ({entities: {photos, users}}, ownProps) => {
  let photoId = ownProps.match.params.id;
  let photo = photos[photoId];
  if (photo == undefined) {
    return ({
      photoId: photoId,
      user: {},
      photo
    });
  } else {
    let user = users[photo.userId];

    return ({
      photoId: photoId,
      user: user,
      photo
    });
  }
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchPhoto: (id) => dispatch(fetchPhoto(id)),
    updatePhoto: (photo) => dispatch(updatePhoto(photo)),
    deletePhoto: (id) => dispatch(deletePhoto(id)),
    fetchUser: (id) => dispatch(fetchUser(id))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoShow);
