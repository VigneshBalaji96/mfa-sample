import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from '../store/createStore';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://7p8gvpucv0.execute-api.us-east-1.amazonaws.com/',
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState; // Type assertion for getState
    const token = state.auth.token; // Access token from auth slice
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    headers.set('Content-Type', 'application/json');
    return headers;
  },
});

export const apiService = createApi({
  reducerPath: 'apiService',
  baseQuery,
  tagTypes: ['User', 'Post'],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials: { email: string; password: string }) => ({
        url: 'auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = apiService;