import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchFriends = createAsyncThunk(
  'friends/fetchFriends',
  async (page, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/friends?page=${page}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
