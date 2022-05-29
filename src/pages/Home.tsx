import React from "react";
import PostList from "../components/blogpostlist";

export default function Home() {
  return (
    <div className="row">
        <div className="col-sm-12">
            <h1 className="visually-hidden">Home</h1>
        </div>
      <PostList />
    </div>
  );
}
