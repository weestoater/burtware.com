import React from 'react';
import goalsData  from "../../data/mfc-goals.json";

export default function Goals() {
    const seasonslist = goalsData.map((item, key) => 
        <div className="col-md-6 col-sm-6 mb-2" key={key}>
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
        <div className="col-md-6 mb-4">
            <div className="row">
                <h2>&#9917; Goal scorers &#9917;</h2>
                <hr />
                {seasonslist}
            </div>
        </div>
    );
}