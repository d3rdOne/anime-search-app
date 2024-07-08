import { configureStore } from "@reduxjs/toolkit";
import animeSearchReducer from '../slice/animeSlice';
import { animeApi } from "../slice/animeAPISlice";
import { setupListeners } from "@reduxjs/toolkit/query";



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

setupListeners(store.dispatch);