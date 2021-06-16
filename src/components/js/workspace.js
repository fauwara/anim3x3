import '../css/result.css';

let Workspace = ({addedAnime}) => {

    return (
        <div className="animeResult">
            <ul>{
                addedAnime.map(item => (
                    <h1 key={item.mal_id}>{item.title}</h1>
                ))}
            </ul>
        </div>
    );

}

export default Workspace;