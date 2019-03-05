import React from'react';

class PhotoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.photo;
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentDidMount() {
    // this.props.fetchPhoto();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      title: "",
      description: "",
      date_taken: ""
    });
  }

  handleInput(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Title
          <input 
            type="text"
            value={this.state.title}
            onChange={this.handleInput("title")}
          />
        </label>
        <label>Description
          <input 
            type="text"
            value={this.state.description}
            onChange={this.handleInput("description")}
          />
        </label>
        <button>
          Upload
        </button>
      </form>
    )
  }
}

export default PhotoForm;