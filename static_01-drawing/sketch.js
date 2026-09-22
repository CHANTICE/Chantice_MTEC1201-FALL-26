//Chantice's Week 2 assignment. Learning to use psj5.I would like to work on better untilizing the space on canvas and better spacing of the shapes on the canvas. I also want to play with color and create a vibrant sketch.

function setup() 
{
  //set the size of canvas with height & width
  createCanvas(800, 800);

//background colors will be in RGB values
  background( 0, 300, 200);
    // function draw an ellipse
  //fill with values of R,G & B
  fill(100,10,300);
  strokeWeight(6);
  stroke (1002, 3, 900)
    ellipse (250, 100, 400, 100)

             // function draw an square
  //fill with values of R,G & B
  fill(9,1300,1300);
  strokeWeight(86);
  stroke (10, 3, 1290);
    square (600, 400, 250, 100);

               // function draw an quad
  //fill with values of R,G & B
  fill(90, 400, 0 );
  strokeWeight(12);
  stroke (100, 3, 1290);
    quad (400, 200, 600, 500, 200, 300,600, 800);

}
