import '../css/result.css';
import Canvas from './canvas'

// let download3x3 = () => {
//     var image = document.getElementById("canvas");
    
//     var link = document.createElement( 'a' );  
//     link.download = 'image.png'; // set the name of the download file 
//     link.href = image;
//     // var link = document.createElement('a');
//     // link.download = "my-image.png";
//     // link.href = image;
//     link.click();
  
// }

let Workspace = ({addedAnime}) => {

    return (
        <div className="animeResult">
            {/* <ul>{
                addedAnime.map(item => (
                    <h1 key={item.mal_id}>{item.title}</h1>
                ))}
            </ul> */}
            <Canvas addedAnime={addedAnime}/>
            {/* <a href="javascript:canvas.toDataURL('image/jpeg');" download="download" >Download as jpeg</a> */}
            <button className="downloadButton">SAVE ME SENPAI! (THIS BUTTON DOES NOT WORK) JUST RIGHT CLICK AND SAVE AS</button>
            {/* <button class="downloadButton" onClick={download3x3(this)}>SAVE ME SENPAI!</button> */}
        </div>
    );

}

export default Workspace;