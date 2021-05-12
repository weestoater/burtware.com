import React from "react";
import GoalsChart from "../components/charts/GoalsChart";
import MatchesChart from "../components/charts/MatchesChart";

export default function Charts() {
  return (
    <div className="row">
      <GoalsChart />
      <MatchesChart />
    </div>
  );
}
