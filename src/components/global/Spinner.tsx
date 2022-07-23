import React from 'react';

export default function Spinner() {
    return (
        <div className="row">
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                </div>
            </div>
            <br />
            <span className="text-center">Loading...</span>
        </div>
    );
}