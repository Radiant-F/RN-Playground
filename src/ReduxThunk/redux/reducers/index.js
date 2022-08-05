import {combineReducers} from 'redux';
import todos from './todos';
import auth from './auth';
import utilities from './utilities';

export default combineReducers({
  todos,
  auth,
  utilities,
});
