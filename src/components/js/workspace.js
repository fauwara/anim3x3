import '../css/result.css';
import Canvas from './canvas'

let Workspace = ({addedAnime}) => {

    return (
        <div className="animeResult">
            {/* <ul>{
                addedAnime.map(item => (
                    <h1 key={item.mal_id}>{item.title}</h1>
                ))}
            </ul> */}
            <Canvas addedAnime={addedAnime}/>
        </div>
    );

}

export default Workspace;