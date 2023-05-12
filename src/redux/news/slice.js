import { createSlice } from '@reduxjs/toolkit';
import { fetchNews } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchNews.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchNews.fulfilled, (state, { payload }) => {
        state.error = null;
        state.items = payload;
      })
      .addCase(fetchNews.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
});

export const newsReducer = newsSlice.reducer;
