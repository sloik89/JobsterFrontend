import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";
import { logoutUser } from "../user/userSlice";
import { getUserFromLocalStorage } from "../../utilis/localStorage";
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
export const createJob = createAsyncThunk(
  "job/createJob",
  async (job, thunkAPI) => {
    try {
      const res = await axios.post("/api/jobs", job, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      });
      thunkAPI.dispatch(clearValues());
      console.log(res);
      return res.data;
    } catch (err) {
      if (err.response.status === 401) {
        thunkAPI.dispatch(logoutUser());
        return thunkAPI.rejectWithValue("Unauthorized! Logginf Out...");
      }
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);
export const jobUpdate = createAsyncThunk(
  "jobs/jobUpdate",
  async (job, thunkAPI) => {
    try {
      const res = await axios.patch(`/api/jobs/${job.id}`, job, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      });
      return res.data;
      console.log(res);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue("Something wrong");
    }
  }
);
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
        console.log("jestem w extra reducer");
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
  },
});
export const { handleChange, clearValues, setEditJob } = jobSlice.actions;
export default jobSlice.reducer;
