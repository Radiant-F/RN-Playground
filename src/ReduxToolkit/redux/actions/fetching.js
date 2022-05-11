import {createAsyncThunk} from '@reduxjs/toolkit';
import {fetchPokemon} from '../../utils/APIs';

export const getPokemon = createAsyncThunk(
  'fetching/getPokemon',
  async name => {
    console.log(name);
    const {data} = await fetchPokemon(name);
    return data;
  },
);
