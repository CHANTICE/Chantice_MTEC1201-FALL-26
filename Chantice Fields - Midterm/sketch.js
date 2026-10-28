let scene = 1;

let sky;
let bg;

let clouds1; let clouds4; let clouds5;
let clouds2; let clouds3;

let eyeL; let eyeR; let pupil;

let cat;
let catScale = 0.05;

let table;

let angle = 0;
let radius = 100;

let pupilScale = 1;


let eyeOffset = 0;


//Global variables for ellipse size and position
let elllipseSize;
let ellipseWidth = 165; let ellipseHeight = 35;
let ellipseX = 218; let ellipseY = 395;


//Global variables for left cloud positions
let clouds1X = 100; let clouds4X = 300; let clouds5X = 300;
let clouds1Y = 300; let clouds4Y = 315; let clouds5Y = 375;


//Global variables for right cloud positions
let clouds2X = 375; let clouds3X = 410;
let clouds2Y = 350; let clouds3Y = 100;

let img;
let imgShader;

async function setup() 
{   
    createCanvas(992, 556);
   // rectMode(CENTER);
    imageMode(CENTER);
    textAlign(CENTER, CENTER);
    textSize(40);
    
    sky = await loadImage("assets/sky.png");
    table = await loadImage("assets/table.png");

     clouds1 = await loadImage("assets/clouds1.png");
     clouds4 = await loadImage("assets/clouds4.png");
     clouds5 = await loadImage("assets/clouds5.png");

     clouds2 = await loadImage("assets/clouds2.png");
     clouds3 = await loadImage("assets/clouds3.png");

     cat = await loadImage("assets/cat.png");

     eyeL = await loadImage("assets/eyeLeft1.png");
     eyeR = await loadImage("assets/eyeRight1.png");
     pupil = await loadImage("assets/pupil1.png");

      
}

  
function draw() 
{

   background(255);
   image(sky, width/2, height/2);

   //table at center of page
   image(table, width/2, height/2, width, height);

  
    //Clouds on the left side of the canvas, moving to the right
    image(clouds1, clouds1X, clouds1Y, width, height);
    image(clouds4, clouds4X, clouds4Y, width, height);
    image(clouds5, clouds5X, clouds5Y, width, height);


    //Clouds on the right side of the canvas, move to the left
    image(clouds2, clouds2X, clouds2Y);
    image(clouds3, clouds3X, clouds3Y);

    //Draw cat behind the pupil
    image(cat, width/2, height/2, cat.width * catScale, cat.height *catScale);  
        
    //Draw eye
    image(eyeL, width/2 -eyeOffset, height/2, width, height);
    image(eyeR, width/2 +eyeOffset, height/2, width, height);
   image(pupil, width/2, height/2, pupil.width * pupilScale, pupil.height * pupilScale);

    if (scene != 3) //if not scene 3...
   {  
     expand = 0;  //reset value of expand
   }
   
   if (scene == 1) 
   {
     doScene1();
   } 
   else if (scene == 2) 
   {
     doScene2();
   } 
     
  }

 //Draw frame
  //noFill();
 //strokeWeight(50); 
//rect (width/2, height/2, 850, 456, 20, 20);

 function doScene1() 
 {
     if(mouseIsPressed)
{
    pupilScale -= 0.02;

    if(pupilScale <= 0.001)
    {
      pupilScale = 0.001;
    }

  eyeOffset += 10;
  catScale += 0.01;
}


  


  // orbiting title
  let x = width / 2 + radius * cos(angle);
  let y = height / 2 + radius * sin(angle);

  // Draw the text at the moving coordinate
  text("ON CLOUD NINE", x, y);
  
  // Increment angle to make it move
  angle += 0.03; 
}


 

     













