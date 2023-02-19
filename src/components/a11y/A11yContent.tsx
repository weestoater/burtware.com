import React from 'react';

export default function A11yContent() {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="card mb-4">
                <div className="card-header">
                    <i className="bi bi-heart-pulse" /> A11y &amp; me &#9855;
                </div>
                <div className="card-body">
                    <div className="float-end text-info ps-2 pb-1"><i className="bi bi-universal-access-circle fs-1" /></div>
                    <p>I <strong>really</strong> care about Accessibility (a11y) online and have done for over 20 years now.</p>
                    <p>With a move to a new team in Sep '21, I've switched direction as a developer from being a delivery focused engineer, to working with teams as a SME <small>(subject matter expert)</small> on UI development and more importantly Web Standards &amp; A11Y.</p>
                </div>
            </div>
        </div>
    );
}