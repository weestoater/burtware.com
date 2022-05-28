import React from "react";

export default function MarkdownPost() {
  return (
    <div className="col-lg-3 col-md-6">
      <div className="card mb-4">
        <div className="card-header">
          <i className="bi bi-markdown" />
          <span className="pl-4"><code>markdown</code> project</span>
        </div>
        <div className="card-body">
          <p>
            I have been lucky enough to work on a properly cool project as part of my day-job that involves adding a <code>markdown</code> blog to an existing application. I looked at a bunch of options, but eventually settled on the aptly name <a href="https://github.com/remarkjs/react-markdown" target="_blank">react-markdown package</a>.  I was also able to find a really good series of videos on youtube and sat down to put what I could into place.
          </p>
          <p>
              It was a really interesting and practical piece, as I can actually see the benefit of using this methodology instead of other <code>RSS feed</code> based alternatives. 
          </p>
          <p>I'm now debating as to whether or not to implement it on this site, instead of using traditional <code>.tsx</code> files with mark-up.</p>
        </div>
      </div>
    </div>
  );
}
