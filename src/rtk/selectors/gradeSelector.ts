import { createSelector } from '@reduxjs/toolkit';
import { IRootState } from '../setup';

export const getLessonByIdSelector = createSelector(
  (state: IRootState) => state.grade,
  state => state.lessonCompletion,
);
