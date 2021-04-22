import './result.css';

let Result = () => {
    let SearchAnimeRender = ({key,anime}) => {
        return (
            <div className="animeRes">
                Anime: {anime}
            </div>
        )
    }

    let searchAnimeRes = ['bleach','naruto','gintama'];
    return(
        <div className="animeResult">
            {searchAnimeRes.map((anime) => <SearchAnimeRender key={anime} anime={anime}/>)}
        </div>
    );
}

export default Result;