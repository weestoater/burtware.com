import React from "react";
import ReactHooksPost from "../components/react/ReactHooksPost";
import RandomUsersPost from "../components/react/RandomUserPost";

export default function ReactPage() {
  return (
    <div className="row">
      <RandomUsersPost />
      <ReactHooksPost />
      <div className="col-lg-3 col-md-6 mb-4">
        <div className="card">
          <div className="card-header">
            <i className="bi bi-filetype-jsx" />
            <span className="pl-4">my experiences</span>
          </div>
          <div className="card-body">
            <p>
              There are as many ways to do Single Page Applications (SPAs) as
              there are developers with opinions. Within my work we have many
              instances of AngularJS, Angular (4,5,6,7,9,11,12) and ReactJS.
            </p>
            <p>
              My experience with ReactJS began as pretty limited, but with a
              strong following wind, a few cups of coffee and a Pluralsight
              subscription – I resolved that in no small measure.</p>
            <p>
              Before moving recently to pure UX team, I worked on a growing React platform which included multiple chart and grid offerings.
            </p>
            <p>
              I am now trying to get my head around the worlds of <code>typescript</code>; micro-services and AWS with React.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
