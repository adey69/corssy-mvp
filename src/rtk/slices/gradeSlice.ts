import { createSlice } from '@reduxjs/toolkit';
import { GradeApi } from 'src/rtk';

const INITIAL_STATE: IGradeState = {
  gradeSubjects: [],
  subjectLessons: [],
};

const GradeSlice = createSlice({
  name: 'grade',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      GradeApi.endpoints.getGradeSubjects.matchFulfilled,
      (state, { payload }) => {
        state.gradeSubjects = payload?.data ?? [];
      },
    );
    builder.addMatcher(
      GradeApi.endpoints.getSubjectLessons.matchFulfilled,
      (state, { payload }) => {
        state.subjectLessons = payload.data ?? [];
      },
    );
  },
});

export default GradeSlice.actions;

export const { reducer } = GradeSlice;
