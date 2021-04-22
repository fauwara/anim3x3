import './search.css';

function Search() {
    
    let searchResJSON;

    let RenderSearchedAnime = () => {
        return(
            <div>
                {searchResJSON}
            </div>
        );
    }

    let searchAnime = () => {

        let searchInput = document.getElementById("searchInput").value;
        let request = new XMLHttpRequest();

        console.log(searchInput)
        request.open('GET', `https://api.jikan.moe/v3/search/anime?q=${searchInput}&limit=3`);

        request.onload = function () {
            searchResJSON = JSON.parse(request.response).results;
            console.log(searchResJSON);
        };
        request.send();
    
    }

    

    return (
        <div className="search">
            <input id="searchInput" type="text"  />
            <button onClick={searchAnime}>search</button>
            <RenderSearchedAnime />
        </div>
    );

    
}

export default Search;