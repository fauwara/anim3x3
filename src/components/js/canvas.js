import '../css/canvas.css';
import { useEffect, useRef  } from "react";

const Canvas = ({addedAnime}) => {

    // const [canvasHeight] = useState(900);
    const canvasHeight = 900;
    // const [canvasWidth] = useState(900);
    const canvasWidth = 900;
    // const [canvasColour] = useState('#fff');
    const canvasColour = '#fff';
    // const [border, setBorder] = useState(20);

    // basically size of a single img in the 3x3.
    const cell = canvasHeight/3;
    
    const canvas = useRef(null);

    // useEffect for drawing on the canvas
    useEffect(() => {
        if(canvas) {
            const ctx = canvas.current.getContext("2d");
            ctx.fillStyle = canvasColour;
            ctx.fillRect(0, 0, canvasHeight, canvasWidth);

            // let border = 10;

            console.log('yo');
            for(let x = 0, y = 0, count = 0; count < addedAnime.length; count++, x++){
                
                // to reset the x axis after three anime's have been added.
                if (x > 2){
                    x = 0;
                }

                const img = new Image();
                img.src = addedAnime[count].image_url;

                img.onload = () => {
                    let clippedImgX = (img.width > cell) ? ((img.width/2)-(cell/2)) : 0;
                    let clippedImgY = (img.height > cell) ? ((img.height/2)-(cell/2)) : 0;

                // params: img, clipWidth, clipHeight,
                    y = cell*((Math.floor((count)/3)));
                    x = cell*(x);
                    ctx.drawImage(img, clippedImgX, clippedImgY, img.width, img.width, x, y, 300, 300);
                    console.log(`x:${x} y:${y}`);
                }
            }
        }
      }, [addedAnime, canvas, cell]);



    return(
        <div className="canvas-parent">
            <canvas id="canvas" ref={canvas} width={canvasWidth} height={canvasHeight}/>
        </div>
    );
    
}

export default Canvas;