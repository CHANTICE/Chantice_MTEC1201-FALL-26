/*Chantice Fields
My attempt at creating something interesting using conditional statements
*/

//Declaring global variables
//fill color variables
let r = 255;
let g = 255;
let b = 255;

// star variable
let x = 0;
let y = 0;
let xMove = 0;
let yMove = 0;
 

function setup() 
{
  createCanvas(600, 600);
  rectMode(CENTER);
}

function draw() 
{
  background (0);
    
  //Grid
  strokeWeight(20);

//Borders
 line (0, 0, 0, 600);
 line (0,0, 600,0);
 line (600, 0, 600,600);
 line (0, 600, 600, 600);
  
   
  strokeWeight(4);
  stroke (40, 199, 195);

  rect (0, 0, 600, 600);
  rect (600, 600, 600, 600);

 
 //Light pink shapes
 fill (247, 119, 219);
  rect(100, 100, 300, 300);

  star(20, 100, 60, 130, 5);
  star(20, 100, 50, 110, 5);
   star(20, 100, 40, 90, 5);
   
   //black star
   fill(0);
   star(20, 100, 30, 70, 5);



  //dark pink shapes
 fill (199, 40, 163);
 star(400, 400, 60, 140, 5);
 rect (400, 400, 300, 300);

  //Grid
  line (100, 0, 100, 600);
  line (200, 0, 200, 600);
  line (300, 0, 300, 600);
  line (400, 0, 400, 600);
  line (500, 0, 500, 600);
  line (0, 100, 600, 100);
  line (0, 200, 600, 200);
  line (0, 300, 600, 300);
  line (0, 400, 600, 400);
  line (0, 500, 600, 500);
        
  
   fill(247, 119, 219)
    {if (mouseX > width*0.5)

          {fill (0);
  translate(width * 0.5, height * 0.5);
  star(0, 0, 75, 175, 5);
    }

      fill (199, 51, 40);
push();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / -50.0);
  star(0, 0, 60, 140, 5);
  pop();
    }

  fill (199, 40, 163);
  {if (mouseY > height * 0.5)

      fill (133,64,156);
push();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / 50.0);
  star(0, 0, 30, 70, 5);
  pop();
    }

   fill (199, 51, 40);
    {if (mouseY < height * 0.5)
      fill (158, 255, 199)
    }
    push();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / -50.0);
  star(0, 0, 15, 35, 5);
  pop();

}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
  /*stars and rotation functions copied from https://p5js.jp/examples/form-star; added conditional statements to change color */

}



