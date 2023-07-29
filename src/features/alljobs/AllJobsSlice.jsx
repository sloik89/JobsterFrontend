import { toast } from "react-toastify";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialFilterState = {
  search: "",
  searchStatus: "all",
  searchType: "all",
  sort: "latest",
  sortOptions: ["latest", "oldest", "a-z", "z-a"],
};
const initialState = {
  isLoading: false,
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
};
export const getJobs = createAsyncThunk(
  "allJobs/getJobs",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/api/jobs", {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      });
      console.log(res);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue("THere was and error");
    }
  }
);
export const deleteJob = createAsyncThunk(
  "allJobs/deletejob",
  async (payloadId, thunkAPI) => {
    try {
      console.log(payloadId);
      const res = await axios.delete(`/api/jobs/${payloadId}`, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      });
      thunkAPI.dispatch(getJobs());
      console.log(res);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue("There is an error");
    }
  }
);
const allJobsSlice = createSlice({
  name: "allJobs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getJobs.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getJobs.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.jobs = payload;
    });
    builder.addCase(getJobs.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });
    builder.addCase(deleteJob.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      toast.success(payload.msg);
      console.log("jestem");
    });
    builder.addCase(deleteJob.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });
    builder.addCase(deleteJob.pending, (state, { payload }) => {
      state.isLoading = true;
    });
  },
});
export default allJobsSlice.reducer;
