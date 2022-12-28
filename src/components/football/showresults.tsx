import * as React from 'react';

export const ShowResults = (props: any) => {
    const resultType: any = props.scored - props.conceded;
    let resultString: string;
    if (resultType > 0) {
        resultString = " Win";
    } else if (resultType < 0) {
        resultString = " Loss";
    } else {
        resultString = " Draw";
    };
    return (<span className="ms-2"> (<b>{resultString}</b>)</span>);
}

