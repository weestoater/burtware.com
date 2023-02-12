import * as React from 'react';

export const ShowNotes = (props: any) => {
    const match = props;
    if (match.notes == null || match.notes == undefined) {
        return null;
    } else {
        return (<div className="notes">{match.notes}</div>);
    }
}