import React from "react";
import PostList from "../components/blogpostlist";

export default function Home() {
  return (
    <div className="row">
        <div className="col-sm-12">
            <h1 className="white">Welcome to the <code>HOME</code> of burtware</h1>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="row">

            <h2 className="white">Posts</h2>
            <PostList />
          </div>
        </div>
        <div className="col-lg-3 mb-4">
          <div className="row">
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

        </div>
        <div className="col-lg-3 mb-4">
          <div className="row">
            <h2 className="white">Music Videos</h2>
          <figure>
            <iframe src="https://www.youtube.com/embed/XR6PX2TLRFo"
            title="YouTube video player 3"></iframe>
            <figcaption>depeche Mode - I Feel You (live)</figcaption>
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
