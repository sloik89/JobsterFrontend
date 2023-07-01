import axios from "axios";
import { logoutUser } from "./userSlice";
export const registerUserThunk = async (url, user, thunkAPI) => {
  try {
    const res = await axios.post(url, user);
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data.msg);
  }
};
export const loginUserThunk = async (url, user, thunkAPI) => {
  try {
    const res = await axios.post(url, user);
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data.msg);
  }
};
export const updateUserThunk = async (url, user, thunkAPI) => {
  try {
    const res = await axios.patch(url, user, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    return res.data;
  } catch (err) {
    if (err.response.status === 401) {
      thunkAPI.dispatch(logoutUser());
      return thunkAPI.rejectWithValue("Unauthorized! Logging Out...");
    }
    return thunkAPI.rejectWithValue(err.response.data.msg);
  }
};
