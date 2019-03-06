import UploadForm from './upload_form';
import { connect } from 'react-redux';
import { createPhoto } from '../../actions/photos_actions';

const mapStateToProps = (state) => {
  return ({
    photo: {
      title: "",
      description: ""
    },
    formType: "Upload"
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    createPhoto: (photo) => dispatch(createPhoto(photo)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadForm);
