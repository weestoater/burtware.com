import React, { FC } from "react";
import moment from "moment";

export default function About() {
  const thisYear = moment().format("YYYY");
  return (
    <div className="row">
      <div className="col-md-6 col-sm-12">
        <h1>
          About <code>burtware</code>
        </h1>
        <p>
          This is a site for me to play with and learn more about{" "}
          <code>ReactJS</code> and <code>AWS</code>. I use both technologies in
          my day job and am aiming to get certified as an AWS Developer this
          year.
        </p>

        <p>
          I also want to use it to trial different charting libraries and
          implement the fabulous React Testing Library based on{" "}
          <a href="http://www.testingjavascript.com" target="_blank">
            testing javascript
          </a>{" "}
          course from <b>Kent C. Dodds</b>.
        </p>
        <p className="footer">
          &copy; {thisYear} &middot; Except where otherwise noted, content on
          this site is licensed under a{" "}
          <a href="http://creativecommons.org" target="_blank">
            Creative Commons Attribution 4.0 International license
          </a>
          .
        </p>
      </div>
    </div>
  );
}
