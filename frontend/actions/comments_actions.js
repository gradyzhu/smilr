import * as ApiUtil from '../util/photos_api_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";

const receiveComments = () => {
  return ({
    type: RECEIVE_COMMENTS,
    comments: comments
  });
};

const receiveComment = comment => {
 return ({
   type: RECEIVE_COMMENT,
   comment: comment
 });
};

const removeComment = comment => {
  return ({
    type: DELETE_COMMENT,
    photoId: comment.id
  });
};

export const receiveErrors = errors => ({
  type: RECEIVE_COMMENTS_ERRORS,
  errors: errors
});

export const fetchComments = id => dispatch => {
  return(
    ApiUtil.fetchComments()
      .then( comments => dispatch(receiveComments(comments)))
      .fail( error => dispatch(receiveErrors(error.responseJSON)))
  );
};

export const createComment = comment => dispatch => {
  return(
    ApiUtil.createComment(comment)
      .then( comment => dispatch(receiveComment(comment)))
      .fail( error => dispatch(receiveErrors(error.responseJSON)))
  );
};

export const deleteComment = id => dispatch => {
  return(
    ApiUtil.deleteComment(id)
      .then( comment => dispatch(removeComment(comment)))
      .fail( error => dispatch(receiveErrors(error.responseJSON)))
  );
};