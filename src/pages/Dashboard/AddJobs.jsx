import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Wrapper from "../../wrappers/AddJobs";
import { FormRow } from "../../components/";
import { updateUser } from "../../features/user/userSlice";
import { FormRowSelect } from "../../components";
import { toast } from "react-toastify";
import { handleChange, clearValues } from "../../features/jobs/JobsSlice";
import { createJob } from "../../features/jobs/JobsSlice";
import { jobUpdate } from "../../features/jobs/JobsSlice";
import { checkTestUser } from "../../utilis/checkTestUser";
checkTestUser;
const AddJobs = () => {
  const dispatch = useDispatch();
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    isEditing,
    statusOptions,
    editJobId,
  } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (user.email === "testUser@test.com") {
    //   toast.error("Cannot add job, you are in demo mode");
    //   return;
    // }
    if (checkTestUser()) {
      toast.error("Cannot add job, you are in demo mode");
      return;
    }
    if (!position || !company || !jobLocation) {
      toast.error("Please fill out all fields");
      return;
    }
    // console.log(position, company, jobLocation, status, jobType);
    if (isEditing) {
      dispatch(
        jobUpdate({
          position,
          company,
          jobLocation,
          status,
          jobType,
          id: editJobId,
        })
      );
      return;
    }
    dispatch(createJob({ position, company, jobLocation, status, jobType }));
  };
  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  useEffect(() => {
    if (!isEditing) {
      dispatch(handleChange({ name: "jobLocation", value: user.location }));
    }
  }, []);
  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "edit job" : "add job"}</h3>
        <div className="form-center">
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleJobInput}
          />
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleJobInput}
          />
          <FormRow
            type="text"
            name="jobLocation"
            value={jobLocation}
            handleChange={handleJobInput}
          />
          <FormRowSelect
            name="status"
            value={status}
            handleJobInput={handleJobInput}
            statusOptions={statusOptions}
          />
          <FormRowSelect
            name="jobType"
            value={jobType}
            handleJobInput={handleJobInput}
            statusOptions={jobTypeOptions}
          />
          <div className="btn-container">
            <button
              type="button"
              className="btn btn-block clear-btn"
              onClick={() => {
                dispatch(clearValues());
              }}
              disabled={isEditing}
            >
              clear
            </button>
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? "loading" : "submit"}
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJobs;
