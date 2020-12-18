import { combineReducers } from 'redux';
import auth from './auth';
import flight from './flight';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  auth: auth,
  plane: flight,
  form: formReducer,
});
