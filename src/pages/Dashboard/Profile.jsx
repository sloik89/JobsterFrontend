import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Wrapper from "../../wrappers/Profile";
import { FormRow } from "../../components/";
import { updateUser } from "../../features/user/userSlice";
import { toast } from "react-toastify";
const Profile = () => {
  const dispatch = useDispatch();
  const { isLoading, user } = useSelector((store) => store.user);
  const [userData, setUserData] = useState({
    name: user.name || "",
    email: user.email || "",
    location: user.location || "",
    lastName: user.lastName || "",
  });
  console.log(isLoading);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, lastName, location } = userData;
    if (!name || !email || !lastName || !location) {
      toast.error("please fill up ");
      return;
    }
    console.log("handle submit");

    dispatch(updateUser(userData));
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>profile</h3>
        <div className="form-center">
          <FormRow
            type="text"
            name="name"
            value={userData.name}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="lastName"
            value={userData.lastName}
            handleChange={handleChange}
          />
          <FormRow
            type="email"
            name="email"
            value={userData.email}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="location"
            value={userData.location}
            handleChange={handleChange}
          />
          <button type="submit" className="btn">
            {isLoading ? "Loading" : "Submit"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
