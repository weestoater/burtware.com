import React from 'react';
import mfclogo from '../../assets/mfclogo.svg';

export default function Intro() {
    return (
        <div className="row">
            <div className="col-sm-12">
                <h1><img src={mfclogo} className="mfc-logo" alt="" /> Motherwell F.C.</h1>
            </div>
        </div>
    );
}