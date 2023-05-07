import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  filter: '',
};

export const filterSlicer = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterContact: {
      reducer(state, { payload }) {
        state.filter = payload;
      },
    },
  },
});
export const { filterContact } = filterSlicer.actions;
export const filterReducer = filterSlicer.reducer;
