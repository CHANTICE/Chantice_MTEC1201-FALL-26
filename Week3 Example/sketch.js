/*
Chantice's Static v. Dynamic
Introduction to 
-Draw function
-Basic input: mousex, mouseY
*/

//the code in setup block runs once

function setup() 
{
  createCanvas(800, 600);

  background (173, 102, 179); 

}

//the code in the draw block runs repeatedly
function draw() 
{
  background(173, 102, 179);

  //a STATIC line
  line (0, 0, 400,300); //draws a line from the top-left corner of the canvs to the center of the canvas

  //a DYNAMIC line
  line ( 400, 300, mouseX, mouseY); //draws a line from the center of the canvas to the current mouse position

  //ellipse following mouse position
  ellipse(mouseX, mouseY, 50, 50);  //draws an elips at the curren tmouse position with the width and heights of 50
}
