import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import { logoutUser } from "../user/userSlice";
import { getUserFromLocalStorage } from "../../utilis/localStorage";
import { getJobs } from "../alljobs/AllJobsSlice";
import { jobUpdateThunk, createJobThunk, deleteJobThunk } from "./jobsThunk";
const initialState = {
  isLoading: false,
  position: "",
  company: "",
  jobLocation: "",
  jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
  jobType: "full-time",
  statusOptions: ["interview", "declined", "pending"],
  status: "pending",
  isEditing: false,
  editJobId: "",
};
export const createJob = createAsyncThunk("job/createJob", createJobThunk);
export const deleteJob = createAsyncThunk("allJobs/deletejob", deleteJobThunk);
export const jobUpdate = createAsyncThunk("jobs/jobUpdate", jobUpdateThunk);
const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    clearValues: (state) => {
      return {
        ...initialState,
        jobLocation: getUserFromLocalStorage()?.location,
      };
    },
    setEditJob: (state, { payload }) => {
      return { ...state, isEditing: true, ...payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createJob.fulfilled, (state) => {
        state.isLoading = false;
        toast.success("Job added");
      })
      .addCase(createJob.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(jobUpdate.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(jobUpdate.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        toast.success(payload.msg);
      })
      .addCase(jobUpdate.rejected, (state, { payload }) => {
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
export const { handleChange, clearValues, setEditJob } = jobSlice.actions;
export default jobSlice.reducer;
