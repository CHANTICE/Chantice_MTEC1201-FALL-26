//Chantice's Week 3 assignment. Learning to use psj5.I would like to work on better untilizing the space on canvas and better spacing of the shapes on the canvas. I also want to play with color and create a vibrant sketch. Continuing to build what I learned from previous weeks. Eventually I want to create more interesting sketches. 

//Declaring global variables
let num = 100;		//creates a variable called num, and assigns a value of 100, a Number data type.
let ellipseHeight = 50;	//creates a variable called ellipseHeight and assigns a value of 50;
let grow = 0.5;		//creates a variable called grow and assigns a value of 0.5;
let xLocation = 0;	//creates a variable called xLocation and assigns a value of 0;

//declaring variables for background color
let r = 0;	//red value, from 0 to 255
let g = 0;	//green value, from 0 to 255
let b = 0;	//blue value, from 0 to 255

//Declaring global constants
const centerPosX = 400;	
const centerPosY = 400;

function setup() 
{
  //set the size of canvas with height & width
  createCanvas(800, 800);

  //background colors will be in RGB values
  background( 0, 300, 200);
}

function draw ()
{
  // function draw an ellipse
  //fill with values of R,G & B
  fill(225, 93, 252);
  strokeWeight(6);
  stroke (255, 157, 168)
    ellipse(mouseX, mouseY, 200, 50)
     rectMode(CENTER);	//set rect mode to center, so x and y coordinates will be the center of the rectangle
	rect(mouseX * 1, mouseY, grow, grow);
    

  // function draw an square
  //fill with values of R,G & B
  fill(173,245,89);
  strokeWeight(76);
  stroke (35, 109, 207);
   square (600, 400, 250, 100);
 
  

  // function draw an quad
  //fill with values of R,G & B
  fill(229, 252, 93 );
  strokeWeight(12);
  stroke (252, 219, 93);
    quad (400, 200, 600, 500, 200, 300,600, 800);

}


