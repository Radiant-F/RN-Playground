import {configureStore} from '@reduxjs/toolkit';
import counter from './reducers/counter';
import auth from './reducers/auth';
import fetching from './reducers/fetching';
import todo from './reducers/todo';
import posts from './reducers/posts';

export const store = configureStore({
  reducer: {counter, auth, fetching, todo, posts},
});
