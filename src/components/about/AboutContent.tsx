import React from "react";

export default function AboutContent() {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="card mb-3">
          <div className="card-header">
            <i className="bi bi-wrench-adjustable-circle" /> About burtware
          </div>
          <div className="card-body">
            <p>This is a site for me to play with and learn more about <code>ReactJS</code> and <code>AWS</code>. I use both technologies in my day job and am aiming to get certified as an AWS Developer this year.</p>
            <p>I also want to use it to trial different experiments and implement the fabulous React Testing Library based on the amazing <a href="http://www.testingjavascript.com" target="_blank" rel="noreferrer">testing javascript</a> course from <b>Kent C. Dodds</b>.</p>
            <p>I have also been working very heavily in Accessibility and I would like to use Cypress.io to do some testing too.</p>
          </div>
      </div>
      </div>
  );
}
