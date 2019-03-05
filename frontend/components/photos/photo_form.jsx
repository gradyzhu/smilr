import React from'react';

class PhotoForm extends React.Component {
  constructor(props) {
    super(props);

    let photo = this.props.photo;
    this.state = {
      title: photo.title,
      description: photo.description,
      photoFile: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo[title]', this.state.title);
    formData.append('photo[description]', this.state.description);
    formData.append('photo[image]', this.state.photoFile);
    
    this.props.createPhoto(formData);
  }

  handleFile(e) {
    this.setState({photoFile: e.currentTarget.files[0]});
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
        <input 
          type="file"
          onChange={this.handleFile} />
        <button>Upload</button>
      </form>
    )
  }
}

export default PhotoForm;