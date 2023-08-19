import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Wrapper from "../wrappers/StatsContainer";
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from "react-icons/fa";
import { StatsItem } from "../components";
const StatsContainer = () => {
  const { stats } = useSelector((store) => store.stats);
  const defaultStats = [
    {
      title: "pending applications",
      count: stats.pending || 0,
      icon: <FaSuitcaseRolling />,
      color: "#e9b949",
      bcg: "#fcefc7",
    },
    {
      title: "interviews scheduled",
      count: stats.interview || 0,
      icon: <FaCalendarCheck />,
      color: "#647acb",
      bcg: "#a7eff8",
    },
    {
      title: "jobs declined",
      count: stats.declined || 0,
      icon: <FaBug />,
      color: "#d66aba",
      bcg: "#ffeeee",
    },
  ];
  console.log(stats);
  return (
    <Wrapper>
      {defaultStats.map((item, idx) => {
        return <StatsItem key={idx} {...item} />;
      })}
    </Wrapper>
  );
};

export default StatsContainer;
