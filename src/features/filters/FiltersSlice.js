import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: "",
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      console.log("action", action);
      state.filter = action.payload;   
    },
  },
});

export const { setFilter } = filtersSlice.actions;

export const selectFilters = (state) => state.filters;

export default filtersSlice.reducer;
