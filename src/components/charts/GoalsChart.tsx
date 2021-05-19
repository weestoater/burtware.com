import React from "react";
import "ag-charts-community";
import { AgChartsReact } from "ag-charts-react";
import goalsData from "../../data/mfc-goals.json";

export default function GoalsChart() {
  const options = {
    title: { text: "Motherwell F.C. Goal Scorers" },
    subtitle: { text: "Season 2020-2021" },
    data: goalsData,
    height: 400,
    padding: {
      left: 10,
      right: 10,
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
          count: 4,
          size: 10,
        },
      },
    ],
    series: [
      {
        type: "line",
        yKey: "goals",
        xKey: "player",
        showInLegend: false,
        tooltip: {
          renderer: function (params: any) {
            return (
              "<div class='ag-chart-tooltip-title text-center' style='background-color:" +
              params.color +
              "'>" +
              params.xValue +
              "</div><div class='ag-chart-tooltip-content text-center'> Scored <b>" +
              params.yValue.toFixed(0) +
              "</b> goal(s) " +
              "</div>"
            );
          },
        },
      },
    ],
    marker: {
      size: 15,
    },
  };

  return (
    <div className="col-lg-6 col-sm-12 mb-4">
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
