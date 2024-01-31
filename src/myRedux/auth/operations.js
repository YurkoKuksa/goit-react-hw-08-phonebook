import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = ``;
};

export const registerThunk = createAsyncThunk(
  'auth/registerUser',
  async (credentials, thunkApi) => {
    try {
      const { data } = await axios.post('users/signup', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const userLoginThunk = createAsyncThunk(
  'auth/loginUser',
  async (credentials, thunkApi) => {
    try {
      const { data } = await axios.post('users/login', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const userLogoutThunk = createAsyncThunk(
  'auth/logoutUser',
  async (_, thunkApi) => {
    try {
      await axios.post('users/logout');
      clearAuthHeader();
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const refreshUserThunk = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkApi) => {
    const {
      auth: { token },
    } = thunkApi.getState();
    if (!token) {
      return thunkApi.rejectWithValue('There is no token');
    }

    try {
      setAuthHeader(token);
      const { data } = await axios.get('users/me');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
