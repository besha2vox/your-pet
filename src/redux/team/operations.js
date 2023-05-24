import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { createSearchParams } from 'shared/helpers';

export const getTeam = createAsyncThunk(
  'team/getTeam',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/cats`);
      console.log('data: ', data);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getTeamById = createAsyncThunk(
  'team/getTeamById',
  async (_id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/cats/${_id}`);

      return data.result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
