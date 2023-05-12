import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const fetchFriends = createAsyncThunk(
  'friends/fetchFriends',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get('/api/friends');
      return data.result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
