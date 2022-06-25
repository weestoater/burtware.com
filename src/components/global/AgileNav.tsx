import React from 'react';
import { NavLink } from 'react-router-dom';

export function AgileNav() {
    return (
        <nav role="menu" className="subnav">
            <ul className="list-group">
                <li className="list-group-item"><NavLink to="/mobrules" activeClassName='active'>Mob Rules</NavLink></li>
                <li className="list-group-item"><NavLink to="/lessonslearned" activeClassName='active'>Lessons Learned</NavLink></li>
            </ul>
        </nav>

    );
}