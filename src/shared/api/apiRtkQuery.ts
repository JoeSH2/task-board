import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiRtkQuery = createApi({
  reducerPath: 'apiRtkQuery',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  tagTypes: ['Projects'],
  endpoints: (builder) => ({}),
});
