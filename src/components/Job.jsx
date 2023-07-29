import React from "react";
import { useDispatch } from "react-redux";
import Wrapper from "../wrappers/Job";
import { Link } from "react-router-dom";
import { JobsInfo } from "./";
import moment from "moment";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { deleteJob } from "../features/alljobs/AllJobsSlice";
const Job = ({
  _id,
  company,
  jobType,
  createdAt,
  status,
  position,
  jobLocation,
}) => {
  const dispatch = useDispatch();
  const date = moment(createdAt).format("MMM Do, YYY");
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <JobsInfo icon={<FaLocationArrow />} text={jobLocation} />
          <JobsInfo icon={<FaCalendarAlt />} text={date} />
          <JobsInfo icon={<FaBriefcase />} text={jobType} />
          <div className={`status ${status}`}>{status}</div>
        </div>
      </div>
      <footer>
        <Link className="btn" to="/add-jobs">
          Edit
        </Link>
        <Link onClick={() => dispatch(deleteJob(_id))} className="btn">
          Delete
        </Link>
      </footer>
    </Wrapper>
  );
};

export default Job;
