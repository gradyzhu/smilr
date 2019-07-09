import {
  RECEIVE_TAGS,
  RECEIVE_TAG,
  REMOVE_TAGS
} from '../actions/tags_actions';

const tagsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch(action.type) {
    case RECEIVE_TAGS:
      return action.payload;
    case RECEIVE_TAG:
      let newTag = {[action.payload.id]: action.payload};
      newState = Object.assign({}, oldState, newTag);
      return newState;
    case REMOVE_TAGS:
      return {};
    default:
      return oldState;
  }
};

export default tagsReducer;