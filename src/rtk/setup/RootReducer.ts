import { combineReducers } from 'redux';
import { LessonsApi } from '../api';
import { LessonsSliceReducer } from '../slices';

const RootReducers = combineReducers({
  lessons: LessonsSliceReducer,
  [LessonsApi.reducerPath]: LessonsApi.reducer,
});

export default RootReducers;
export type IRootReducer = typeof RootReducers;
export type IRootState = ReturnType<typeof RootReducers>;
