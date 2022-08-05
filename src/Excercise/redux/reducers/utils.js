import {createSlice} from '@reduxjs/toolkit';
import {SET_LOADING} from '../actionTypes';

export const utilsSlice = createSlice({
  name: 'utils',
  initialState: {
    loading: false,
    updater: false,
    refresher: false,
  },
  reducers: {
    utilsReducer: (state, {payload}) => {
      const {type, value} = payload;
      switch (type) {
        case SET_LOADING:
          return {...state, loading: value};
        default:
          return state;
      }
    },
  },
});

export const {utilsReducer} = utilsSlice.actions;

export default utilsSlice.reducer;
