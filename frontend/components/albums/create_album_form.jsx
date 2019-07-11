import React from 'react';

const CreateAlbumForm = props => {  
  const { handleInput, handleSubmit, description, name, handleClick } = props;
  return (
    <div className="step-1-container flex-col-center">
      <div className="step-text flex-row-start">
        <h1>Step 1 - Album details</h1>
      </div>
      <div className="create-album-form-container flex-col-center">
        <form
          onSubmit={handleSubmit} 
          className="flex-col-center">
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={handleInput("name")}
            className="create-album-form-input"/>
          <textarea
            type="text"
            value={description}
            placeholder="description"
            onChange={handleInput("description")}
            className="create-album-form-textarea"/>
          <div className="">
            <button className="blue-button create-album-form-button">
              Create
            </button>
          </div>
        </form> 
      </div>
    </div>
  )
}

export default CreateAlbumForm;