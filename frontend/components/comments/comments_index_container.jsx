import React from 'react';
import { connect } from 'react-redux';
import { 
  fetchComments,
  deleteComment,
} from '../../actions/comments_actions';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';


class CommentsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    let photoId = this.props.photoId;
    this.props.fetchComments(photoId);
  }

  handleDelete(e) {
    this.props.deleteComment(this.props.comment.id);
  }

  render() {
    if (Object.keys(this.props.comments).length === 0) return null;

    let comments = this.props.comments.map(comment => {
      return(
        <div className="comment-index-item flex-center-col" key={comment.id}>
          <Link to={`/users/${comment.userId}/photos`} className="comment-username flex-start-center">{comment.username}</Link>
          <div className="comment-body flex-start-top">{comment.body}</div>
          <i className="fa fa-times remove-comment"></i>
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