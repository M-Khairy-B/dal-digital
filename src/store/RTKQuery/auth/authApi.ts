import { apiSlice } from "../apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "login",
        method: "POST",
        body: JSON.parse(JSON.stringify(data)),
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useLoginMutation } = authApi;
