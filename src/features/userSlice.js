import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const API_URL = 'https://reqres.in/api/users';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    userInfo: [],
  },
  reducers: {
    getUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    getUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const getUsersAsync = () => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}`);
    dispatch(getUsers(response.data.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const getUserInfoAsync = (data) => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}/${data}`);
    dispatch(getUserInfo(response.data.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const { getUsers, getUserInfo } = userSlice.actions;
export const showUsers = (state) => state.user.users;
export const showUserInfo = (state) => state.user.userInfo;
export default userSlice.reducer;
