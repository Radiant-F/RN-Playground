import {createSlice} from '@reduxjs/toolkit';
import {getPosts} from '../actions/posts';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: {data: null, message: null, status: null},
  },
  reducers: {
    setPosts: (state, {payload}) => {
      state.posts = payload;
    },
  },
  extraReducers: {
    [getPosts.pending]: state => {
      state.posts.status = 'loading';
    },
    [getPosts.fulfilled]: state => {
      state.posts.status = 'success';
    },
    [getPosts.rejected]: state => {
      state.posts.status = 'error';
    },
  },
});

export const {setPosts} = postsSlice.actions;

export default postsSlice.reducer;
