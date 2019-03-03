import {combineReducers} from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import photosErrorReducer from './photos_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  photos: photosErrorReducer
});

export default errorsReducer;

