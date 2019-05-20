import React from 'react';
import { connect } from 'react-redux';
import { 
  fetchComments,
  deleteComment,
  createComment,
} from '../../actions/comments_actions';
import { withRouter } from 'react-router';

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
        <div className="comment-index-item flex-center-col" key={comment.id}>
          <div className="comment-username flex-start-center">{comment.username}</div>
          <div className="comment-body flex-start-top">{comment.body}</div>
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
    fetchComments: photo_id => dispatch(fetchComments(photo_id))
  });
};

export default withRouter(connect(mstp, mdtp)(CommentsIndex));