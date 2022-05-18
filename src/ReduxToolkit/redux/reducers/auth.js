import {createSlice} from '@reduxjs/toolkit';
import {login} from '../actions/auth';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    auth_type: 'login',
    user_data: null,
    status: null,
  },
  reducers: {
    authType: (state, action) => {
      state.auth_type = action.payload;
    },
    userData: (state, action) => {
      state.user_data = action.payload;
    },
  },
  extraReducers: {
    [login.pending]: state => {
      state.status = 'loading';
    },
    [login.fulfilled]: state => {
      state.status = 'success';
    },
    [login.rejected]: state => {
      state.status = 'error';
    },
  },
});

export const {authType, userData} = authSlice.actions;

export default authSlice.reducer;
