import * as ApiUtil from '../util/comments_api_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";

const receiveComments = comments => {
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
    commentId: comment.id
  });
};

export const receiveErrors = errors => ({
  type: RECEIVE_COMMENTS_ERRORS,
  errors: errors
});

export const fetchComments = photoId => dispatch => {
  return(
    ApiUtil.fetchComments(photoId)
      .then( comments => dispatch(receiveComments(comments)))
      .fail( error => dispatch(receiveErrors(error.responseJSON)))
  );
};

export const createComment = comment => dispatch => {
  debugger
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