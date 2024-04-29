import { createSelector } from '@reduxjs/toolkit';
import { IRootState } from '../setup';

export const subjectsSelector = createSelector(
  (state: IRootState) => state.grade,
  state => state.gradeSubjects ?? [],
);

export const chapterAndLessonsSelector = createSelector(
  (state: IRootState) => state.grade,
  state => state.subjectLessons ?? [],
);

export const getLessonByIdSelector = createSelector(
  (state: IRootState) => state.grade,
  state => state.lessonCompletion,
);
