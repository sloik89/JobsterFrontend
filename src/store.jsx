import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import JobsSlice from "./features/jobs/JobsSlice";
export const store = configureStore({
  reducer: {
    user: userSlice,
    job: JobsSlice,
  },
});
