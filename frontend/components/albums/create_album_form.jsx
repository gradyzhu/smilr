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
      name: event.target.value,
    });
  }

  render() {
    if (this.props.sessionId === this.props.userId) {
      return(
        <>
          <div className="create-album-form">
            <form onSubmit={this.handleSubmit} className="flex-col-center">
              <input
                type="text"
                placeholder="name"
                value={this.state.name}
                onChange={this.handleInput}
                className="create-album-form-input"
              />
              <textarea
                className="create-album-form-textarea"
              />
              <div className="flex-row-right">
                <button className="blue-button create-album-form-button">
                  Create
                </button>
              </div>
            </form>
          </div>
        </>)
    } else {
      return(<></>)
    }
  }
}

export default CreateAlbumForm;