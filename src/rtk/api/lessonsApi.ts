import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseApi';

const LessonsApi = createApi({
  reducerPath: 'LessonsRTK',
  baseQuery,
  endpoints: builder => ({}),
});
export default LessonsApi;
export const {} = LessonsApi;
