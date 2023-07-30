import axios from "axios";
import { getJobs } from "../alljobs/AllJobsSlice";
import { clearValues } from "./JobsSlice";
import { authHeader } from "../../utilis/authHeader";
export const createJobThunk = async (job, thunkAPI) => {
  console.log(job);
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
    console.log(err);
    if (err.response.status === 401) {
      thunkAPI.dispatch(logoutUser());
      return thunkAPI.rejectWithValue("Unauthorized! Logginf Out...");
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
export const deleteJobThunk = async (payloadId, thunkAPI) => {
  if (thunkAPI.getState().user.user.email === "testUser@test.com") {
    console.log("jestem ww");
    return thunkAPI.rejectWithValue("No acces to data");
  }
  try {
    console.log(authHeader(thunkAPI));
    const res = await axios.delete(
      `/api/jobs/${payloadId}`,
      authHeader(thunkAPI)
    );
    thunkAPI.dispatch(getJobs());
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
    return thunkAPI.rejectWithValue("There is an error");
  }
};
export const jobUpdateThunk = async (job, thunkAPI) => {
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
};
