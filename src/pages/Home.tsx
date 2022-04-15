import React from "react";

import Welcome from "../components/home/WelcomePost";
import AwsAmplifyPost from "../components/home/AwsAmplifyPost";

export default function Home() {
  return (
    <div className="row">
      <Welcome />
      <AwsAmplifyPost />
    </div>
  );
}
