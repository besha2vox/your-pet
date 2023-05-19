import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://your-pet-by-it-kotiki.onrender.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

axios.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.status === 401 && !error.config.retry) {
      error.config.retry = true;

      const refreshToken = localStorage.getItem('refreshToken');
      try {
        const { data } = await axios.post('api/users/refresh', {
          refreshToken,
        });
        setAuthHeader(data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        return axios(error.config);
      } catch (error) {
        return Promise.reject.error;
      }
    }
    return Promise.reject.error;
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('api/users/register', credentials);
      setAuthHeader(response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      return response.data;
    } catch (error) {
      const { code } = error.response.data;
      if (code === 11000)
        return rejectWithValue({
          message: 'User with this email already exists.',
        });
      return rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/logIn',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('api/users/login', credentials);
      setAuthHeader(response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      return response.data;
    } catch (error) {
      return rejectWithValue({ message: 'Email or password is incorrect.' });
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('api/users/logout');
      clearAuthHeader();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/currentUser',
  async (_, { rejectWithValue }) => {
    // const state = getState();
    // const currentToken = state.auth.token;

    // if (currentToken === null) return rejectWithValue('Unable to fetch user');

    try {
      // setAuthHeader(currentToken);

      const response = await axios.get('api/users/current');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (credentials, { rejectWithValue }) => {
    try {
      await axios.put('api/users/update', credentials);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addMyPet = createAsyncThunk(
  'user/addMyPet',
  async (credentials, { rejectWithValue }) => {
    try {
      await axios.post('api/pets', credentials);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
