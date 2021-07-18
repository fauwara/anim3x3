import '../css/search.css';
import SearchResult from './searchRes';
import { useState } from 'react';

function Search({addedAnime, setAddedAnime}) {
    const [searchInput, setSearchInput] = useState('k on');
    
    let greySearchButton = (event) => {
        let len = event.target.value.length;
        
        let searchButton = document.getElementById('search-form-button');
        if (len < 3) searchButton.disabled = true;
        else searchButton.disabled = false;
    }

    let getSearchInput = () => {
        let tempSearchInput = document.getElementById("search-form-input").value;
        setSearchInput(tempSearchInput);
        // window.location = 'http://'+location.host;
    }
    
    let disable = () => {
        let searchButton = document.getElementById('search-form-button');
        searchButton.disabled = true;
    }

    return (
        <div className="search">
            
            <div className="search-bar">
                <div className="search-form">
                    <form action="#" onSubmit={getSearchInput}>
                        <input id="search-form-input" type="text" onInput={greySearchButton}/>
                        <input id="search-form-button"type="submit" value="SEARCH" disabled/>
                    </form>
                </div>
                <p className="search-note">*Enter a minimum of 3 letters for search.</p>
            </div>

            {/* search result */}
            <SearchResult searchedAnime={searchInput} addedAnime={addedAnime} setAddedAnime={setAddedAnime}/>
            {/* {disable()} */}
        </div>
    );

}

export default Search;