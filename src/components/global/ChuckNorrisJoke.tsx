import React, {useState, useEffect} from 'react';
import getApi from '../../adapters/commonApi';
import Spinner from '../global/Spinner';

export const ChuckNorrisJoke = () => {
    const [joke, setJoke] = useState({});
    const [dadJoke, setDadJoke] = useState({});
    const jokeCategories = ["animal","career","celebrity","dev","fashion","food","history","money","movie","music","political","religion","science","sport","travel"]; // ,"explicit"
    const apiUrl = "https://api.chucknorris.io/jokes/random?category=" + jokeCategories;

    useEffect(() => {
        getApi(apiUrl).then(setJoke);
    }, []);


    return (
    <>
        <div className="chucknorris">
            <blockquote>{joke.value }</blockquote>
        </div>
       <br />
   </>
    );
}