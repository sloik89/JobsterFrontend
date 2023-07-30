import React, { useEffect } from "react";
import { Job } from "./";
import Wrapper from "../wrappers/JobsContainer";
import { Loading } from ".";
import { getJobs } from "../features/alljobs/AllJobsSlice";
import { useSelector, useDispatch } from "react-redux";
import { clearValues } from "../features/jobs/JobsSlice";
import { useLocation } from "react-router-dom";
const JobsContainer = () => {
  const location = useLocation();
  console.log(location);
  const dispatch = useDispatch();
  const { jobs, isLoading } = useSelector((store) => store.allJobs);
  const { isEditing } = useSelector((store) => store.job);
  useEffect(() => {
    dispatch(getJobs());
  }, []);

  if (isLoading) {
    return <Loading center />;
  }
  if (jobs.length === 0) {
    return <h2> No jobs to display</h2>;
  }
  return (
    <Wrapper>
      <h5>jobs info</h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
    </Wrapper>
  );
};

export default JobsContainer;
