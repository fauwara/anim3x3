import '../css/search.css';
import SearchResult from './searchRes';
import { useState } from 'react';

function Search() {
    const [searchInput, setSearchInput] = useState('nar');
    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [items, setItems] = useState([]);
    // const [searchRes, setCount] = useState("NO ANIME SEARCHED YET");

    // useEffect(() => {
    //     // let searchInput = document.getElementById("search-form-input").value
    //     fetch(`https://api.jikan.moe/v3/search/anime?q=naruto&limit=3`)
    //         .then(res => res.json())
    //         .then(
    //             (result) => {
    //                 setIsLoaded(true);
    //                 setItems(result.results);
    //             },
    //             (error) => {
    //                 setIsLoaded(true);
    //                 setError(error);
    //             }
    //         )
    // }, [])

    // let searchAnime = () => {
    //     let searchInput = document.getElementById("search-form-input").value;
    //     fetch(`https://api.jikan.moe/v3/search/anime?q=${searchInput}&limit=3`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data.results[0].title);
    //             return data.results[0].title;
    //         })
    // }

    // let RenderSearchedAnime = (anime) => {
    //     return (
    //         <div>
    //             <h1>{anime}</h1>jhe;
    //         </div>
    //     );
    // }

    // if (error) {
    //     return <div>Error: {error.message}</div>;
    // } else if (!isLoaded) {
    //     return <div>Loading...</div>;
    // } else {

    let getSearchInput = () => {
        let tempSearchInput = document.getElementById("search-form-input").value;
        setSearchInput(tempSearchInput);
    }

    return (
        <div className="search">

            {/* search bar */}
            <div className="search-bar">
                <div className="search-form">
                    <input id="search-form-input" type="text" />
                    <button onClick={getSearchInput} className="search-form-button">SEARCH</button>
                </div>
                <p className="search-note">*Enter a minimum of 3 letters for search.</p>
            </div>

            {/* search result */}
            <SearchResult searchedAnime={searchInput} />
        </div>
    );
    // }


    // return (
    //     <div className="search">
    //         <div className="search-form">
    //             <input id="search-form-input" type="text" />
    //             <button onClick={() => setCount('hello')} className="search-form-button">SEARCH</button>
    //         </div>

    //         <h1>{searchRes}</h1>
    //     </div>
    // );
}

export default Search;