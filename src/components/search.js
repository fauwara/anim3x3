import './search.css';

function Search() {

    let searchResJSON= ['haii','baii'];

    let searchAnime = () => {

        let searchInput = document.getElementById("searchInput").value;
        let request = new XMLHttpRequest();

        // console.log(searchInput)
        request.open('GET', `https://api.jikan.moe/v3/search/anime?q=${searchInput}&limit=3`);

        request.onload = function () {
            searchResJSON = JSON.parse(request.response).results;
            console.log(searchResJSON);
        };

        request.send();

        return(
            <div>
                {searchResJSON}
            </div>
        );

    }

    let RenderSearchedAnime = (anime) => {
        return (
            <div>
                <h1>{anime}</h1>
            </div>
        );
    }

    return (
        <div className="search">
            <input id="searchInput" type="text" />
            <button onClick={searchAnime}>search</button>
        </div>
    );
}

export default Search;