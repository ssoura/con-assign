import { createSlice } from '@reduxjs/toolkit';
const axios = require('axios');
const API_URL = 'https://reqres.in/api/users/';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: {
      users: [],
      userInfo: [],
    },
  },
  reducers: {
    getUserInfo: (state, action) => {
      state.data.userInfo = [action.payload];
    },
    getUsers: (state, action) => {
      state.data.users = [action.payload];
    },
  },
});

export const getUsersAsync = () => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}`);
    dispatch(getUsers(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const getUserInfoAsync = (data) => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}/${data}`);
    dispatch(getUserInfo(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const { getUsers, getUserInfo } = userSlice.actions;
export const showUsers = (state) => state.user.data.users;
export const showUserInfo = (state) => state.user.data.userInfo;
export default userSlice.reducer;
