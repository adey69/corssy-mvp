import { combineReducers } from 'redux';
import { GradeApi } from '../api';
import { GradeSliceReducer } from '../slices';

const RootReducers = combineReducers({
  grade: GradeSliceReducer,
  [GradeApi.reducerPath]: GradeApi.reducer,
});

export default RootReducers;
export type IRootReducer = typeof RootReducers;
export type IRootState = ReturnType<typeof RootReducers>;
