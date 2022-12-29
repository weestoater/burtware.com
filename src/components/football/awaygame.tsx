import * as React from 'react';

export const AwayGame = (props: any) => {
    
    return (
        <div className="awayscore">
            {props.conceded} - <span className="mfc">{props.scored}</span>
        </div>
    );

}