import UploadForm from './upload_form';
import { connect } from 'react-redux';
import { createPhoto } from '../../actions/photos_actions';

const mstp = (state, ownProps) => {
  return ({
    formType: "Upload"
  });
};

const mdtp = (dispatch) => {
  return ({
    createPhoto: photo => dispatch(createPhoto(photo)),
  });
};

export default connect(mstp, mdtp)(UploadForm);
