import React from 'react';

export default function A11yAxePlugin() {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="card mb-4">
                <div className="card-header">
                    <i className="bi bi-tools" /> Axe plugin &#9855; 
                </div>
                <div className="card-body">
                    <div className="float-end text-info ps-2 pb-1"><i className="bi bi-universal-access-circle fs-1" /></div>
                    <p>I believe in clean easy to read code, especially in my <code>html</code>. As part of my day job I help teams building web applications to make sure they are accessible and I always start off by getting their developers to install the <a href="https://www.deque.com/axe/devtools/">Axe Tools</a> for Chrome.</p>

                    <p> This simple tool can give a great insight into issues teams are facing on the journey to a11y compliance.  I especially like the fact that there are the four bandings:</p>
                    <ol>
                        <li>Critial</li>
                        <li>Serious</li>
                        <li>Moderage</li>
                        <li>Minor</li>
                    </ol>

                    <p>The ability to drill down on individual items and <b>highlight</b> any offending code is brilliant and gets across the issues a lot better than any text book ever could.</p>
                </div>
            </div>
        </div>
    );
}