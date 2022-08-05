import {createSlice} from '@reduxjs/toolkit';
import {fetchSignIn} from '../actions/auth';
import {SET_USER_DATA, SET_USER_DETAIL} from '../ActionTypes';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user_data: null,
    user_detail: null,
    status: null,
  },
  reducers: {
    authReducer: (state, {payload}) => {
      const {type, value} = payload;
      switch (type) {
        case SET_USER_DATA:
          return {...state, user_data: value};
        case SET_USER_DETAIL:
          return {...state, user_detail: value};
        default:
          return state;
      }
    },
  },
  extraReducers: {
    [fetchSignIn.pending]: state => {
      state.status = 'pending';
    },
    [fetchSignIn.fulfilled]: state => {
      state.status = 'success';
    },
    [fetchSignIn.rejected]: state => {
      state.status = 'error';
    },
  },
});

export const {authReducer} = authSlice.actions;

export default authSlice.reducer;
