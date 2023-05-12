import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/api/news');
      return response.data.result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
