import React from 'react';

class CreateAlbumForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      user_id: this.props.sessionId
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  
  handleSubmit(event) {
    event.preventDefault();
    this.props.createAlbum(this.state);
  }

  handleInput(event) {
    this.setState({
      name: event.target.value
    });
  }

  render() {
    if (this.props.sessionId === this.props.userId) {
      return(
        <>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="name"
              value={this.state.name}
              onChange={this.handleInput}
            />
            <button className="blue-button">
              Create
            </button>
          </form>
        </>)
    } else {
      return(<></>)
    }
  }
}

export default CreateAlbumForm;