let panels = []; 
let panelWidth = 100;

let ellipse1;
let ellipse2;
//ellipses.length = 10

let r = 193;
let g = 40;
let b =163;



let currentTime = 0;
let prevTime = 0;
let interval = 500; //in milliseconds

function setup() 
{
    createCanvas(800, 600);

 
    for (let y = 0; y < height; y += panelWidth)
    {
        for(let x = 0; x < width; x += panelWidth) 
        {
           
            panels.push(new Panel(x, y, 127, 127, 127, panelWidth));
          
        }
    }

    ellipse1 = new Ellipse (50, 50, 100);
     ellipse2 = new Ellipse (200, 200, 150);

   }

function draw() 
{
    background(0);
  

     noStroke ();
     //strokeWeight(4);
  
    for(let i = 0; i < panels.length; i++)
    {
        panels[i].display();
    }

  
    currentTime = millis();
    if (currentTime - prevTime >= interval)
    {
        prevTime = currentTime; 
        for(let i = 0; i < panels.length; i++)
        {
            panels[i].slightRandom();   
        }
    }

    ellipse1.display();
    ellipse2.display();
}

class Panel {
    constructor(tempX, tempY, tempR, tempG, tempB, tempSize) 
    {
        this.x = tempX;
        this.y = tempY;
        this.r = tempR;
        this.g = tempG;
        this.b = tempB;
        this.size = tempSize;
    }

    display() 
    {
        fill(this.r, this.g, this.b);
        // stroke(this.r, this.g, this.b);
        rect(this.x, this.y, this.size, this.size);
    }

    randomize() 
    {
        this.r = random(255);
        this.g = random(255);
        this.b = random(255);
    }

    slightRandom() 
    {
        this.r += random(-10, 10);
        this.g += random(-10, 10);
        this.b += random(-10, 10);
    }
}  


  class Ellipse
  
  {
    constructor (tempX, tempY, tempR, tempG, tempB, tempDiameter)
  {
     this.x = tempX;
        this.y = tempY;
        this.r = tempR;
        this.g = tempG;
        this.b = tempB;
        this.diameter = tempDiameter;
  }
 
  display()
  {
    ellipse(this.x, this.y, this.r, this.g, this.b, this.diameter);

    stroke(100);
    strokeWeight(4);

}
}
