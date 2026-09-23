let r = 255;
let g = 255;
let b = 255;

  function setup() 
  { createCanvas(600, 600);
    rectMode(CENTER);
}

function draw() 
{
  background(220);
  background (r, g, b)

  
  if (mouseX > width/2)
    {

      fill(255, 0, 0);
      ellipse(width/2, height/2, 100, 100);

    }
else if (mouseY > height / 2)

  {
    fill(0, 255, 0);
  ellipse(width/2, height/2, 100, 100);
}
else
{
  fill (255);
  rect(width/2, height/2, 100, 100);
}

}

function mousePressed()
{
  r = random(255);
  print(r);
  g = random (255);
  b = random (50, 100);

}
