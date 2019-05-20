import React from 'react';
import { connect } from 'react-redux';
import { 
  fetchComments,
  deleteComment,
} from '../../actions/comments_actions';
import { withRouter } from 'react-router';
import CommentIndexItem from './comment_index_item';


class CommentsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let photoId = this.props.photoId;
    this.props.fetchComments(photoId);
  }
  
  render() {
    if (Object.keys(this.props.comments).length === 0) return null;

    let comments = this.props.comments.map(comment => {
      return(
        <div key={comment.id}>
          <CommentIndexItem
            commentId={comment.id}
            body={comment.body}
            commenterId={comment.userId}
            username={comment.username}
            deleteComment={this.props.deleteComment}
            photoId={this.props.photoId}
          />
        </div>
      )
    });

    return(
      <div>
        { comments }
      </div>
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