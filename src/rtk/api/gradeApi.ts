import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseApi';
import { API_ENDPOINTS, GRADE_ID, USER_ID } from 'src/constants';

const GradeApi = createApi({
  reducerPath: 'GradeRTK',
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
    getGradeSubjects: builder.query<IGetGradeSubjectsResponse, void>({
      query: () => ({
        url: `${API_ENDPOINTS.courseRegistration}/${USER_ID}/${GRADE_ID}`,
      }),
    }),
  }),
});
export default GradeApi;
export const { useLazyGetSubjectLessonsQuery, useGetGradeSubjectsQuery } =
  GradeApi;
