import React from'react';
import Footer from '../footer';

class UploadForm extends React.Component {
  state = {
    title: "",
    description: "",
    photoFile: null,
    photoUrl: null,
    uploadState: false,
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo[title]', this.state.title);
    formData.append('photo[description]', this.state.description);
      if (this.state.photoFile) {
        formData.append('photo[image]', this.state.photoFile);
      }
    this.props.createPhoto(formData).then(res => this.props.history.push(`/photos/${res.photo.id}`));
  }

  const handleFile = e => {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({photoFile: file, photoUrl: fileReader.result, uploadedState: true});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }

    this.setState({uploadState: true});
  };

  handleInput(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  render() {
    const preview = this.state.photoUrl ? <img className="preview-image" src={this.state.photoUrl} /> : null;
    
    if (this.state.uploadState === false) {
      return (
        <div>
          <div className="upload-button-container">
            <div className="upload-button-contents">
              <div className="upload-button-wrap">
                <label> 
                  <h1 className="upload-button"><i className="fas fa-file-upload"></i></h1>
                  <input type="file" onChange={this.handleFile} className="hide"/>
                </label>
              </div>
              <h1 className="upload-text">Upload Photos</h1>
            </div>
          </div>
          <Footer />
          <div className="upload-bg"></div>
        </div>

      )
    } else {
      return (
        <>
        <form onSubmit={this.handleSubmit}>
          <div className="preview-page">
            <div className="preview-columns">
              <div className="upload-column">
                <div className="photo-details-row">
                  <div className="photo-details-row-flex">
                    <div className="photo-details">
                      <label>
                        <input 
                          type="text" 
                          placeholder="title" 
                          value={this.state.title}
                          onChange={this.handleInput("title")}
                          className="upload-title"/>
                      </label>
                      <label>
                        <textarea 
                          type="text" placeholder="description"
                          value={this.state.description} 
                          onChange={this.handleInput("description")}
                          className="upload-des"/>
                      </label>
                      <button 
                        className="blue-button2 upload-button-custom">Upload
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="preview-column">
                {preview}
                <h1 className="preview-text">image preview</h1>
              </div>
            </div>
          </div>
        </form>
        <div className="upload-bg"></div>
        </>
      )
    }
  }
}

export default UploadForm;