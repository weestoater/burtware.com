import * as React from 'react';

export const ShowCards = (props: any) => {
    const match = props;
    if ( match.cards == null || match.cards == undefined) {
        return null;
    } else {
        const cardsList = match.cards.map((item, key) => 
            <li key={key}><span className={item.card}></span> {item.player} '{item.mins}</li>
        );
        return <div className="bookings"><h3>Bookings &#128533;</h3><ul>{cardsList}</ul></div>;
    } 
}

