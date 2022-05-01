import React from "react";

export default function AwsAmplifyPost() {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="card mb-4">
        <div className="card-header">
          <i className="bi bi-cloud" />
          <span className="pl-4">AWS Amplify</span>
        </div>
        <div className="card-body">
          <p>
            I wanted to get an AWS instance up and running, as quickly as possible. So I have used 
            AWS Amplify to power this project.  At the moment, I have it set to build and deploy from 
            my github instance and apart from some 'minor' issues in the beginning, it has been fairly
            pain free.
          </p>
          <p>
            There are some great tutorials on setting up testing as part of the deploy process 
            so that will probably be where I begin to focus my time in the near future.</p>
            
            <p>Right now 
            I just want to add some more 'content' and get it working smoothly as a process.
          </p>
        </div>
      </div>
    </div>
  );
}
