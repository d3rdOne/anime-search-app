import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: '',
  theme: 'dark',
  currentPage: 1,
  pageCount: 0
}

export const animeSearchSlice = createSlice({
  name:'animeSearch',
  initialState,
  reducers: {
    saveTitle: (state, action) => {
      state.title = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload
    },
    setPageCount: (state, action) => {
      state.pageCount = action.payload
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    }
  }
})


export const {saveTitle, setTheme, setPageCount, setCurrentPage} = animeSearchSlice.actions;
export default animeSearchSlice.reducer;