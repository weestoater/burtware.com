import React from "react";
import burtimg from  '../../assets/burt.png';

export default function AboutContent() {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="card mb-4">
          <div className="card-header">
            <i className="bi bi-wrench-adjustable-circle" /> About burtware
          </div>
          <div className="card-body">
            <img src={burtimg} alt="" className="float-end img-thumbnail shadow ms-2 mb-2" />
            <p>This is a site for me to play with and learn more about <code>ReactJS</code> and <code>AWS</code>. I use both technologies in my day job, as well as Angular; Node; Cypress and multiple CSS frameworks.</p>
            <p>I also want to use it to trial different experiments and implement the fabulous React Testing Library based on the amazing <a href="http://www.testingjavascript.com" target="_blank" rel="noreferrer">testing javascript</a> course from <b>Kent C. Dodds</b>.</p>
            <p>I have also been working very heavily in Accessibility and I would like to flex some testing muscles too.</p>
          </div>
      </div>
      </div>
  );
}
