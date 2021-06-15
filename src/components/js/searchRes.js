import '../css/searchRes.css'
import React from 'react';
import { useState, useEffect } from 'react';

function Result({ item, addedAnime, setAddedAnime}){

    useEffect(() => {
        console.log(addedAnime);
    }, [addedAnime])

    return (
        <div className="result">
            {/* {console.log(this)} */}
            <img className="result-image" src={item.image_url} alt={`${item.title}'s Poster`}/>
            <div className="result-details">
                <div>
                    <h4 className="result-id">{item.mal_id}</h4>
                    <h4 className="result-title">{item.title}</h4>
                </div>
                <button className="result-addButton" onClick={() => setAddedAnime([...addedAnime, item])} >ADD</button>
            </div>
        </div>
    )
};

let SearchResult = ({searchedAnime, addedAnime, setAddedAnime}) => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [searchRes, setRes] = useState([]);

    useEffect(() => {
        setIsLoaded(false);
        fetch(`https://api.jikan.moe/v3/search/anime?q=${searchedAnime}&limit=4`)
            .then(res => res.json())
            .then(
                (result) => {
                    // console.log(result.results);
                    setIsLoaded(true);
                    setRes(result.results);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
            .catch(err => {
                throw err;
            });

    }, [searchedAnime])


    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return (
        <div className="loading-gif">
            <div>
                <img src="https://i.imgur.com/JDXVORV.gif" alt="uwu loading gif"/>
                <p class="loading-gif-label">Loading...</p>
            </div>
        </div>
        );
    } else {
        return (
            <div className="searchResults">
                <ul>
                {searchRes.map(item => (
                    <Result key={item.mal_id} item={item} addedAnime={addedAnime} setAddedAnime={setAddedAnime}/>
                ))}
                </ul>
            </div>
        );
    }
}

export default SearchResult;