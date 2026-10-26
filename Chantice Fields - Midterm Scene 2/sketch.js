let scene = 1;

let img;
let imgShader;

let myfont;
let sky;
let bg;

let clouds1; let clouds4; let clouds5;
let clouds2; let clouds3;

let eyeL; let eyeR; let pupil;

let cat;
let catPosition;
let table;

let angle = 0;
let radius = 100;

let pupilScale = 1;
let catScale = 0.05;

let eyeOffset = 0;


//Global variables for ellipse size and position
let elllipseSize;
let ellipseWidth = 200; let ellipseHeight = 35;
let ellipseX = 516; let ellipseY = 465;


//Global variables for left cloud positions
let clouds1X = 75; let  clouds4X = 500; let clouds2X = 250;
let clouds1Y = 280; let clouds4Y = 280; let clouds2Y = 275; 


//Global variables for right cloud positions
let clouds3X = 450; let clouds5X = 925;
let clouds3Y = 30;  let clouds5Y = 450;



async function setup() 
{    
    createCanvas(992, 556);
    //rectMode(CENTER);
    imageMode(CENTER);
 
   
    myfont = await loadFont("assets/HENNYPENNY-REGULAR.TTF");
    textFont(myfont);
    textAlign(CENTER, CENTER);
    textSize(36);
     
    sky = await loadImage("assets/sky.png");
    table = await loadImage("assets/table.png");

     clouds1 = await loadImage("assets/clouds1.png");
    clouds2 = await loadImage("assets/clouds2.png");
     clouds4 = await loadImage("assets/clouds4.png");
   
    
  clouds3 = await loadImage("assets/clouds3.png");
  clouds5 = await loadImage("assets/clouds5.png");

     cat = await loadImage("assets/cat.png");

     //eyeL = await loadImage("assets/eyeLeft1.png");
     //eyeR = await loadImage("assets/eyeRight1.png");
     //pupil = await loadImage("assets/pupil1.png");

}

  
function draw() 
{

   //background(255);
   image(sky, width/2, height/2);
  

   //table at center of page
   image(table, width/2, height/2, width, height);
   
    fill (115, 35, 6, 150);
    noStroke(0);
    ellipse(ellipseX, ellipseY, ellipseWidth, ellipseHeight);

  
    //Clouds on the left side of the canvas, moving to the right
    image(clouds1, clouds1X, clouds1Y, width, height);
     image(clouds2, clouds2X, clouds2Y);
    image(clouds4, clouds4X, clouds4Y, width, height);
  

    clouds1X += 0.4;
    clouds4X += 0.2;
    clouds2X += 0.7;


    //Clouds on the right side of the canvas, move to the left
  
  
   image(clouds3, clouds3X, clouds3Y);
   image(clouds5, clouds5X, clouds5Y, width, height);

    clouds5X -= 0.3;
    clouds3X -= 0.5;

    //Draw cat behind the pupil
  
        let yOffset = sin(frameCount * 0.05) * 15
        image(cat, width/2, height/2 + yOffset, cat.width, cat.height);

 
  
    //catPosition(mouseX, mouseY, cat.width, cat.height);
        
    //Draw eye
    //image(eyeL, width/2 -eyeOffset, height/2, width, height);
    //image(eyeR, width/2 +eyeOffset, height/2, width, height);
   //image(pupil, width/2, height/2, pupil.width * pupilScale, pupil.height * pupilScale);


  // orbiting title
let x = width /2 + radius * cos(angle);
let y = height/2 + radius * sin(angle);

  // Draw the text at the moving coordinate
  fill(255);
  text("oN cLoUd niNe...", x, y);
   
  
  // Increment angle to make it move
  angle += 0.01; 


}




     













