import '../css/search.css';
import SearchResult from './searchRes';
import { useState } from 'react';

function Search({addedAnime, setAddedAnime}) {
    const [searchInput, setSearchInput] = useState('nar');

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
            <SearchResult searchedAnime={searchInput} addedAnime={addedAnime} setAddedAnime={setAddedAnime}/>
        </div>
    );

}

export default Search;