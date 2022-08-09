import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const headers = token => ({Authorization: `Bearer ${token}`});

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: 'https://memories-saya.herokuapp.com'}),
  tagTypes: ['Posts'],
  endpoints: builder => ({
    getPosts: builder.query({
      query: () => '/posts',
      providesTags: ['Posts'],
    }),
    addPost: builder.mutation({
      query: ({body, token}) => ({
        url: '/posts',
        method: 'POST',
        body,
        headers: headers(token),
      }),
      invalidatesTags: ['Posts'],
    }),
    updatePost: builder.mutation({
      query: ({post, token}) => ({
        url: `/posts/${post.id}`,
        method: 'PATCH',
        body: post,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ['Posts'],
    }),
    deletePost: builder.mutation({
      query: ({postId, token}) => ({
        url: `/posts/${id}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ['Posts'],
    }),
    signIn: builder.mutation({
      query: formData => ({
        url: `/signin`,
        method: 'POST',
        body: formData,
      }),
    }),
  }),
});

export const {
  useGetPostsQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
  useSignInMutation,
} = apiSlice;
