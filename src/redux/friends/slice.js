import { createSlice } from '@reduxjs/toolkit';
import { fetchFriends } from './operations';

const initialState = {
  items: [],
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
        store.items = payload;
      })
      .addCase(fetchFriends.rejected, (store, { payload }) => {
        store.error = payload;
        store.isLoading = false;
      });
  },
});

export const friendsReducer = friendsSlice.reducer;
