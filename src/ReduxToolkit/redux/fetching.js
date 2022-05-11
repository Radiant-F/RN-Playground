import {createSlice} from '@reduxjs/toolkit';
import {getPokemon} from './actions/fetching';

export const fetchingSlice = createSlice({
  name: 'fetching',
  initialState: {
    status: null,
    data: {
      data: {
        count: null,
        next: null,
        previous: null,
        results: null,
      },
      status: null,
    },
  },
  extraReducers: {
    [getPokemon.pending]: state => {
      state.status = 'loading';
    },
    [getPokemon.fulfilled]: (state, {payload}) => {
      (state.data = payload), (state.status = 'success');
    },
    [getPokemon.rejected]: state => {
      state.status = 'failed';
    },
  },
});

export default fetchingSlice.reducer;
