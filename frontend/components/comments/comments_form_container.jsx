import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createComment } from '../../actions/comments_actions';

class CommentsForm extends React.Component {
  state = {
    body: '',
    photo_id: parseInt(this.props.photoId),
    user_id: this.props.sessionId
  };

  handleSubmit = e =>  {
    e.preventDefault();
    this.props.createComment(this.state);
    this.setState({ body: '' });
  }

  handleInput = field => {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  };

  render() {
    if (!this.props.sessionId) return null;
    return (
      <form 
        onSubmit={this.handleSubmit}
        className="add-comment-form flex-end-col">
        <textarea
          type="text"
          value={this.state.body}
          onChange={this.handleInput("body")}
          className="add-comment-textarea"/>
        <button className="add-comment-button blue-button">
            Comment
        </button>
      </form>
    )
  }
}

const mstp = ({session}) => {
  return ({
    sessionId: session.id
  });
};

const mdtp = dispatch => {
  return ({
    createComment: comment => dispatch(createComment(comment))
  });
};

export default withRouter(connect(mstp, mdtp)(CommentsForm));