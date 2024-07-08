import { configureStore } from "@reduxjs/toolkit";
import animeSearchReducer from '../slice/animeSlice';
import { animeApi } from "../slice/animeAPISlice";



export const store = configureStore({
  reducer: {
    animeSearch: animeSearchReducer,
    [animeApi.reducerPath] : animeApi.reducer
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(animeApi.middleware),
})