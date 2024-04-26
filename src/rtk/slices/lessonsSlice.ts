import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {};

const LessonsSlice = createSlice({
  name: 'Lessons',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: builder => {},
});

export default LessonsSlice.actions;

export const { reducer } = LessonsSlice;
