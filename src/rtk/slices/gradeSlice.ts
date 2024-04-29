import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GradeApi } from 'src/rtk';

const INITIAL_STATE: IGradeState = {
  lessonCompletion: {},
};

const GradeSlice = createSlice({
  name: 'grade',
  initialState: INITIAL_STATE,
  reducers: {
    updateLessonsCompletion: (
      state,
      {
        payload,
      }: PayloadAction<{
        lessonId: string;
        completedWidgets: number;
        totalWidgets: number;
      }>,
    ) => {
      state.lessonCompletion = {
        ...state.lessonCompletion,
        [payload.lessonId]: {
          completedWidgets: payload.completedWidgets,
          totalWidgets: payload.totalWidgets,
        },
      };
    },
  },
});

export default GradeSlice.actions;

export const { reducer } = GradeSlice;
