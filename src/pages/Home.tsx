import React from "react";

export default function Home() {
  return (
    <div className="container">
    <div className="row">
      <div className="col-sm-12">
          <h1 className="white">Welcome to <code>burtware</code></h1>
      </div>
      <div className="col-lg-4 mb-2">
        <h2 className="visually-hidden">Thoughts</h2>
        <div className="card no-header">
          <div className="card-header">
            <i className="bi bi-wrench-adjustable-circle" /> Ethos
          </div>
          <div className="card-body">
            <p>I started this space as an online area for me to experiment with ReactJS and data 'patterns' on AWS.  I've not got any desire to add a database or other
              server-side mechanisms - instead I want to concentrate purely on the front end aspects of rendering <code>JSON</code> payloads. </p>
            <p>There isn't any roadmap of what I will build, but I am iterating around the football details, using the Motherwell F.C. results as my data source. 
              I am 'hand-rolling' the data into two <code>.json</code> files: mfc-goals &amp; mfc-matches, then creating a number of components to render the results onto the page.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <i className="bi bi-bug" /> trial &amp; error
          </div>
          <div className="card-body">
            <p>Ideally I want to learn as much as possible in building this site, as I have the freedom to make as many mistakes as I like.</p>
            <p>It's only a <code>git pull</code> away from being removed or over-written, so I don't want to be precious.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 mb-2">
        <h2 className="white">Car Videos</h2>
        <figure>
          <iframe src="https://www.youtube.com/embed/i0Z1VKWf3RM" title="YouTube video player 1" ></iframe>
          <figcaption>Range Rover Sport vs spillway</figcaption>
        </figure>

        <figure>
          <iframe src="https://www.youtube.com/embed/R6ygiL366TE" title="YouTube video player 2"></iframe>
          <figcaption>Guy Martin in highly modified Land Rover</figcaption>
        </figure>
      </div>
      <div className="col-lg-4 mb-2">
        <h2 className="white">Music Videos</h2>
        <figure>
          <iframe src="https://www.youtube.com/embed/iTKJ_itifQg"
          title="YouTube video player 3"></iframe>
          <figcaption>depeche Mode - I Feel You</figcaption>
        </figure>

        <figure>
          <iframe src="https://www.youtube.com/embed/xy37XdAwH_A"
          title="YouTube video player 4"></iframe>
          <figcaption>Lindemann - Home Sweet Home (live)</figcaption>
        </figure>
      </div>
    </div>
    </div>
  );
}
