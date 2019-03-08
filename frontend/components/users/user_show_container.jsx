
import UserShow from './user_show';
import { connect } from 'react-redux';
import { 
  fetchPhotos
 } from '../../actions/photos_actions';
 import { 
  fetchUser
 } from '../../actions/session_actions';

const mapStateToProps = ({session, entities: {photos, users}}, ownProps) => {
  let userPhotos = Object.values(photos);
  let userId = ownProps.match.params.id;
  return ({
    photos: userPhotos,
    userId: userId,
    user: users[userId],
    sessionId: session.id
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchPhotos: (id) => dispatch(fetchPhotos(id)),
    fetchUser: (id) => dispatch(fetchUser(id))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
