import {createAsyncThunk} from '@reduxjs/toolkit';
import {signin, userData} from '../../utils/APIs';
import {SET_USER_DATA, SET_USER_DETAIL} from '../ActionTypes';
import {authReducer} from '../reducer/auth';

export const fetchSignIn = createAsyncThunk(
  'auth/fetchSignIn',
  async (formData, {dispatch}) => {
    const {data} = await signin(formData);
    dispatch(authReducer({type: SET_USER_DATA, value: data}));
  },
);

export const fetchUserDetail = createAsyncThunk(
  'auth/fetchUserDetail',
  async (token, {dispatch}) => {
    const {data} = await userData(token);
    dispatch(authReducer({type: SET_USER_DETAIL, value: data}));
  },
);
