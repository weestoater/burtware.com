import React from "react";
import GoalsChart from "../components/charts/GoalsChart";
import MatchesChart from "../components/charts/MatchesChart";

export default function Charts() {
  return (
    <div className="row">
      <h1>Charts</h1>
      <GoalsChart />
      <MatchesChart />
    </div>
  );
}
