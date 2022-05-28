import React from "react";

import Welcome from "../components/home/WelcomePost";
import AwsAmplifyPost from "../components/home/AwsAmplifyPost";
import MarkdownPost from "../components/home/MarkdownPost";

export default function Home() {
  return (
    <div className="row">
      <MarkdownPost />
      <AwsAmplifyPost />
      <Welcome />
    </div>
  );
}
