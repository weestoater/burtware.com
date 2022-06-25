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
                        
                    <p>Since early July I’ve been working in a different team at my firm.  We use mob programming for a variety of reasons, which I’d like to share.</p>
                    
                    <p>Our team has been formed from a bunch of skills bases, some seasoned Java developers and some complete novices. We also have a Modern Apprentice, a recent University graduate and two members who have come through a coding bootcamp.</p>

                    <p>We share a codebase with another team, with us focusing on mainly Front End tasks to begin with, now completing tasks from end-to-end. Using mob programming enabled us to very quickly become familiar with the codes architecture and share pain points.</p>

                    <p>As a mob we are able to have a group understanding  of the direction we are taking the code and tasks are completed rapidly.</p>

                    <p>Most recently, ‘specialists’ have been staying off the keyboard in order to navigate others through tasks which they have more experience of. This has been well received by the mob, as others are gaining hands on time doing things outside their comfort zone – i.e. HTML changes and CSS.</p>

                    <p>As the specialist navigating other to do the HTML and CSS changes I’ve found it hugely rewarding for my development. I have been able to impart knowledge of css and debugging methodologies for CSS, that will help the team grow and ultimately lead to more productive tasks in future.</p>

                    <p>Couple this with our ability to push back on tasks when ‘the mob’ feels there isn’t enough information or there are conflicting issues and we have a truly powerful beast in the shape of the mob.</p>

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