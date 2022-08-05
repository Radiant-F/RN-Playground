import {LOGIN} from '../actionTypes';

export default (state = {token: null, userData: null}, action) => {
  switch (action.type) {
    case LOGIN:
      return {...state, token: action.payload};
    default:
      return state;
  }
};
