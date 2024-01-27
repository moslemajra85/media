import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const addUser = createAsyncThunk('users/add', async (user) => {
  const response = await axios.post('http://localhost:3000/users', user);
  return response.data;
});

export { addUser };
