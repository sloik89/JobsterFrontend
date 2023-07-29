import React, { useEffect } from "react";
import { Job } from "./";
import Wrapper from "../wrappers/JobsContainer";
import { Loading } from ".";
import { getJobs } from "../features/alljobs/AllJobsSlice";
import { useSelector, useDispatch } from "react-redux";
const JobsContainer = () => {
  const dispatch = useDispatch();
  const { jobs, isLoading } = useSelector((store) => store.allJobs);

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
