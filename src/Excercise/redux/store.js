import {configureStore} from '@reduxjs/toolkit';
import utils from './reducers/utils';

export const store = configureStore({reducer: {utils}});
