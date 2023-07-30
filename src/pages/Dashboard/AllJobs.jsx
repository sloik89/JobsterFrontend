import React, { useEffect } from "react";
import { SearchJobs, JobsContainer } from "../../components";
const AllJobs = () => {
  useEffect(() => {}, []);
  return (
    <>
      <SearchJobs />
      <JobsContainer />
    </>
  );
};

export default AllJobs;
