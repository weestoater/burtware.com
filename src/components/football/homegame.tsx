import * as React from 'react';

export const HomeGame = (props: any) => {
    
    return (
        <div className="homescore">
            <span className="mfc">{props.scored}</span> - {props.conceded}
        </div>
    );

}