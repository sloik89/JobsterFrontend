import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authHeader } from "../../utilis/authHeader";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  stats: {},
  monthlyApplications: [],
};
export const getStats = createAsyncThunk(
  "stats/getStats",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("api/jobs/stats", authHeader(thunkAPI));
      console.log(res);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue("There is an error");
    }
  }
);
const statsSlice = createSlice({
  name: "stats",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getStats.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getStats.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.stats = payload.defaultStats;
      state.monthlyApplications = payload.monthlyApplications;
    });
    builder.addCase(getStats.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.stats = {};
      state.monthlyApplications = [];
      toast.error(payload);
    });
  },
});
export default statsSlice.reducer;
