import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'http://127.0.0.1:3000/messages';

export const getMessage = createAsyncThunk('messages/fetchMessage', async () => {
  const response = await fetch(`${url}`);
  const data = await response.json();
  return data;
});

const messageSlice = createSlice({
  name: 'message',
  initialState: {
    message: '',
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMessage.pending, (state) => ({
        ...state, isLoading: true,
      }))
      .addCase(getMessage.fulfilled, (state, action) => ({
        ...state, isLoading: false, message: action.payload,
      }))
      .addCase(getMessage.rejected, (state, action) => ({
        ...state, isLoading: false, error: action.error.message,
      }));
  },
});

export default messageSlice.reducer;
