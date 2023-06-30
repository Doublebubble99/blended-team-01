import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addToDo: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    deleteToDo: (state, action) => {
      state.items = state.items.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { addToDo, deleteToDo } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
