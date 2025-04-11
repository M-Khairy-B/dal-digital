import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CookieEnum } from "../../utilities/cookie";
import Cookies from "js-cookie";

const baseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_API_BASE_URL}`,
  prepareHeaders: (headers) => {
    const token = Cookies.get(CookieEnum.token);
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery: baseQuery,
  tagTypes: ["User", "Horses"],
  endpoints: (_builder) => ({}),
});
