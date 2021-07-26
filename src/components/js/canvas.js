import '../css/canvas.css';
import {useState, useEffect, useRef  } from "react";

const Canvas = ({addedAnime}) => {

    const [canvasHeight, setCanvasHeight] = useState(900);
    const [canvasWidth, setCanvasWidth] = useState(900);
    const [canvasColour, setCanvasColour] = useState('#fff');
    const [border, setBorder] = useState(20);

    // basically size of a single img in the 3x3.
    let cell = canvasHeight/3;
    
    const canvas = useRef(null);

    // useEffect for drawing on the canvas
    useEffect(() => {
        if(canvas) {
            const ctx = canvas.current.getContext("2d");
            ctx.fillStyle = canvasColour;
            ctx.fillRect(0, 0, canvasHeight, canvasWidth);

            // let border = 10;

            let y = 0;
            for(let x = 0, count = 0; count < addedAnime.length; count++, x++){
                
                // to reset the x axis after three anime's have been added.
                if (x >= 3){
                    x = 0;
                }

                const img = new Image();
                img.src = addedAnime[count].image_url;

                img.onload = () => {
                    let clippedImgX = (img.width > cell) ? ((img.width/2)-(cell/2)) : 0;
                    let clippedImgY = (img.height > cell) ? ((img.height/2)-(cell/2)) : 0;

                    // params: img, clipWidth, clipHeight,
                    ctx.drawImage(img, clippedImgX, clippedImgY, img.width, img.width, (cell*(x)), y, 300, 300);
                    x = cell*(x);
                    y = cell*((Math.floor((count+1)/3)));
                }
            }
        }
      }, [addedAnime, canvas])



    return(
        <div className="canvas-parent">
            <canvas id="canvas" ref={canvas} width={canvasWidth} height={canvasHeight}/>
        </div>
    );
    
}

export default Canvas;