import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createPhoto } from '../../actions/photos_actions';
import FileInput from './file_input';
import UploadPreview from './upload_preview';
import { SyncLoader} from 'react-spinners';

const UploadForm = props => {
  const { createPhoto, history } = props;

  const [ title, setTitle ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ photoWidth, setPhotoWidth ] = useState(0);
  const [ photoHeight, setPhotoHeight ] = useState(0);
  const [ photoFile, setPhotoFile ] = useState(null);
  const [ photoUrl, setPhotoUrl ] = useState(null);
  const [ isUploading, setIsUploading ] = useState(false);
  const [ isUploaded, setIsUploaded ] = useState(false);

  const handleFile = event => {
    const file = event.currentTarget.files[0];
    const fileReader = new FileReader();

    if (file) fileReader.readAsDataURL(file);

    fileReader.onloadend = () => {
      let image = new Image();
      image.src = fileReader.result;
      image.onload = () => {
        setPhotoFile(file);
        setPhotoUrl(fileReader.result);
        setIsUploaded(true);
        setPhotoWidth(image.width);
        setPhotoHeight(image.height);
      };
    };
  };

  const handleInput = field => event => {
    if (field === "description") setDescription(event.currentTarget.value);
    if (field === "title") setTitle(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setIsUploading(true);
    const formData = new FormData();
    formData.append('photo[title]', title);
    formData.append('photo[description]', description);
    formData.append('photo[width]', photoWidth);
    formData.append('photo[height]', photoHeight);
    formData.append('photo[image]', photoFile);

    createPhoto(formData).then(res => {
      history.push(`/photos/${res.photo.id}`);
    });
  };

  if (isUploading) {
    return (      
      <div className="user-show-loader">
        <SyncLoader color={'#919191'} />
      </div>)
  }

  if (isUploaded) {
    return <UploadPreview 
              handleInput={handleInput}
              handleSubmit={handleSubmit}
              title={title}
              description={description}
              photoUrl={photoUrl} />
  } else {
    return <FileInput handleFile={handleFile}/>
  }
};

const mstp = (state, ownProps) => ({});

const mdtp = (dispatch) => {
  return ({
    createPhoto: photo => dispatch(createPhoto(photo)),
  });
};

export default connect(mstp, mdtp)(UploadForm);