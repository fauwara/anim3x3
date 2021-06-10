import './searchRes.css'
import { useState, useEffect } from 'react';


let Result = ({item}) => { 

    return (
        <div className="result">
            <img className="result-image" src={item.image_url} alt={`${item.title}'s Poster`}/>
            <div className="result-details">
                <div>
                    <h4 className="result-id">{item.mal_id}</h4>
                    <h4 className="result-title">{item.title}</h4>
                </div>
                <button className="result-addButton">ADD</button>
            </div>
        </div>
    )
};

let SearchResult = (props) => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [searchRes, setRes] = useState([]);

    useEffect(() => {
        setIsLoaded(false);
        fetch(`https://api.jikan.moe/v3/search/anime?q=${props.searchedAnime}&limit=5`)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result.results);
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
            
    }, [props.searchedAnime])


    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return (
        <div class="loading-gif">
            <div>
                <img src="https://i.imgur.com/JDXVORV.gif" alt="uwu loading gif"/>
                <p class="loading-gif-label">Loading...</p>
            </div>
        </div>
        );
    } else {
        return (
            <div className="searchResults">
                {searchRes.map(item => (
                    <Result key={item.mal_id} item={item}/>
                ))}
            </div>
        );
    }
}

export default SearchResult;