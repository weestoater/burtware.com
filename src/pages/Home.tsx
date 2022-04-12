import React from "react";

import Welcome from "../components/home/WelcomePost";
import ApiProjectPost from "../components/home/ApiProject";

export default function Home() {
  return (
    <div className="row">
      <ApiProjectPost />
      <Welcome />
    </div>
  );
}
