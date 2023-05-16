import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchNews, fetchNewsByQuery2 } from './operations';

const initialState = {
  items: [],
  hints: 0,
  totalHints: 0,
  isLoading: false,
  error: null,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  extraReducers: builder => {
    builder
      .addMatcher(
        isAnyOf(fetchNews.pending, fetchNewsByQuery2.pending),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(fetchNews.fulfilled, fetchNewsByQuery2.fulfilled),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = null;
          state.items = payload.result;
          state.hints = payload.hints;
          state.totalHints = payload.totalHints;
        }
      )
      .addMatcher(
        isAnyOf(fetchNews.rejected, fetchNewsByQuery2.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const newsReducer = newsSlice.reducer;
