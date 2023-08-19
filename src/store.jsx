import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import JobsSlice from "./features/jobs/JobsSlice";
import allJobsSlice from "./features/alljobs/AllJobsSlice";
import statsSlice from "./features/stats/StatsSlice";
export const store = configureStore({
  reducer: {
    user: userSlice,
    job: JobsSlice,
    allJobs: allJobsSlice,
    stats: statsSlice,
  },
});
