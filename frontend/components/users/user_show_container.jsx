
import UserShow from './user_show';
import { connect } from 'react-redux';
import { 
  fetchPhotos,
  clearPhotos
 } from '../../actions/photos_actions';
 import { fetchUser } from '../../actions/session_actions';

const mapStateToProps = ({session, entities: {photos, users}}, ownProps) => {
  let userPhotos = Object.values(photos);
  let userId = parseInt(ownProps.match.params.id, 10);
  return ({
    photos: userPhotos,
    sessionId: session.id,
    userId: userId,
    url: ownProps.match.url,
    user: users[userId]
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchPhotos: (count, id) => dispatch(fetchPhotos(count, id)),
    fetchUser: (id) => dispatch(fetchUser(id)),
    clearPhotos: () => dispatch(clearPhotos())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
