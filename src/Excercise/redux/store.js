import {configureStore} from '@reduxjs/toolkit';
import user from './reducers/user';
import utilities from './reducers/utilities';

export const store = configureStore({reducer: {user, utilities}});
