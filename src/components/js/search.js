import '../css/search.css';
import SearchResult from './searchRes';
import { useState } from 'react';

function Search({addedAnime, setAddedAnime}) {
    const [searchInput, setSearchInput] = useState();
    const [searched, setSearched] = useState(false);

    let greySearchButton = (event) => {
        let len = event.target.value.length;
        
        let searchButton = document.getElementById('search-form-button');
        if (len < 3) searchButton.disabled = true;
        else searchButton.disabled = false;
    }

    let getSearchInput = () => {
        let tempSearchInput = document.getElementById("search-form-input").value;
        console.log(tempSearchInput);
        setSearched(true);
        setSearchInput(tempSearchInput);
        // window.location = 'http://'+location.host;
    }

    return (
        <div className="search">
            
            <div className="search-bar">
                <form className="search-form" action="#" onSubmit={getSearchInput}>
                    <input id="search-form-input" type="text" onInput={greySearchButton}/>
                    <input id="search-form-button" type="submit" value="SEARCH" disabled/>
                </form>
                <p className="search-note">*Enter a minimum of 3 letters for search.</p>
            </div>

            {/* search result */}
            <SearchResult searchedAnime={searchInput} addedAnime={addedAnime} setAddedAnime={setAddedAnime} searched={searched}/>
            {/* {disable()} */}
        </div>
    );

}

export default Search;