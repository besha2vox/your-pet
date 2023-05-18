import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://your-pet-by-it-kotiki.onrender.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

let retry = false;

axios.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.status === 401 && !retry) {
      retry = true;

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
  async (_, { rejectWithValue, getState }) => {
    if (!retry) {
      const state = getState();
      const currentToken = state.auth.token;
      setAuthHeader(currentToken);
    }

    try {
      const response = await axios.get('api/users/current');

      const token = axios.defaults.headers.common.Authorization.split(' ')[1];
      return { token, data: response.data };
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

export const deletePet = createAsyncThunk(
  'user/deleteMyPet',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`api/pets/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getUserInfo = createAsyncThunk(
  'user/getUserInfo',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`api/users/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const changeUser = createAsyncThunk(
  'user/changeUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = credentials;
      const response = await axios.put(`api/users/`, data);
      console.log("response.data", response.data)
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const changeStatus = createAsyncThunk(
  'user/changeStatus',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`api/users/status`, data);
      console.log("response.data", response.data)
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
