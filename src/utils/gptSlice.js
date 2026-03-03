import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieNames: null,
    movieResults: null,
    isLoading: false,
  },
  reducers: {
    setGptLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      ((state.movieNames = movieNames), (state.movieResults = movieResults));
      state.isLoading = false;
    },
    clearGptResults: (state) => {
      state.movieNames = null;
      state.movieResults = null;
    },
  },
});

export const { setGptLoading, toggleGptSearchView, addGptMovieResult, clearGptResults } = gptSlice.actions;
export default gptSlice.reducer;
