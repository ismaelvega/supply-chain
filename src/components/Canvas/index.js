import React, { useRef, useEffect, useLayoutEffect} from 'react'
import { useState } from 'react'

const Canvas = ({ classN, points}) => {
  const canvasRef = useRef(null)
  const [canvas, setCanvas] = useState('')
  const [context, setContext] = useState('')
  
  
  console.log(points);
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    setCanvas(canvas)
    setContext(context)

    var clicks = 0;
    var lastClick = [0, 0];
    var x, y;

  function draw(e) {
    x = getClick(e)[0]; // - this.offsetLeft;
    y = getClick(e)[1]; // - this.offsetTop;

    if (clicks != 1) {
      clicks++;
    } else {
      context.beginPath();
      context.moveTo(lastClick[0], lastClick[1]);
      context.lineTo(x, y, 6);

      context.strokeStyle = 'red';
      context.stroke()
      console.log('stroke');

      clicks = 0;
    }
    lastClick = [x, y];
    console.log(lastClick);
  }

  function getClick(e) {
    var x, y;
    console.log('get');
    if (e.pageX != undefined && e.pageY != undefined) {
      x = e.pageX;
      y = e.pageY;
    } else {
      x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      y = e.clientY + document.body.scrollTop  + document.documentElement.scrollTop;
    }

    return [x, y];
  }

    canvas.addEventListener('click', draw, false);
  

//     let startPosition = {x: 0, y: 0};
//     let lineCoordinates = {x: 0, y: 0};
//     let isDrawStart = false;

//     function firstClick(event){
//       console.log('first click');
//       startPosition = getClientOffset(event)
//       isDrawStart = true;
//       canvas.addEventListener('mousemove', mouseMoveListener)
//     }

//     function drawLine(){
//       console.log('draw');
//       context.beginPath();
//       context.moveTo(startPosition.x, startPosition.y);
//       context.lineTo(lineCoordinates.x, lineCoordinates.y);
//       context.stroke();
//    }

//     function mouseMoveListener(event){
//       console.log('move');
//       if(!isDrawStart) return;
      
//       lineCoordinates = getClientOffset(event);
//       clearCanvas();
//       drawLine();
//     }

//     function getClientOffset(event){
//       const {pageX, pageY} = event;
//       const x = pageX - canvas.offsetLeft;
//       const y = pageY - canvas.offsetTop;
  
//       return {
//          x,
//          y
//       }
//   }

//   function clearCanvas(){
//     context.clearRect(0, 0, canvas.width, canvas.height);
//  }

//     canvas.addEventListener('click', firstClick, true)
  },[]);


  return (
    <canvas ref={canvasRef} className={classN}></canvas>
  )
}

export default Canvas
