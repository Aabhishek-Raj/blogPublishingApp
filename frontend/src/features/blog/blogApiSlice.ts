import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BlogDataType } from "../../pages/Home";

export const blogApiSlice = createApi({
  reducerPath: "blogApiSlice",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/blogs/" }),
  endpoints: (builder) => ({
    saveBlog: builder.mutation({
      query: (body: BlogDataType) => {
        return {
          url: "/save",
          method: "post",
          body,
        };
      },
    }),
    getBlogs: builder.query({
      query: (userId) => `/getblogs/${userId}`,
    }),
    editBlog: builder.mutation({
      query: (body: BlogDataType) => {
        return {
          url: "/editblog",
          method: "put",
          body,
        };
      },
    }),
    getPendingBlogs: builder.query({
      query: () => "/getpendingblogs",
    }),
    getLiveBlogs: builder.query({
      query: () => "/getliveblogs",
    }),
    publishBlog: builder.mutation({
        query: (body) => {
            return {
                url: `/publishblog/${body}`,
                method: "put",
            }
         }
    }),
    deleteBlog: builder.mutation({
        query: (body) => {
            return {
                url: `/deleteblog/${body}`,
                method: "delete",
            }
         }
    }),
    rejectBlog: builder.mutation({
        query: (body) => {
            return {
                url: "/rejectblog",
                method: "post",
                body
            }
         }
    })
  }),
});

export const {
  useSaveBlogMutation,
  useGetBlogsQuery,
  useEditBlogMutation,
  useGetLiveBlogsQuery,
  useGetPendingBlogsQuery,
  usePublishBlogMutation,
  useDeleteBlogMutation,
  useRejectBlogMutation
} = blogApiSlice;
