import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const deleteUser = createAsyncThunk('user/delete', async (user) => {
  const response = await axios.delete(`http://localhost:3000/users/${user.id}`);
  //console.log(response.data);
  return response.data;
});

export { deleteUser };
