import React from "react";
import "ag-charts-community";
import { AgChartsReact } from "ag-charts-react";
import goalsData from "../../data/mfc-goals.json";

export default function GoalsChart() {
  const options = {
    data: goalsData,
    series: [
      {
        type: "scatter",
        yKey: "goals",
        xKey: "player",
        showInLegend: false,
      },
    ],
    marker: {
      size: 7,
    },
  };

  return (
    <div className="col-md-12 col-sm-12">
      <div className="card">
        <div className="card-header">
          <i className="bi bi-bar-chart mr-3" /> Motherwell F.C. Goals
        </div>
        <div className="card-body">
          <AgChartsReact options={options} />
        </div>
      </div>
    </div>
  );
}
