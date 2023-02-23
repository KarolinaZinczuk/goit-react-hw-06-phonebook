import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: '',
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filters = action.payload;   
    },
  },
});

export const { setFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
