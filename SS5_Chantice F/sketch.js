/*Chantice Fields
*/
let r = 199;
let colorFade = 5;

// star variable
let x = 0;
let y = 0;
 

function setup() 
{
  createCanvas(800, 800);
  rectMode(CENTER);
 
}

function draw() 
{
    background(r, 40, 163);
      stroke (40, 199, 195);
     strokeWeight(4);

     if (mouseX>width/8 + 100 && mouseX<width/8+100 && mouseY>height/8 + 100 && mouseY<height/8+100);

if (mouseIsPressed)
{r += colorFade; // shorthand for r= r + colorFade
       if (r + colorFade > 255 || r + colorFade < 0) 
       { // if added value > 255 or < 0
         colorFade = -colorFade; // flip increment, multiplies value by -1
       }
     }


  //Grid
  for (let i = 0; i <= width; i = i + 100)
 {
  line(i, 0, i, height);
   print(i);
}

for (let i= 0; i<= height; i = i + 100)
{
    line(0, i, width, i);
}




 fill (199, 40, 163);
{push();
translate(width * 0.5, height * 0.5);
rotate(frameCount / 50.0);

  for (let i = 100; i < width; i = i + 100)
 {
  star(i, 0, 10, 30, 5);
   print(i);
}
pop();
}


fill (133,64,156);
{push();
translate(width * 0.5, height * 0.5);
rotate(frameCount / -50.0);
for (let i= 100; i< height; i = i + 100)
{
     star(0, i, 10, 30, 5);
   }
 pop();
}



fill (0);
{
  star(width/2, height/2, 40, 90, 5);


 push();
 translate(width * 0.5, height * 0.5);
  rotate(frameCount / -50.0);
  star(0, 0, 30, 70, 5);
  pop();
    

 push();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / 50.0);
    star(0, 0, 20, 50, 5);
pop();
}}
    

function star(x, y, radius1, radius2, npoints) 
{
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
}

