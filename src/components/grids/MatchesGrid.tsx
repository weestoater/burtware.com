import React from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

import matchesData from "../../data/mfc-matches.json";

export default function MatchesGrid() {
  const rowData = matchesData;
  const defaultColDef = {
    width: 110,
    sortable: true,
    filter: true,
  };

  return (
    <div className="col-lg-6 col-sm-12 mb-4">
      <div className="card">
        <div className="card-header">
          <i className="bi bi-table mr-3" /> Motherwell F.C. Matches
        </div>
        <div className="card-body">
          <div className="ag-theme-alpine matchesgrid">
            <AgGridReact rowData={rowData} defaultColDef={defaultColDef}>
              <AgGridColumn headerName="Date" field="date" />
              <AgGridColumn field="venue" />
              <AgGridColumn field="opposition" width="250" />
              <AgGridColumn field="scored" />
              <AgGridColumn field="conceded" width="130" />
            </AgGridReact>
          </div>
        </div>
      </div>
    </div>
  );
}
