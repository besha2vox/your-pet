import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  getNotices,
  getNoticesByQuery,
  getNoticeById,
  getUsersNotices,
  addNotice,
  updateNotice,
  removeNotice,
  addFavoriteNotice,
  removeFavoriteNotice,
} from './operations';

const initialState = {
  items: [],
  currentNotice: {},
  hints: 0,
  totalHints: 0,
  isLoading: false,
  error: null,
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getNoticeById.fulfilled, (state, { payload }) => {
        state.currentNotice = payload;
      })
      .addCase(addNotice.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(removeNotice.fulfilled, (state, { payload }) => {
        const index = state.items.findIndex(
          contact => contact.id === payload.id
        );
        state.items.splice(index, 1);
      })
      .addMatcher(
        isAnyOf(
          getNotices.fulfilled,
          getNoticesByQuery.fulfilled,
          getUsersNotices.fulfilled
        ),
        (state, { payload }) => {
          state.items = payload.result;
          state.hints = payload.hints;
          state.totalHints = payload.totalHints;
        }
      )
      .addMatcher(
        isAnyOf(
          updateNotice.pending,
          addFavoriteNotice.pending,
          removeFavoriteNotice.pending
        ),
        (state, { payload }) => {
          const index = state.items.findIndex(
            contact => contact.id === payload
          );
          state.items.splice(index, 1, payload);
        }
      )
      .addMatcher(
        isAnyOf(
          getNotices.pending,
          getNoticesByQuery.pending,
          getNoticeById.pending,
          getUsersNotices.pending,
          addNotice.pending,
          updateNotice.pending,
          removeNotice.pending,
          addFavoriteNotice.pending,
          removeFavoriteNotice.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          getNotices.fulfilled,
          getNoticesByQuery.fulfilled,
          getNoticeById.fulfilled,
          getUsersNotices.fulfilled,
          addNotice.fulfilled,
          updateNotice.fulfilled,
          removeNotice.fulfilled,
          addFavoriteNotice.fulfilled,
          removeFavoriteNotice.fulfilled
        ),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          getNotices.rejected,
          getNoticesByQuery.rejected,
          getNoticeById.rejected,
          getUsersNotices.rejected,
          addNotice.rejected,
          updateNotice.rejected,
          removeNotice.rejected,
          addFavoriteNotice.rejected,
          removeFavoriteNotice.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const noticesReducer = noticesSlice.reducer;
