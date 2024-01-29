import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const addUser = createAsyncThunk('users/add', async (user) => {
  const response = await axios.post('http://localhost:3000/users', user);
await pause(1000);
  return response.data;
});

// Dev Only
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};
export { addUser };
