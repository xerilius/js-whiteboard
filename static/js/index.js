"use strict";

// Grab canvas
const canvas = document.querySelector('#draw');

// You dont draw directly on the html canvas itself, but the context
// Grab context - 2d context , note there is also 3d context
const ctx = canvas.getContext('2d');

// Resize canvas dimensions to window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Base settings of line strokes
ctx.strokeStyle = 'black'; // stroke color
ctx.lineJoin = 'round'; // when line meets another line should it be squared off or round ?
ctx.lineCap = 'round';
ctx.lineWidth = 50;

let isDrawing = false; // flag for if clicking down or not

//Coordinates of the drawing
// to draw a line, need starting x,y and ending x,y
// Initial starting points of line
let lastX = 0;
let lastY = 0;


// Function to take in event that calls when mouse is moved ontop of canvas
// Listening for mouse move event
const draw = function(e) {
    // only want this when user has clicked down
    // stop function from running when they are not moused down
    if(!isDrawing) return; // if not drawing - then return
    
    console.log(e);
    // reminder: ctx is where we do all drawing for canvas
    ctx.beginPath();

    // start from
    ctx.moveTo(lastX, lastY);

    // go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke(); // shows the stroke



    // update lastX and last Y to whereever it was last were
    [lastX, lastY] = [e.offsetX, e.offsetY] // destructuring an array
    // lastX = e.offsetX;
    // lastY = e.offsetY;
}

// when mouse down - is drawing is true;
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    // update last x & y so it doesn't
    [lastX, lastY] = [e.offsetX, e.offsetY]
    console.log('mousedown')

});

canvas.addEventListener('mousemove', draw);
// when mouse click is not down - drawing is false
canvas.addEventListener('mouseup', () => isDrawing = false);
// when mouse leaves out window area
canvas.addEventListener('mouseout', () => isDrawing = false); 