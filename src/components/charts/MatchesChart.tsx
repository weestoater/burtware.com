import React from "react";
import "ag-charts-community";
import { AgChartsReact } from "ag-charts-react";
import matchesData from "../../data/mfc-matches.json";

export default function MatchesChart() {
  const options = {
    title: { text: "Motherwell F.C. Match Results" },
    subtitle: { text: "Season 2020-2021" },
    data: matchesData,
    height: 400,
    padding: {
      left: 50,
      right: 50,
    },
    legend: {
      position: "top",
    },
    axes: [
      {
        type: "category",
        position: "bottom",
        label: {
          rotation: 90,
        },
        tick: {
          count: 2,
          size: 10,
        },
      },
      {
        type: "number",
        position: "left",
        title: {
          enabled: true,
          text: "# of Goals",
        },
        tick: {
          count: 5,
          size: 10,
        },
      },
    ],
    series: [
      {
        type: "area",
        xKey: "date",
        yKeys: ["conceded", "scored"],
        yNames: ["Goals Conceded", "Goals Scored"],
      },
    ],
    marker: {
      size: 7,
    },
  };

  return (
    <div className="col-md-6 col-sm-12 mb-4">
      <div className="card">
        <div className="card-header">
          <i className="bi bi-bar-chart mr-3" /> Motherwell F.C. Matches
        </div>
        <div className="card-body">
          <AgChartsReact options={options} />
        </div>
      </div>
    </div>
  );
}
