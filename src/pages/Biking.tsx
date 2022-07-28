import React from 'react';
import BikingIntroContent from '../components/biking/BikingIntroContent';
import CulbinForestContent from '../components/biking/CulbinForestContent';

export default function Biking() {
    return (
        <div className="row">
            <div className="col-sm-12">
                <h1 className="visually-hidden">Biking</h1>
            </div>
            <BikingIntroContent />
            <CulbinForestContent />
        </div>
    );
}