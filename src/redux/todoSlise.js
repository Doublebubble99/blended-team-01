import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { incrementByAmount } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
