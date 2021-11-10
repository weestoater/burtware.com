import React from "react";
import ReactHooksPost from "../components/react/ReactHooksPost";

export default function ReactPage() {
  return (
    <div className="row">
      <div className="col-sm-4">
        <div className="card">
          <div className="card-header">
            <i className="bi bi-code-square" />
            <span className="pl-4">react: my experiences</span>
          </div>
          <div className="card-body">
            <p>
              There are as many ways to do Single Page Applications (SPAs) as
              there are developers with opinions. Within my work we have many
              instances of AngularJS, Angular (4,5,6) and ReactJS.
            </p>
            <p>
              My experience with ReactJS began as pretty limited, but with a
              strong following wind, a few cups of coffee and a Pluralsight
              subscription – I resolved that in no small measure.
            </p>
            <p>
              I am now trying to get my head around the worlds of{" "}
              <code>typescript</code>; micro-services and AWS / cloud use of
              React projects.
            </p>
          </div>
        </div>
      </div>
      <ReactHooksPost />
    </div>
  );
}