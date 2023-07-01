import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Wrapper from "../../wrappers/Profile";
import { FormRow } from "../../components/";
import { updateUser } from "../../features/user/userSlice";
import { toast } from "react-toastify";
const AddJobs = () => {
  const dispatch = useDispatch();
  const { isLoading, user } = useSelector((store) => store.user);
  return <div>AddJobs</div>;
};

export default AddJobs;
