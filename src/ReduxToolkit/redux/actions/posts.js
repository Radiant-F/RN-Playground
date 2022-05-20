import {createAsyncThunk} from '@reduxjs/toolkit';
import {fetchPosts} from '../../utils/APIs';
import {setPosts} from '../reducers/posts';

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async (obj, {dispatch}) => {
    const {data} = await fetchPosts();
    dispatch(setPosts(data));
  },
);
