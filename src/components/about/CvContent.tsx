import React from 'react';
import cvData from "../../data/burtware-cv.json";


export default function CvContent() {
    const jobs = cvData.length;

    const jobsList = cvData.map((job, key) => 
        <li key={`jobNo${key}`}>
            <div className="date">{job.startDate} <small className="bi bi-chevron-right text-info"></small> {job.endDate}</div>
            <div className="role">{job.jobTitle}</div>
            <div className="company">{job.company}</div>
        </li>
    );

    return (

        <div className="col-lg-3 col-md-6">
            <div className="card mb-4">
                <div className="card-header">
                <i className="bi bi-balloon-heart" /> burtware CV
                </div>
                <div className="card-body">
                    <div className="cvtimeline">
                        <ul>
                            {jobsList}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}