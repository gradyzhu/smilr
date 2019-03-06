import React from 'react';

class EditPhotoForm extends React.Component {
  constructor(props) {
    super(props);

    let photo = this.props.photo;
    this.state = {
      title: photo.title,
      description: photo.description,
      id: photo.id
    };

    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
    this.props.fetchPhoto(this.props.photoId);
  }

  handleInput(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleEdit(e){
    e.preventDefault();
    this.props.updatePhoto(this.state);
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleEdit}>
          <label> Title
            <input value={this.state.title} onChange={this.handleInput("title")}/>
          </label>
          <label> Description
            <input value={this.state.description} onChange={this.handleInput("description")}/>
          </label>
          <button>Edit</button>
        </form>
      </>
    )
  }
}

export default EditPhotoForm;