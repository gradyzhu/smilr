import { 
  RECEIVE_COMMENTS, 
  RECEIVE_COMMENT,
  DELETE_COMMENT } from '../actions/comments_actions';

const commentsReducer = (oldState = {}, action) => {
  Object.freeze(oldState); 
  let newState = Object.assign({}, oldState);
  switch(action.type) {
    case RECEIVE_COMMENTS:
      return action.comments;
    case RECEIVE_COMMENT:
      let newState = Object.assign({}, oldState, {[action.comment.id]: action.comment});
      return newState;
    case DELETE_COMMENT:
      delete newState[action.id];
      return newState;
    default:
      return oldState;
  }
};

export default commentsReducer;