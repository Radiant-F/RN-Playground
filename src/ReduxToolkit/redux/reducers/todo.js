import {createSlice} from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos_list: null,
  },
  reducers: {
    todosList: (state, {payload}) => {
      state.todos_list = payload;
    },
  },
});

export const {todosList} = todoSlice.actions;

export default todoSlice.reducer;
