import React from "react";
import A11yContent from "../components/a11y/A11yContent";
import A11yAxePlugin from "../components/a11y/A11yAxePlugin";

export default function A11y() {
  return (
    <div className="row">
        <div className="col-sm-12">
            <h1 className="visually-hidden">Accessibility</h1>
        </div>
      <A11yContent />
      <A11yAxePlugin />
    </div>
  );
}
