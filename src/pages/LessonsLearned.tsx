import React from 'react';
import { AgileNav } from '../components/global/AgileNav';

export function LessonsLearned() {
    return (
        <div className="row">
            <div className="col-sm-9">
                <div className="card">
                    <div className="card-header">
                        <h1><i className="bi bi-clipboard-check me-3" /> Lessons Learned</h1>
                    </div>
                    
                    <div className="card-body">
                        <img src="/assets/lessons-learned.jpg" className="img-fluid float-end img-thumbnail mb-4" alt="Lessons Learned" />
                        
                        <p>Over the last few sprints I’ve been allocated what <b>should</b> have been a relatively straightforward piece of work. We did our sprint planning and all gave it a manageable sprint score.</p>

                        <p>Like all good adventures, first appearances were highly inaccurate. Between API calls; code base gremlins; lack of clarity and a laptop that didn’t know which way was up – it became a much more stressful and frustrating build that it had ever needed to be.</p>

                        <p>All that said, it’s been a <b>hugely beneficial</b> learning experience for me and others in the team.  I’ve a far greater understanding of our app, the way the data is thrown around and how Angular works alongside JavaScript to put it all into the right places at the right times.</p>

                        <p>The importance of the fabled <code>$q</code> is now engraved on the inside of my brain, with the still healing wounds of my attempts to tame <code>api services</code> into the viewModel. </p>

                        <p>I now see the full potential of what this team can achieve. When we put our collective heads together and set out our clear points, we were cooking on gas – that’s not just what I think, but what it’s easy to see by the speed of the successful results. I’m going to try and keep a note of the lessons learned on this project – not just the coding patterns and Angular methods – but the interactions and processes we’ve seen tangible improvements from.</p>

                        <p>I’ll be pushing for a retrospective on this, so we can capture all these points and share the understanding and motivation of the changes we made to reach the goals.</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-3">
                <AgileNav />
            </div>
        </div>
    );
}