import { createSelector } from '@reduxjs/toolkit';
import { IRootState } from '../setup';

export const lessonsSelector = createSelector(
  (state: IRootState) => state.lessons,
  state => state,
);
