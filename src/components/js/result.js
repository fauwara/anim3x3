import '../css/result.css';

let Result = () => {
    let SearchAnimeRender = ({ key, anime }) => {
        return (
            <div className="animeRes">
                Anime: {anime}
            </div>
        )
    }

    // console.log(searchInput)
    // request.open('GET', `https://api.jikan.moe/v3/anime/20`);

    // request.onload = function () {
    //     resJSON = JSON.parse(request.response);
    //     console.log(resJSON);
    // };

    // request.send();

    let searchAnimeRes = ['bleach', 'naruto', 'gintama'];
    return (
        <div className="animeResult">
            {searchAnimeRes.map((anime) => <SearchAnimeRender key={anime} anime={anime} />)}
        </div>
    );
}

export default Result;