import React from'react';
import Footer from '../footer';

class UploadForm extends React.Component {
  constructor(props) {
    super(props);

    let photo = this.props.photo;
    this.state = {
      title: photo.title,
      description: photo.description,
      photoFile: null,
      photoUrl: null,
      uploadState: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo[title]', this.state.title);
    formData.append('photo[description]', this.state.description);
      if (this.state.photoFile) {
        formData.append('photo[image]', this.state.photoFile);
      }
    this.props.createPhoto(formData);
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({photoFile: file, photoUrl: fileReader.result, uploadedState: true});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleInput(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  render() {
    const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
    
    if (this.state.uploadState === false) {
      return (
        <div>
          <div className="upload-button-container">
            <div className="upload-button-contents">
              <div className="upload-button-wrap">
                <label> 
                  <h1 className="upload-button"><i class="fas fa-file-upload"></i></h1>
                  <input type="file" onChange={this.handleFile} className="hide"/>
                </label>
              </div>
              <h1 className="upload-text">Drag & Drop Photos or Upload</h1>
            </div>
          </div>
          <Footer />
        </div>

      )
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>Title
            <input type="text" value={this.state.title}onChange={this.handleInput("title")}/>
          </label>
          <label>Description
            <input type="text" value={this.state.description} onChange={this.handleInput("description")}/>
          </label>
          <div>{preview}</div>
          <button>Upload</button>
        </form>
      )
    }
  }
}

export default UploadForm;