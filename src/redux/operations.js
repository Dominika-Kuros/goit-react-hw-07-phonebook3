import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64b4f350f3dbab5a95c65d6c.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk(
  '/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = axios.get('/contacts');
      return (await response).data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  '/addContacts',
  async (contact, thunkAPI) => {
    try {
      const response = axios.post('/contacts', contact);
      return (await response).data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  '/deleteContacts',
  async (contactId, thunkAPI) => {
    try {
      const response = axios.delete(`/contacts/${contactId}`);
      return (await response).data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
