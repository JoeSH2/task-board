import { User, userAction } from '@/entities/User';
import { apiRtkQuery } from '@/shared/api/apiRtkQuery.ts';

const apiUserAuth = apiRtkQuery.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<User, Omit<User, 'id'>>({
      query: ({ username, password }) => ({
        url: '/login',
        method: 'POST',
        body: { username, password },
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data: user } = await queryFulfilled;
          dispatch(userAction.signWith(user));
        } catch (e) {
          console.error('Error auth', e);
        }
      },
    }),
  }),
});

export const { useLoginMutation } = apiUserAuth;
