import React from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

import matchesData from "../../data/mfc-matches.json";

export default function MatchesGrid() {
  const rowData = matchesData;
  const defaultColDef = {
    sortable: true,
    filter: true,
    floatingFilter: true,
    resizable: true,
    unSortIcon: true,
    suppressMovable: true,
  };

  var filterParams = {
    comparator: function (filterLocalDateAtMidnight: any, cellValue: any) {
      var dateAsString = cellValue;
      if (dateAsString == null) return -1;
      var dateParts = dateAsString.split("/");
      var cellDate = new Date(
        Number(dateParts[2]),
        Number(dateParts[1]) - 1,
        Number(dateParts[0])
      );
      if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
        return 0;
      }
      if (cellDate < filterLocalDateAtMidnight) {
        return -1;
      }
      if (cellDate > filterLocalDateAtMidnight) {
        return 1;
      }
    },
    browserDatePicker: true,
    minValidYear: 2000,
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
              <AgGridColumn
                headerName="Date"
                field="date"
                filter="agDateColumnFilter"
                filterParams={filterParams}
              />
              <AgGridColumn field="venue" />
              <AgGridColumn field="opposition" />
              <AgGridColumn field="scored" />
              <AgGridColumn field="conceded" />
            </AgGridReact>
          </div>
        </div>
      </div>
    </div>
  );
}
