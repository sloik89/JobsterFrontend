import React from "react";
import Wrapper from "../wrappers/SearchJobs";
import FormRow from "./FormRow";

const SearchJobs = () => {
  return (
    <Wrapper>
      <h3>Search Form</h3>
      <form className="form">
        <FormRow type="text" name="search" />
      </form>
    </Wrapper>
  );
};

export default SearchJobs;
