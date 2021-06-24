import {useState, useEffect, useRef  } from "react";

const Canvas = ({addedAnime}) => {
    
    let canvasHeight = 750;
    let canvasWidth = 750;
    
    
    const canvas = useRef(null);

    // useEffect for drawing on the canvas
    useEffect(() => {
        if(addedAnime.length && canvas) {
            const ctx = canvas.current.getContext("2d");
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, canvasHeight, canvasWidth);

            // let border = 10;
            let partitionX = canvasHeight/3;
            let partitionY = canvasWidth/3;
            let x = 0;
            let y = 0;

            for(let i = 0, count = 0 ; count < addedAnime.length && count < 9; count++, i++){
                
                if (i >= 3){
                    i = 0;
                }
                const animeImage = new Image();
                animeImage.src = addedAnime[count].image_url;
                ctx.drawImage(animeImage, (partitionX*(i)), y);
                
                
                console.log(`i: ${i}`);
                x = partitionX*(i+1);
                console.log(`x: ${x}`);
                y = partitionY*((Math.floor((count+1)/3)));
                // y = partitionY*(i+1);
                // console.log(`i: ${i}`)
                // y = border+(40*(i+1));
            }
        //   ctx.drawImage(images[0], 10, 10);
        }
      }, [addedAnime, canvas])



    return(
        <div className="Canvas">
            <canvas ref={canvas} width={canvasWidth} height={canvasHeight}/>
        </div>
    );
    
}

export default Canvas;