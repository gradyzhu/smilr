import {
  RECEIVE_CURRENT_USER, 
  LOGOUT_CURRENT_USER
} from '../actions/session_actions';

const sesssionReducer = (oldState = {}, action) => {
  Object.freeze(oldState); 
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return {id: action.currentUser.id};
    case LOGOUT_CURRENT_USER:
      return {id: null};
    default:
      return oldState;
  }
};

export default sesssionReducer;