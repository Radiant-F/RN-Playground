import {useNavigation} from '@react-navigation/native';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {fetchLogin, fetchUserDetail} from '../../utils/APIs';
import {userData} from '../reducers/auth';

export const login = createAsyncThunk(
  'auth/login',
  async ({formData, navigate}, {dispatch}) => {
    console.log(formData);
    const {data} = await fetchLogin(formData);
    dispatch(userData(data));
    navigate('Dashboard');
  },
);

export const getUserDetail = createAsyncThunk(
  'auth/getUserDetail',
  async token => {
    const {data} = await fetchUserDetail(token);
  },
);
