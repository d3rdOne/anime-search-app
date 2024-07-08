import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const animeApi = createApi({
  reducerPath: 'animeApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://api.jikan.moe/v4/anime'}),
  endpoints: (builder) => ({
    getAnimeList: builder.query({
      query: (title) => `?q=${title}`
    }),
    getAnimeDetail: builder.query({
      query: (id) => `/${id}/full`
    }),
    getAnimeDetailRelations: builder.query({
      query: (id) => `/${id}/relations`
    })
  })
})

export const {useGetAnimeListQuery, useGetAnimeDetailQuery, useGetAnimeDetailRelationsQuery} = animeApi;