import {createSlice} from '@reduxjs/toolkit';
import {SET_LOADING} from '../ActionTypes';

export const utilitiesSlice = createSlice({
  name: 'utilities',
  initialState: {
    loading: false,
    refresh_control: false,
    refresh_function: false,
  },
  reducers: {
    utilitiesReducer: (state, {payload}) => {
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

export const {utilitiesReducer} = utilitiesSlice.actions;

export default utilitiesSlice.reducer;
