import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../baseQuery';

export const profileApi = createApi({
  baseQuery,
  reducerPath: 'profileApi',
  endpoints: () => ({}),
});
