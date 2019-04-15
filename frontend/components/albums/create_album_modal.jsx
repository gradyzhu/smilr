import CreateAlbumFormContainer from './create_album_form_container';
import React from 'react';

const CreateAlbumModal = props => {
  const className = props.show ? "modal display-block flex-center-1" : "modal display-block flex-center-1";

  // const handleEsc = event => {
  //   console.log('hi');
  //   if (event.key == '27') {
  //     className = "modal display-none";
  //   }
  // };

  return(
    <>
      <div className={className}>
        <i onClick={props.closeModal} className="fa fa-times"></i>
        <div className="modal-size flex-center-1">
          <div className="modal-content flex-center-col">
            <div className="create-album-text-container">
              <h1 className="create-album-text">Create a new Album</h1>
            </div>
            <CreateAlbumFormContainer 
              userId={props.userId}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateAlbumModal;