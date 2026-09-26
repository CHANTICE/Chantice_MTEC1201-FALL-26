/*Chantice Fields
This is my attempt at creating sketches inspired by classic works of art*/

//DECLARING GLOBAL CONSTANTS:
const centerPosX = 500;
const centerPosY = 500;


function setup() 
{
  createCanvas(800, 800);
  rectMode(CENTER);
  noStroke();
}

function draw() 
{
  background(169, 201, 232);

  //Table
 fill(94, 57, 24);
  quad(500, 500, 700, 500, 600, 700, 200, 700);

//top hat
  fill(0,0,0)
  square(400, 460, 150, 0, 0, 50, 50);
   ellipse(400, 417, 200, 100);

    //Cat
  fill(255, 255, 255);
  circle(400, 380, 140);
  circle(400, 280, 100);

    // Draw the triangle.
  triangle(25, 25, 8, -30, 36, 25)
}