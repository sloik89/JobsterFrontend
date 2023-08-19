import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getStats } from "../../features/stats/StatsSlice";
import { ChartsContainer, StatsContainer, Loading } from "../../components";
import Wrapper from "../../wrappers/Stats";
const Stats = () => {
  const { isLoading, monthlyApplications } = useSelector(
    (store) => store.stats
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStats());
  }, []);
  return (
    <Wrapper>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </Wrapper>
  );
};

export default Stats;
