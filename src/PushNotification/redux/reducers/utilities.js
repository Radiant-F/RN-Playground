import {LOADING, REFRESHER} from '../actionTypes';

export default (state = {loading: false, refresher: false}, action) => {
  switch (action.type) {
    case LOADING:
      return {...state, loading: action.payload};
    case REFRESHER:
      return action.payload;
    default:
      return state;
  }
};
