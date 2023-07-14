import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, actions) => {
      state.filter = actions.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;

//Selectors
export const getFilter = (state) => state.filter.filter;
