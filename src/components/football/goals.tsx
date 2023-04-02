import React from 'react';
import goalsData  from "../../data/mfc-goals.json";

export default function Goals() {
    const seasonslist = goalsData.map((item, key) => 
        <div className="col-lg-4 col-md-4 col-sm-12 mb-2" key={key}>
            <h3>{item.season}</h3>
            <ul className="list-group goals-list">
                {item.details.map((gs, index) =>
                    <li key={index}  className="list-group-item">
                        <small>[{index+1}]</small>  &middot; {gs.player}  <span className="badge">{gs.goals}</span></li>
                )}
            </ul>
        </div>
    );

    return (
        <div className="col-lg-6 col-md-12 mb-4">
            <div className="row">
                <h2 className="text-black">&#9917; Goal scorers</h2>
                <hr />
                {seasonslist}
            </div>
        </div>
    );
}