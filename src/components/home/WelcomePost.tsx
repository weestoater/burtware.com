import React from "react";

export default function Welcome() {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="card mb-3">
        <div className="card-header">
          <i className="bi bi-house" /> Welcome
        </div>
        <div className="card-body">
          <p>This is my little play pen for ReactJs and AWS hobby projects.</p>
          <p>
            I'm hoping to add some experiments with ReactJs and other stuff soon.
          </p>
          <p>
            But like all good 'blog' type projects, this is very much a side-of-desk effort from home.
          </p>
        </div>
      </div>
    </div>
  );
}
