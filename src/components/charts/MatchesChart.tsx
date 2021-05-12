import React from "react";
import "ag-charts-community";
import { AgChartsReact } from "ag-charts-react";
import matchesData from "../../data/mfc-matches.json";

export default function MatchesChart() {
  const options = {
    title: { text: "Motherwell F.C. Match Results" },
    subtitle: { text: "Season 2020-2021" },
    data: matchesData,
    series: [
      {
        type: "column",
        xKey: "date",
        yKeys: ["conceded", "scored"],
        yNames: ["conceded", "scored"],
      },
    ],
    marker: {
      size: 7,
    },
  };

  return (
    <div className="col-md-12 col-sm-12 mb-4">
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
