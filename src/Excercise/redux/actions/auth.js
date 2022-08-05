import {createAsyncThunk} from '@reduxjs/toolkit';
import {fetchSignIn} from '../../components/APIs';

export const signIn = () =>
  createAsyncThunk('auth/signIn', async (formData, {dispatch}) => {
    const {data} = fetchSignIn(formData);
  });
