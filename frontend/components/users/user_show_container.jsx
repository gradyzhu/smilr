
import UserShow from './user_show';
import { connect } from 'react-redux';
import { 
  fetchPhotos
 } from '../../actions/photos_actions';

const mapStateToProps = ({session, entities: {photos}}) => {
  let userPhotos = Object.values(photos);
  
  return ({
    photos: userPhotos,
    sessionId: session.id
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchPhotos: () => dispatch(fetchPhotos())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
