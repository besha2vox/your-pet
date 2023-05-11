import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchNews = createAsyncThunk(
  'contacts/fetchNews',
  async (_, { rejectWithValue }) => {
    console.log('kurwa');
    try {
      const response = await axios.get('/api/news');
      return response.data.result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
