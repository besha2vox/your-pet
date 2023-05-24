import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { getTeam, getTeamById } from './operations';

const initialState = {
  items: [],
  currentMember: null,
  isLoading: false,
  error: null,
};

const teamSlice = createSlice({
  name: 'team',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getTeamById.fulfilled, (state, { payload }) => {
        state.currentMember = payload.result;
      })
      .addCase(getTeam.fulfilled, (state, { payload }) => {
        state.items = payload.result;
      })
      .addMatcher(isAnyOf(getTeam.pending, getTeamById.pending), state => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(getTeam.fulfilled, getTeamById.fulfilled), state => {
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(getTeam.rejected, getTeamById.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const teamReducer = teamSlice.reducer;
