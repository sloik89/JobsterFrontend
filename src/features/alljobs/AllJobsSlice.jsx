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

      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue("THere was and error");
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
  },
});
export default allJobsSlice.reducer;
