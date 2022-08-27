import { join } from 'cypress/types/bluebird';
import React from 'react';
import cvData from "../../data/burtware-cv.json";


export default function CvContent() {
    const jobs = cvData.length;

    const jobsList = cvData.map((job, key) => 
        <div className="accordion-item" key={`jobNo${key}`}>
            <h2 className="accordion-header" id={`heading${key}`}>
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${key}`} 
            aria-expanded="false" aria-controls={`collapse${key}`}><small>{job.startDate} - {job.endDate}</small> {job.jobTitle} &middot; {job.company}</button>
            </h2>
            <div id={`collapse${key}`} className="accordion-collapse collapse" aria-labelledby={`heading${key}`} data-bs-parent="#joblist">
                <div className="accordion-body">
                    {job.details !== undefined ? job.details : <p>No details</p>}
                </div>
            </div>
        </div>
    );

    return (

        <div className="col-lg-4 col-md-6">
            <div className="card mb-4">
                <div className="card-header">
                <i className="bi bi-balloon-heart" /> burtware CV
                </div>
                <div className="card-body">
                    <div className="accordion" id="joblist">
                        {jobsList}
                    </div>
                </div>
            </div>
        </div>
    );
}