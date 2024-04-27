import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseApi';
import { API_ENDPOINTS, GRADE_ID, USER_ID } from 'src/constants';

const UserApi = createApi({
  reducerPath: 'UsersRTK',
  baseQuery,
  endpoints: builder => ({
    getGradeSubjects: builder.query<IGetGradeSubjectsResponse, void>({
      query: () => ({
        url: `${API_ENDPOINTS.courseRegistration}/${USER_ID}/${GRADE_ID}`,
      }),
    }),
  }),
});
export default UserApi;
export const { useGetGradeSubjectsQuery } = UserApi;
