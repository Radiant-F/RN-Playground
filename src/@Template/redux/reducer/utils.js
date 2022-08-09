import {createSlice} from '@reduxjs/toolkit';
import {SET_FOCUSED_SCREEN, SET_LOADING} from '../ActionTypes';

export const utilsSlice = createSlice({
  name: 'utils',
  initialState: {
    loading: false,
    refresher: false,
    focused_screen: null,
  },
  reducers: {
    utilsReducer: (state, {payload}) => {
      const {value, type} = payload;
      switch (type) {
        case SET_LOADING:
          return {...state, loading: value};
        case SET_FOCUSED_SCREEN:
          return {...state, focused_screen: value};
        default:
          return state;
      }
    },
  },
});

export const {utilsReducer} = utilsSlice.actions;

export default utilsSlice.reducer;
