import React from 'react';
import { isTemplateExpression } from 'typescript';
import matchesData from '../../data/mfc-matches.json';

export default function Matches() {

    function HomeGame(props: any) {
        return (
            <div className="homescore">
                <span className="mfc">{props.scored}</span> - {props.conceded}
            </div>
        );
    }
    function AwayGame(props: any) {
        return (
            <div className="awayscore">
                {props.conceded} - <span className="mfc">{props.scored}</span>
            </div>
        );
    }
    function ShowScores(props: any) {
        const venue = props.venue;
        if (venue === 'Home') {
            return <HomeGame scored={props.scored} conceded={props.conceded} />
        } else {
            return <AwayGame scored={props.scored} conceded={props.conceded} />
        }
    }

    
    const matcheslist = matchesData.map((item, key) => 
        <div className="col-md-6 mb-2" key={key}>
            <h3>{item.season}</h3>
            <div className="matchcards">
                {item.details.map((gm, index) =>
                    <div key={index}  className="card">
                        <div className="card-header">
                            <small>{gm.date}</small> - <b>{gm.opposition}</b>
                        </div>
                        <div className="card-body">
                            <ShowScores venue={gm.venue} scored={gm.scored} conceded={gm.conceded} />       
                        </div>
                        <div className="card-footer">
                            {gm.league ? gm.league : 'SPFL'}    
                            <small className="float-end">&middot; {gm.venue} &middot; </small>
                        </div>                     
                    </div>
                )}
            </div>
        </div>
    );
    return (
        
        <div className="col-md-6 mb-4">
            <div className="row">
            <h2>Matches</h2>
            <hr />
            {matcheslist}
            </div>
            <a href="#top"><i className="bi bi-arrow-up"></i> Back to top</a>
        </div>
    );
}