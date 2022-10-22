import React from 'react';
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
    function ShowCards(props: any) {
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

    function ShowGoals(props: any) {
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
    
    const matcheslist = matchesData.map((item, key) => 
        <div className="col-lg-6 col-md-6 col-sm-12 mb-2" key={key}>
            <h3>{item.season}</h3>
            <div className="matchcards">
                {item.details.map((gm, index) =>
                    <div key={index}  className="card">
                        <div className="card-header">
                            <small>{gm.date}</small> - <b>{gm.opposition}</b>
                        </div>
                        <div className="card-body">
                            <ShowScores venue={gm.venue} scored={gm.scored} conceded={gm.conceded} />
                            <ShowCards cards={gm.cards} />
                            <ShowGoals goals={gm.goals} />       
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
        <div className="col-lg-6 mb-4">
            <div className="row">
            <h2>&#9917; Matches</h2>
            <hr />
            {matcheslist}
            </div>
            <a href="#top"><i className="bi bi-arrow-up"></i> Back to top</a>
        </div>
    );
}