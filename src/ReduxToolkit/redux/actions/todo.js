import {createAsyncThunk} from '@reduxjs/toolkit';
import {fetchTodo} from '../../utils/APIs';
import {todosList} from '../reducers/todo';

export const getTodo = createAsyncThunk(
  'todo/getTodo',
  async (token, {dispatch}) => {
    const {data} = await fetchTodo(token);
    dispatch(todosList(data));
  },
);
