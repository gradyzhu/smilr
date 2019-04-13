import React from 'react';

class CreateAlbumForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      user_id: this.props.sessionId
    };
    debugger
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  
  handleSubmit(event) {
    debugger
    event.preventDefault();
    this.props.createAlbum(this.state);
  }

  handleInput(event) {
    this.setState({
      name: event.target.value
    });
  }

  render() {
    return(<>
      <div>
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
      </div>
    </>
  )}
}

export default CreateAlbumForm;