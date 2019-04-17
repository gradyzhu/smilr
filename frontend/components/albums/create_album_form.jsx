import React from 'react';

class CreateAlbumForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      user_id: this.props.sessionId,
      description: "description"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  
  handleSubmit(event) {
    event.preventDefault();
    this.props.createAlbum(this.state);
  }

  handleInput(field) {
    return event => {
      this.setState({[field]: event.currentTarget.value});
    };
  }
  render() {
    if (this.props.sessionId === this.props.userId) {
      return(
        <>
          <form
            onSubmit={this.handleSubmit} 
            className="flex-col-center">
            <input
              type="text"
              placeholder="name"
              value={this.state.name}
              onChange={this.handleInput("name")}
              className="create-album-form-input"/>
            <textarea
              type="text"
              onChange={this.handleInput("description")}
              className="create-album-form-textarea"/>
            <div className="">
              <button className="blue-button create-album-form-button">
                Create
              </button>
            </div>
          </form>
        </>)
    } else {
      return(<></>)
    }
  }
}

export default CreateAlbumForm;