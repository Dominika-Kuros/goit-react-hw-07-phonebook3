import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};
const handlePending = state => {
  return { ...state, isLoading: true };
};
const handleRejected = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: action.payload,
  };
};
const handleFetchFulfilled = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: null,
    items: action.payload,
  };
};
const handleAddContactFulfilled = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: null,
    items: [...state.items, action.payload],
  };
};
const handleDeleteContactFulfilled = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: null,
    items: state.items.filter(item => item.id !== action.payload.id),
  };
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled]: handleFetchFulfilled,
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled]: handleAddContactFulfilled,
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled]: handleDeleteContactFulfilled,
    [deleteContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;
