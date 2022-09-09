import {configureStore} from '@reduxjs/toolkit';
import auth from './reducer/auth';
import utils from './reducer/utils';

export const store = configureStore({reducer: {utils, auth}});
