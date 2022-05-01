import React from "react";

export default function ApiProjectPost() {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="card mb-4">
        <div className="card-header">
          <i className="bi bi-truck" />
          <span className="pl-4">api-project</span>
        </div>
        <div className="card-body">
          <p>
            I decided to try and stretch my learning capacity a little more, by
            trying to create a <code>CRUD</code> project using Google Sheets as
            the 'database'.
          </p>
          <p>
            There are a couple of excellent articles on how to make it happen,
            so I thought I'd have a look at putting them into action on a side
            project for one of the clubs I volunteer for. It might even prove
            useful for work related tasks too.
          </p>
        </div>
      </div>
    </div>
  );
}
