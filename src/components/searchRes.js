import { useState, useEffect } from 'react';

let SearchResult = (props) => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [searchRes, setRes] = useState([]);

    useEffect(() => {
        setIsLoaded(false);
        fetch(`https://api.jikan.moe/v3/search/anime?q=${props.searchedAnime}&limit=3`)
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
        return <div>Loading...</div>;
    } else {
        return (
            <ul>
                {searchRes[0]?.title}
                {/* {console.log(searchRes)} */}
                {/* {searchRes.products.map(function (item) {
                    <li>
                        {item.title}
                    </li>
                    }
                )} */}
            </ul>
        );
    }
}

export default SearchResult;