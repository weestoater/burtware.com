import React from 'react';
import goalsData  from "../../data/mfc-goals.json";

export default function Goals() {
    const data = goalsData;
    const seasons = data.length;
    const seasonslist = data.map((item, key) => 
        <div className="col-md-4 col-sm-6 mb-2" key={key}>
            <h2 className="mt-2">Season {item.season}</h2>
            <p>Goal scorers:-</p>
            <ul className="list-group">
                {item.details.map((gs, index) =>
                    <li key={index}  className="list-group-item">{gs.player}  <span className="float-end badge bg-primary">{gs.goals}</span></li>
                )}
            </ul>
        </div>
    )
    return (
        <div className="row">
        {seasonslist}
        </div>
    );
}