import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

const CommentIndexItem = props => {
  const { deleteComment, commentId, username, body, commenterId, sessionId } = props;
  
  const handleDelete = e => {
    deleteComment(commentId);
  };

  let destroy = (sessionId === commenterId) ? <i className="fa fa-times remove-comment" onClick={handleDelete}></i> : null;
  return(
    <div className="comment-index-item flex-center-col">
      <div className="flex-start-center">
        {destroy}
        <Link to={`/users/${commenterId}/photos`} className="comment-username">{username}</Link>
      </div>
      <div className="comment-body flex-start-top">{body}</div>
    </div>
  )
}

export default withRouter(CommentIndexItem);