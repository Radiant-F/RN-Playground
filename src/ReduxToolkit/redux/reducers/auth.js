import {createSlice} from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    auth_type: 'login',
    user_data: null,
  },
  reducers: {
    authType: (state, action) => {
      state.auth_type = action.payload;
    },
    userData: (state, action) => {
      state.user_data = action.payload;
    },
  },
});

export const {authType, userData} = authSlice.actions;

export default authSlice.reducer;
