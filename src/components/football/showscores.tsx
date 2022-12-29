import * as React from 'react';
import { HomeGame } from './homegame';
import { AwayGame } from './awaygame';

export const ShowScores = (props: any) => {
    const venue = props.venue;
    if (venue === 'Home') {
        return <HomeGame scored={props.scored} conceded={props.conceded} />
    } else {
        return <AwayGame scored={props.scored} conceded={props.conceded} />
    }
}

