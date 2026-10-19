let sky;
let bg;

let clouds1; let clouds4; let clouds5;
let clouds2; let clouds3;

let eyeL; let eyeR; let pupil;

let cat;
let table;

let angle = 0;
let radius = 100;


//Global variables for ellipse size and position
let elllipseSize;
let ellipseWidth = 165; let ellipseHeight = 35;
let ellipseX = 218; let ellipseY = 395;


//Global variables for left cloud positions
let clouds1X = 100; let clouds4X = 10;  let clouds5X = 100;
let clouds1Y = 300; let clouds4Y = 215; let clouds5Y = 260;


//Global variables for right cloud positions
let clouds2X = 375; let clouds3X = 410;
let clouds2Y = 350; let clouds3Y = 100;

let img;
let imgShader;

async function setup() 
{   
    createCanvas(992, 556);
    imageMode(CENTER);
    textAlign(CENTER, CENTER);
    textSize(40);
    
    sky = await loadImage("assets/sky.png");

     clouds1 = await loadImage("assets/clouds1.png");
     clouds4 = await loadImage("assets/clouds4.png");
     clouds5 = await loadImage("assets/clouds5.png");

     clouds2 = await loadImage("assets/clouds2.png");
     clouds3 = await loadImage("assets/clouds3.png");

     eyeL = await loadImage("assets/eyeLeft1.png");
     eyeR = await loadImage("assets/eyeRight1.png");
     pupil = await loadImage("assets/pupil1.png");

      
}

  
function draw() 
{

   background(bg);
   bg = image(sky, width/2, height/2);

   image(table, width/2, height/2, width, height);

  
    //Clouds on the left side of the canvas, moving to the right
    image(clouds1, clouds1X, clouds1Y, width, height);
    image(clouds4, clouds4X, clouds4Y, width, height);
    image(clouds5, clouds5X, clouds5Y, width, height);


    //Clouds on the right side of the canvas, move to the left
    image(clouds2, clouds2X, clouds2Y);
    image(clouds3, clouds3X, clouds3Y);

    
    //Draw eye
    image(eyeL, width/2, height/2, width, height);
    image(eyeR, width/2, height/2, width, height);
    image(pupil, width/2, height/2, width, height);

   
       
  
  // orbiting title
  let x = width / 2 + radius * cos(angle);
  let y = height / 2 + radius * sin(angle);

    // Draw the text at the moving coordinate
  text("ON CLOUD NINE", x, y);
  
  // Increment angle to make it move
  angle += 0.03; 

  
}

mousePressed();
{
    pupil -= 1;
}





