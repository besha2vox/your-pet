import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, getCurrentUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoading: false,
  error: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    //register
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.error = null;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });

    //login
    builder
      .addCase(logIn.pending, state => {
        state.isLoading = true;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.error = null;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(logIn.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });

    //logout
    builder
      .addCase(logOut.pending, state => {
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, (state, { payload }) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.error = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addCase(logOut.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });

    //getCurrent
    builder
      .addCase(getCurrentUser.pending, state => {
        state.isRefreshing = true;
        state.isLoading = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.error = null;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.isRefreshing = false;
      })
      .addCase(getCurrentUser.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload;
        state.isLoading = false;
        state.token = null;
      });
  },
});

export const authReducer = authSlice.reducer;
