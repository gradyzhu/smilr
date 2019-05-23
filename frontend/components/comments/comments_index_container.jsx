import React from 'react';
import { connect } from 'react-redux';
import { 
  fetchComments,
  deleteComment,
} from '../../actions/comments_actions';
import { withRouter } from 'react-router';
import CommentIndexItem from './comment_index_item';

class CommentsIndex extends React.Component {
  componentDidMount() {
    const { photoId, fetchComments } = this.props;
    fetchComments(photoId);
  }

  render() {
    const { comments, photoId, deleteComment } = this.props;
    if (Object.keys(comments).length === 0) return null;
    
    let allComments = comments.map(comment => {
      return(
        <div key={comment.id}>
          <CommentIndexItem
            commentId={comment.id}
            body={comment.body}
            commenterId={comment.userId}
            username={comment.username}
            deleteComment={deleteComment}
            photoId={photoId}/>
        </div>
      )
    });

    return(
      <>{ allComments }</>
    )
  }
}
 
const mstp = ({entities: {comments}}, ownProps) => {
  return ({
    photoId: ownProps.match.params.id,
    comments: Object.values(comments)
  });
};

const mdtp = dispatch => {
  return ({
    fetchComments: photo_id => dispatch(fetchComments(photo_id)),
    deleteComment: (id) => dispatch(deleteComment(id))
  });
};

export default withRouter(connect(mstp, mdtp)(CommentsIndex));