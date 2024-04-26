import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import { BASE_URL, TOKEN } from '../../constants';

export const fetchBase = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    headers.set('Authorization', `Bearer ${TOKEN}` ?? '');

    return headers;
  },
});

export const baseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  // Do any preprocessing required like refreshing token here
  let result = await fetchBase(args, api, extraOptions);
  const { error } = result;

  return result;
};
