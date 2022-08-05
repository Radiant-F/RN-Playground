import {CREATE, FETCH_ALL} from '../actionTypes';

export default (todos = null, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return todos;
    default:
      return todos;
  }
};
