import React from 'react';
import culbinforest from '../../assets/culbin.jpg';

export default function CulbinForestContent() {
    return (
        <div className="col-lg-4">
            <div className="card mb-4">
                <div className="card-header">
                    <i className="bi bi-tree" /> Culbin Forest
                </div>
                <div className="card-body">

                    <img src={culbinforest} alt="" className="img-fluid shadow-lg mb-4 polaroid" />

                    <p>Angus and I had a couple of runs around the Culbin Forest this summer, whilst up in Nairn on holidays.</p>
                    
                    <p>The setup there is really top notch. OK, so it’s not Glentress or Ae, but the Forestry Commission has got excellent facilities at the main car park, including a healthy supply of maps - <i>(cheers)</i>.</p>

                    <p>We did a nice wee loop to begin with, not like the epic all day beast Lisa and I did a few years back.  Then on the second visit, we did the Hill 99 route, which was excellent.</p>

                    <p>The only slight downers were my <b>incredibly squeaky disc brakes</b> on the descent from the hill and the fact you had to pay for parking.</p>
                </div>
            </div>
        </div>   
    );
}