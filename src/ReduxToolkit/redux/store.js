import {configureStore} from '@reduxjs/toolkit';
import counter from './counter';
import auth from './auth';
import fetching from './fetching';

export const store = configureStore({
  reducer: {counter, auth, fetching},
});
