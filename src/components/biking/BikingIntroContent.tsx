import React from 'react';
import burtbike from '../../assets/gt-mtb.jpg';

export default function BikingIntroContent() {
    return (
        <div className="col-lg-4">
            <div className="card mb-4">
                <div className="card-header">
                    <i className="bi bi-bicycle" /> Biking intro
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img src={burtbike} alt="" className="img-fluid shadow-lg mb-4 white-border" />
                    </div>

                    <p>I do like to ride my mountain bike.  I’m not into daft downhill stuff anymore, no thank you.  Just a wee bit of muddy gravel and the sounds of my sons bike rumbling off into the distance is fine by me.</p>

                    <p>He learned to ride his bike without his stabilisers a few years ago and as promised he got his ‘big boy bike’. I thought it was only fair to get one for me too, as I was getting a little bigger too...</p>
                </div>
            </div>
        </div>   
    );
}