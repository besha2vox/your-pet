import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchFriends = createAsyncThunk(
  'friends/fetchFriends',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/api/friends');
      return data.result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
