import React, { useState} from 'react';

export const FitbaForm = () => {

    const [state, setState] = useState({});

    const handleChange = (e) => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setState((state) => ({
            ...state,
            [e.target.name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);
    };

    const oppositionTeams = ['Aberdeen', 'Celtic', 'Dundee Utd', 'Hearts','Hibernian','Kilmarnock','Livingston','Rangers','Ross County','St Johnstone','St Mirren'];
    const venues = ['Home', 'Away'];
    const leagues = ['SPFL','Scottish Cup', 'League Cup'];

    return (
        <div className="row">
            <div className="col-sm-12">
                <h1 className="visually-hidden">Fitba Form</h1>
            </div>
            <div className="col-sm-3">
                <div className="card">
                    <div className="card-header">Matches</div>
                    <div className="card-body">
                        <form  onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor='match-date' className="form-label">Date:</label>
                            <input type="date" className="form-control" id="match-date" name="match-date" value={state.matchDate} onChange={handleChange} />
                        </div>
                        <div className="mb-3 col-sm-6">
                            <label htmlFor='match-opposition' className="form-label">Opposition:</label>
                            <select id='match-opposition' name='match-opposition' className='form-control' value={state.matchOpposition} onChange={handleChange}>
                                <option value="">~ Select a team ~</option>
                                {oppositionTeams.map((team, key) => (
                                    <option value={team} key={key}>{team}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3 col-sm-6">
                            <label htmlFor='match-venue' className="form-label">Venue:</label>
                            <select id='match-venue' name='match-venue' className='form-control' value={state.matchVenue} onChange={handleChange}>
                                <option value="">~ Select a venue ~</option>
                                {venues.map((venue, key) => (
                                    <option value={venue} key={key}>{venue}</option>
                                ))}
                            </select>                            
                        </div>
                        <div className="mb-3 col-sm-6">
                            <label htmlFor='match-league' className="form-label">League:</label>
                            <select id='match-league' name='match-league' className='form-control' value={state.matchLeague} onChange={handleChange}>
                                <option value="">~ Select a league ~</option>
                                {leagues.map((league, key) => (
                                    <option value={league} key={key}>{league}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3 col-sm-3">
                            <label htmlFor='match-scored' className="form-label">Scored:</label>
                            <input type="number" className="form-control" id="match-scored" name="match-scored" value={state.matchScored} onChange={handleChange} />
                        </div>
                        <div className="mb-3 col-sm-3">
                            <label htmlFor='match-conceded' className="form-label">Conceded:</label>
                            <input type="number" className="form-control" id="match-conceded" name="match-conceded"  value={state.matchConceded} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor='match-summary' className="form-label">Summary</label>
                            <textarea className="form-control" rows="5" name="match-summary" id="match-summary" value={state.matchSummary} onChange={handleChange}></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="match-video" className="form-label">Video clip</label>
                            <input type="text" className="form-control" name="match-video" id="match-video"  value={state.matchVideo} onChange={handleChange}/>
                        </div>
                        <div className="mb-3">
                            <b>Goals</b>
                        </div>
                        <div className="mb-3">Cards</div>

                        <div className="mb-3">
                            <button className="btn btn-primary">Submit</button>
                            <button className="btn btn-light float-end">Cancel</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card">
                    <div className="card-header">Goals</div>
                    <div className="card-body">
                        <div className="mb-3">
                            <label htmlFor='goal-date' className="form-label">Date:</label>
                            <input type="datetime-local" className="form-control" id="goal-date" name="goal-date" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor='goal-player' className="form-label">Player:</label>
                            <select id="goal-player" className="form-control">
                                <option value="">~ Select a player ~</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label htmlFor='goal-type' className="form-label me-3">Type of goal:</label>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="goal-type" id="norm" value="normal" />
                                <label className="form-check-label" htmlFor="norm">GOAL!!!</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="goal-type" id="pen" value="penalty" />
                                <label className="form-check-label" htmlFor="pen">Penalty</label>
                            </div>
                        </div>

                        <div className="mb-3">
                            <button className="btn btn-primary">Submit</button>
                            <button className="btn btn-light float-end">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}