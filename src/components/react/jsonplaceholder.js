import React, { useState, useEffect } from 'react';

export const JsonPlaceholder = () => {

    // const fetchData = fetch('https://geodb-cities-graphql.p.rapidapi.com', {
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify({
    //         query:`{
    //             countries {
    //                 name
    //                 capital
    //                 currency
    //             }
    //         }`
    //     })
    // })
    // .then(res => res.json())
    // .then(res => console.log(res.data));

    // fetchData();

    return (
        <div className="card">
            <div className="card-header">FETCH DATA</div>
            <div className="card-body">
                body    
            </div> 
        </div>
    );
}