import React from 'react';

export default function Spinner() {
    return (
        <div className="row">
            <div className="col-lg-2 offset-lg-5 text-center m-4">
                <i className="fa fa-circle-o-notch fa-spin fa-2x text-success" />
            </div>
        </div>
    );
}