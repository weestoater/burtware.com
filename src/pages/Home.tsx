import React from "react";

import Welcome from "../components/home/WelcomePost";
import ChartsPost from "../components/home/ChartsPost";
import ApiProjectPost from "../components/home/ApiProject";

export default function Home() {
  return (
    <div className="row">
      <h1>Updates</h1>
      <ApiProjectPost />
      <ChartsPost />
      <Welcome />
    </div>
  );
}
