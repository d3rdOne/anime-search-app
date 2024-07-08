import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: '',
  theme: 'dark'
}

export const animeSearchSlice = createSlice({
  name:'animeSearch',
  initialState,
  reducers: {
    saveTitle: (state, action) => {
      state.title = action.payload
    },
    setTheme: (state, action) => {
      state.theme = action.payload
    }
  }
})


export const {saveTitle, setTheme} = animeSearchSlice.actions;
export default animeSearchSlice.reducer;