import {createSlice} from '@reduxjs/toolkit';
import {SET_LOADING} from '../ActionTypes';

export const utilsSlice = createSlice({
  name: 'utils',
  initialState: {
    loading: false,
    refresher: false,
  },
  reducers: {
    utilsReducer: (state, {payload}) => {
      const {value, type} = payload;
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
