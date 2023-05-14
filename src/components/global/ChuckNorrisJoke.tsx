import React, {useState, useEffect} from 'react';
import getApi from '../../adapters/commonApi';
import Spinner from '../global/Spinner';

export const ChuckNorrisJoke = () => {
    const [joke, setJoke] = useState({});
    const [dadJoke, setDadJoke] = useState({});
    const jokeCategories = ["animal","career","dev","fashion","food","history","money","movie","music","science","sport","travel"]; // ,"explicit","celebrity","political","religion"
    const apiUrl = "https://api.chucknorris.io/jokes/random?category=" + jokeCategories;

    useEffect(() => {
        getApi(apiUrl).then(setJoke);
    }, []);

    return (
        <div className="card">
          <div className="card-header">
            <i className="bi bi-filetype-jsx" />
            <span className="pl-4">chuck norris api</span>
          </div>
          <div className="card-body">
            { joke !== null ? <blockquote>{joke.value}</blockquote> : <Spinner /> }
          </div>
        </div>
    )
}