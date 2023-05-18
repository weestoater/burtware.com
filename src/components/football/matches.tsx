import React from 'react';
import matchesData from '../../data/mfc-matches.json';
import { ShowResults } from './showresults';
import { ShowScores } from './showscores';
import { ShowCards } from './showcards';
import { ShowGoals } from './showgoals';
import { ShowNotes } from  "./shownotes";
import { ShowVideo } from './showvideo';

interface Match {
    date: string;
    scored: number;
    conceded: number;
    venue: string;
    cards: any;
    goals: any;
    notes: any;
    video: string;
    league: string;
}

export default function Matches() {
    
    const matcheslist = matchesData.map((item, key) => 
        <div className="col mb-2" key={key}>
            <h3>{item.season}</h3>
            <div className="matchcards">
                {item.details.map((gm: Match, index) =>
                    <div key={index}  className="card">
                        <div className="card-header">
                            <b>{gm.opposition}</b> - <small>{gm.date} - <ShowResults scored={gm.scored} conceded={gm.conceded} /></small>
                        </div>
                        <div className="card-body">
                            <ShowScores venue={gm.venue} scored={gm.scored} conceded={gm.conceded} />
                            <ShowCards cards={gm.cards} />
                            <ShowGoals goals={gm.goals} />
                            <ShowNotes notes={gm.notes} />
                            <ShowVideo video={gm.video} />
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
        <div className="col mb-4">
            <div className="row">
                <h2>&#9917; Games</h2>
                {matcheslist}
            </div>
            <a href="#top"><i className="bi bi-arrow-up"></i> Back to top</a>
        </div>
    );
}