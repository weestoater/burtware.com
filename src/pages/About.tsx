import React from "react";
import AboutContent from "../components/about/AboutContent";
import CvContent from "../components/about/CvContent";

export default function About() {
  return (
    <div className="row">
      <AboutContent />
      <CvContent />
    </div>
  );
}
