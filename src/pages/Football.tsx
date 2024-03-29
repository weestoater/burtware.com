import React from 'react';
import Intro from '../components/football/intro';
import Goals from '../components/football/goals';
import Matches from '../components/football/matches';

export default function FootballPage() {

    return (
        <div className="football-page">
            <Intro />
            <div className="row">
                <div className="col-sm-12">
                    <h1 className="visually-hidden">Football</h1>
                </div>
                <Matches />
                <Goals />
            </div>
        </div>
    );
}