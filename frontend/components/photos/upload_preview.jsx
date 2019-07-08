import React from 'react';

const UploadPreview = props => {
  const { handleInput, handleSubmit, title, description, photoUrl } = props;

  let preview = photoUrl ? <img className="preview-image" src={photoUrl} /> : null
  
  return (
    <>
      <form onSubmit={handleSubmit}>
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
                        value={title}
                        onChange={handleInput("title")}
                        className="upload-title"/>
                    </label>
                    <label>
                      <textarea 
                        type="text" placeholder="description"
                        value={description} 
                        onChange={handleInput("description")}
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

export default UploadPreview;