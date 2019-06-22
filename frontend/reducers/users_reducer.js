import { 
  RECEIVE_CURRENT_USER,
  RECEIVE_USER,
  REMOVE_USERS,
} from '../actions/session_actions';
import { merge } from 'lodash';

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState); 
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, {[action.currentUser.id]: action.currentUser});
      case RECEIVE_USER:
        return merge({}, oldState, {[action.user.id]: action.user});
      case REMOVE_USERS:
        return {};
      default:
        return oldState;
  }
};

export default usersReducer;