import React from 'react';
import { AgileNav } from '../components/global/AgileNav';

export function MobRules() {
    return (
        <div className="row">
            <div className="col-sm-9">
                <div className="card">
                    <div className="card-header">
                        <h1><i className="bi bi-people me-3" /> Mob Rules</h1>
                    </div>
                    
                    <div className="card-body">
                        <img src="/assets/mob-programming.jpg" className="img-fluid float-end img-thumbnail mb-4" alt="Mob Programming" />
                        
                    <p>In early July 2019, I worked in a different team at my firm.  We used mob programming for a variety of reasons, which I’d like to share.</p>
                    
                    <p>Our team had been formed from a bunch of skills bases, some seasoned Java developers and some complete novices. We also had a Modern Apprentice, a recent University graduate and two members who came through a coding bootcamp.</p>

                    <p>We shared a codebase with another team, with us focusing on mainly Front End tasks to begin with, then completing tasks from end-to-end. Using mob programming enabled us to very quickly become familiar with the codes architecture and share pain points.</p>

                    <p>As a mob we were able to have a group understanding of the direction we were taking the code and tasks are completed rapidly.</p>

                    <p>Laterly, ‘specialists’ stayed off the keyboard in order to navigate others through tasks which they have more experience of. This was well received by the mob, as others were gaining hands on time doing things outside their comfort zone – i.e. HTML changes and CSS.</p>

                    <p>As a specialist navigating others to do the HTML and CSS changes I found it hugely rewarding for my development. I was able to impart knowledge and debugging methodologies for CSS, that helped the team grow and ultimately led to more productive tasks.</p>

                    <p>Coupled with our ability to push back on tasks when ‘the mob’ felt there wasn’t enough information or there were conflicting issues and we had a truly powerful beast in the shape of the mob.</p>

                    <p>Try it, love it, code it.</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-3">
                <AgileNav />
            </div>
        </div>
    );
}