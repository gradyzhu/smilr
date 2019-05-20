import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    this.props.deleteComment(this.props.commentId);
  }

  render() {
    return(
      <div className="comment-index-item flex-center-col">
        <div className="flex-start-center">
          <i 
          className="fa fa-times remove-comment"
          onClick={this.handleDelete}
          ></i>
          <Link className="comment-username"
            to={`/users/${this.props.commenterId}/photos`}>{this.props.username}
          </Link>
        </div>
        <div className="comment-body flex-start-top">{this.props.body}</div>
      </div>
    )
  };
}

export default withRouter(CommentIndexItem);
