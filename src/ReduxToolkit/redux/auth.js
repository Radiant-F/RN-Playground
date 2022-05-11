import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

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
  },
});

export const {authType} = authSlice.actions;

export default authSlice.reducer;
