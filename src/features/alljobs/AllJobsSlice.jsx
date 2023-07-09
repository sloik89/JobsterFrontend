import { toast } from "react-toastify";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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
const allJobsSlice = createSlice({
  name: "allJobs",
  initialState,
  reducers: {},
});
export default allJobsSlice.reducer;
