import React from "react";
import PostList from "../components/blogpostlist";

export default function Home() {
  return (
    <div className="row">
        <div className="col-sm-12">
            <h1 className="visually-hidden">Home</h1>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="row">
            <PostList />
          </div>
        </div>
        <div className="col-lg-6 mb-4">
            <iframe src="https://www.youtube.com/embed/9zEhX_Gxbkc"
            title="YouTube video player"></iframe>
        </div>        
    </div>
  );
}
