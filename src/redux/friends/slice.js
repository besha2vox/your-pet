import { createSlice } from '@reduxjs/toolkit';
import { fetchFriends } from './operations';

const initialState = {
  items: [],
  hints: 0,
  totalHints: 0,
  isLoading: false,
  error: null,
};

const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchFriends.pending, store => {
        store.isLoading = true;
      })
      .addCase(fetchFriends.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.error = null;
        store.items = payload.result;
        store.hints = payload.hints;
        store.totalHints = payload.totalHints;
      })
      .addCase(fetchFriends.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      });
  },
});

export const friendsReducer = friendsSlice.reducer;
