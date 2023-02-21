import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: '',
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialState.filters,
  reducers: {
    setFilter: (state, action) => {
      state.filters = action.payload;   
    },
  },
});

export const { setFilter } = filtersSlice.actions;

export const selectFilters = (state) => state.filters;

export default filtersSlice.reducer;
