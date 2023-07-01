import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getUserFromLocalStorage,
  addUserToLocalStorage,
  removeUserFormLocalStoreage,
} from "../../utilis/localStorage";

import {
  registerUserThunk,
  loginUserThunk,
  updateUserThunk,
} from "./userThunk";
const initialState = {
  isLoading: false,
  isSidebarOpen: false,
  isDropdown: false,
  user: getUserFromLocalStorage(),
};
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    return registerUserThunk("/api/auth/register", user, thunkAPI);
  }
);
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    return loginUserThunk("/api/auth/login", user, thunkAPI);
  }
);
export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (user, thunkAPI) => {
    return updateUserThunk("/api/auth/updateUser", user, thunkAPI);
  }
);
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    toggleDropdown: (state) => {
      state.isDropdown = !state.isDropdown;
    },
    logoutUser: (state) => {
      state.user = null;
      state.isSidebarOpen = false;
      removeUserFormLocalStoreage();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        toast.success(`Hello There ${user.name}`);
        addUserToLocalStorage(user);
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        toast.success(`Hello There ${user.name}`);
        addUserToLocalStorage(user);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        console.log(user);
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);
        toast.success(`User updated ${user.name}`);
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        console.log(payload);
        state.isLoading = false;
        toast.error(payload);
      });
  },
});
export const { toggleSidebar, toggleDropdown, logoutUser } = userSlice.actions;
export default userSlice.reducer;
