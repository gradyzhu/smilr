import React from 'react';

const FileInput = ({ handleFile }) => {
  return (
    <div>
      <div className="upload-button-container">
        <div className="upload-button-contents">
          <div className="upload-button-wrap">
            <label> 
              <h1 className="upload-button">
                <i className="fas fa-file-upload"></i>
              </h1>
              <input type="file" onChange={handleFile} className="hide"/>
            </label>
          </div>
          <h1 className="upload-text">Upload Photos</h1>
        </div>
      </div>
      <div className="upload-bg"></div>
    </div>
  )
}

export default FileInput;