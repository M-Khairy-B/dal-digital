import {
  HorseApiResponse,
  SingleHorseResponse,
} from "../../../components/types/horseList";
import { apiSlice } from "../apiSlice";

export const horsesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    horsesData: builder.query<HorseApiResponse, { params: number }>({
      query: (data) => ({
        url: `horses?page=${data.params}`,
        method: "GET",
      }),
      providesTags: ["Horses"],
    }),

    horseDetails: builder.query<SingleHorseResponse, number>({
      query: (id) => ({
        url: `horses/${id}`,
        method: "GET",
      }),
      providesTags: ["Horses"],
    }),
  }),
});

export const { useHorsesDataQuery, useHorseDetailsQuery } = horsesApi;
