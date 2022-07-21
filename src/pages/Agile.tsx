import React from 'react';
import { AgileNav } from '../components/global/AgileNav';

export function Agile() {
    return (
        <div className="row">
            <div className="col-sm-12">
                <h1 className="visually-hidden">Agile</h1>
            </div>
            <div className="col-sm-9">
                <div className="card">
                    <div className="card-header">
                        <h1><i className="bi bi-kanban me-3" /> Agile</h1>
                    </div>
                    <div className="card-body">

                        <img src="/assets/agile.png" className="img-fluid float-end img-thumbnail mb-4" alt="Agile Project Manegement" />
                        <p>Having worked in the IT Industry since goodness knows when I’m a recent convert to the Agile methodology.</p>

                <p>Previous places I’ve worked have been a mixture of highly documented Waterfall and blind panic, with a variety of degrees in between. a.k.a. <em>fragile</em></p>

                <p>At Xedo Software I was lucky enough to spend over a year in the good company of Chris McDermott, who amongst other things, helps run Lean Agile Scotland and Lean Agile Glasgow meetups.</p>

                <p>His passion is contagious and his ability to guide / mentor / coach people into different thinking is simply amazing.  There was a healthy scepticism in the office from some quarters, but the majority (myself included) where open to new ideas and working practices.</p>

                <p>Simple things like how we conducted our stand ups got reviewed, we looked at pair programming and began to become self-organising teams.  Words like autonomy and alignment were getting thrown around like candy in a sweet shop and it’s all good stuff.</p>

                <p>I fully understand that business needs to have a clear idea of how long a piece of work will take until it reaches their ‘LIVE’ environment. But in the same breath, business needs to help product owners ensure that the work being delivered is exactly what is expected and minimise rework / wrong work as much as possible.</p>

                <p>From a front end perspective, we’ve looked at mock-up and tools like in-vision for showing designs to the clients.  More recently as well as our story mapping, acceptance criteria and ‘Given; When; Then’ we’ve also started to do physical prototypes.</p>

                <p>On a project just completed, rather than sending over another click-through in-vision, I suggested we knock it up in bootstrap, as a working wireframe prototype for the client to see.  It was agreed, produced and went down a storm. Saved everyone second guessing, shared understanding across dev team and client group – fantastic experience.</p>
                    </div>
                </div>
                

            </div>
            <div className="col-sm-3">
                <AgileNav />
            </div>
        </div>
    );
}