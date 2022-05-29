import React from "react";
import AboutContent from "../components/about/AboutContent";
import CvContent from "../components/about/CvContent";

export default function About() {
  return (
    <div className="row">
        <div className="col-sm-12">
            <h1 className="visually-hidden">About</h1>
        </div>
      <AboutContent />
      <CvContent />
    </div>
  );
}
