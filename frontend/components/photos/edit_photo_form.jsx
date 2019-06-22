import React from 'react';

class EditPhotoForm extends React.Component {
  state = {
    title: this.props.photo.title,
    description: this.props.photo.description,
    id: this.props.photo.id,
    editState: false
  };

  handleInput = field => {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    };
  };

  handleEdit = e => {
    e.preventDefault();
    this.props.updatePhoto(this.state);
    this.setState({editState: false});
  };

  handleEditMode = () => {
    this.setState({editState: true});
  };

  render () {
    const editing = () => {
      return ( 
      <form onSubmit={this.handleEdit}>
        <div className="flex-col">
          <input 
            type="text" 
            value={this.state.title} 
            onChange={this.handleInput("title")} 
            className="edit-form-font-style edit-form-input"/>
          <textarea 
            type="text" 
            value={this.state.description} 
            onChange={this.handleInput("description")} 
            className="edit-form-font-style edit-form-textarea"/>
          <button className="blue-button edit-button-custom">Done</button>
        </div>
      </form>)
    }
  
    const notEditing = () => {
      return (
        <div 
          onClick={this.handleEditMode}
          className="edit-form-highlight">
          <p className="edit-form-display-title">{this.state.title}</p>
          <p className="edit-form-display-des">{this.state.description}</p>
        </div>)
    }
  
    const edit = this.state.editState ? editing() : notEditing();
  
    return(
      <div className="photo-details">
        <div className="display-edit-container">
          <div className="display-edit-wrap">
            <div className="display-edit">
              {edit}
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default EditPhotoForm;