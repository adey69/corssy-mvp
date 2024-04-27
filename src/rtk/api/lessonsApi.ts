import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseApi';
import { API_ENDPOINTS } from 'src/constants';

const LessonsApi = createApi({
  reducerPath: 'LessonsRTK',
  baseQuery,
  endpoints: builder => ({
    getSubjectLessons: builder.query<
      IGetChaptersListResponse,
      IGetChaptersListRequest
    >({
      query: ({ id }) => ({
        url: `${API_ENDPOINTS.subjectLessons}/${id}`,
      }),
    }),
  }),
});
export default LessonsApi;
export const { useLazyGetSubjectLessonsQuery } = LessonsApi;
