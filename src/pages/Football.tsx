import React from 'react';
import Intro from '../components/football/intro';
import Goals from '../components/football/goals';
import Matches from '../components/football/matches';

export default function FootballPage() {

    return (
        <>
            <Intro />
            <div className="row">
            <Goals />
            <Matches />
            </div>
        </>
    );
}