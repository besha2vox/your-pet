import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSearchParams } from 'shared/helpers';

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async ({ page }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/news?page=${page}`);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchNewsByQuery2 = createAsyncThunk(
  'news/fetchNewsByQuery2',
  async (params, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/news/search?${createSearchParams(params)}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);