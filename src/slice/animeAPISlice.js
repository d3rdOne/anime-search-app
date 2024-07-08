import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const animeApi = createApi({
  reducerPath: 'animeApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://api.jikan.moe/v4'}),
  endpoints: (builder) => ({
    getAnimeList: builder.query({
      query: (args) => {
        const {title, page} = args;
        return {
          url: `/anime`,
          params: {
            q: title,
            order_by: 'score',
            sort: 'desc',
            page: page ? page: 1
          }
        }
      },
      // Pick out data and prevent nested properties in a hook or selector
      transformResponse: (response) =>  {
        return {
          data: response.data,
          pagination: response.pagination
        }
      },
    }),
    getAnimeDetail: builder.query({
      query: (id) => `/anime/${id}/full`
    }),
    getAnimeDetailRelations: builder.query({
      query: (id) => `/anime/${id}/relations`
    }),
    getAnimePictures: builder.query({
      query: (id) => `/anime/${id}/pictures`
    }),
    getAnimeCharacters: builder.query({
      query: (id) => `/anime/${id}/characters`
    })
  })
})

export const {useGetAnimeListQuery, useLazyGetAnimeListQuery, useGetAnimeDetailQuery, useGetAnimeDetailRelationsQuery, useGetAnimePicturesQuery} = animeApi;