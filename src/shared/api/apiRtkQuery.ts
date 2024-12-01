import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { StorageKey } from '@/shared/consts/storageKey.ts';
import { localStorageWrapper } from '@/shared/lib/storageWrapper.ts';

export const apiRtkQuery = createApi({
  reducerPath: 'apiRtkQuery',
  tagTypes: ['Projects', 'Task'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000',
    prepareHeaders: (headers) => {
      const token =
        localStorageWrapper.get<StorageKey.USER_KEY>(StorageKey.USER_KEY) || '';

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({}),
});
