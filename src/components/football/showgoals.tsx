import * as React from 'react';

export const ShowGoals = (props: any) => {
    const match = props;
    if (match.goals == null || match.goals == undefined) {
        return null;
    } else {
        const goalsList = match.goals.map((item, key) =>
        <li key={key}>{item.player} '{item.mins}</li>
        );
        return <div className="goals"><h3>Goals &#128512;</h3><ul>{goalsList}</ul></div>;
    }
}

