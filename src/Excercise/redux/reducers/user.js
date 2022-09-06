import {createSlice} from '@reduxjs/toolkit';
import {SET_USER_TOKEN} from '../ActionTypes';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user_token: null,
    user_data: null,
    fetch_status: null,
  },
  reducers: {
    userReducer: (state, {type, payload}) => {
      console.log(type, payload);
      switch (type) {
        case SET_USER_TOKEN:
          return {...state, user_token: payload};
        default:
          return state;
      }
    },
  },
});

export const {userReducer} = userSlice.actions;

export default userSlice.reducer;
