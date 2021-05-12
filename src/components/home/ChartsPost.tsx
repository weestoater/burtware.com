import React from "react";

export default function ChartsPost() {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="card mb-3">
        <div className="card-header">
          <i className="bi bi-bar-chart" /> ag-charts
        </div>
        <div className="card-body">
          <p>
            In my latest project at work I've been using the{" "}
            <a href="https://www.ag-grid.com/javascript-charts/getting-started/">
              ag-charts
            </a>{" "}
            library and I must say I've been really impressed with it's
            responsiveness.
          </p>
          <p>
            I'm going to try and do some experiments here with ag-charts and
            ag-grid, though I may be limited by licensing constraints on this
            site, as I will be using the{" "}
            <code>
              <strong>free</strong>
            </code>{" "}
            functionality, without any licensing.
          </p>
        </div>
      </div>
    </div>
  );
}
