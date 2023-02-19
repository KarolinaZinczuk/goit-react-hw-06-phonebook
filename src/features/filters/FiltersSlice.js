import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: "",
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
      setFilter: (state) => {
          
      },
  },
});

export const { setFilter } = filtersSlice.actions;

export const selectFilters = (state) => state.filters;

export default filtersSlice.reducer;
