//GLOBAL VARIABLES

//ellipse variables
let x = 0;
let y = 0;
let xMove = 0;
let yMove = 0;

//rectangle variable
let rectX = 0;
let rectY = 0;
let size = 100;

//Boolean to stop/start movement
let stop = false; //we could use a zeore her instead

//fill color variable
let r = 0;
let g = 255; 
let b = 0;


function setup() 
{
  createCanvas(700, 700);
  rectMode (CENTER)

}

function draw() 
{
  background(127);
  fill(r, g, b);
  ellipse(x, y, size, size)
  rect(rectX, rectY, size, size)

  if (!stop)
  {
    x += xMove;
    y += yMove;
  }

  


}
