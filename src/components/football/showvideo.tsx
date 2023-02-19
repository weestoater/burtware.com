import * as React from 'react';

export const ShowVideo = (props: any) => {
    const match = props;
    if (match.video == null || match.video == undefined) {
        return null;
    } else {
        return (
            <div className="video">
                <p>Watch match <a href={match.video} target="_blank">highlights on <i className="bi bi-youtube"></i></a></p>
            </div>
        );
    }
}