let currentTime = 0;
let timer1 = 3000; 
let timer2 = 5000; 


let angle = 0;
let radius = 100;

let scene = 1;
let scene01Switch;
let scene02Switch;
let scene03Switch;

let myfont;

let img;
let imgShader;

let sky;

let xPos = -250;
let clouds1; let clouds4; let clouds5;
let clouds2; let clouds3;

//Global variables for left cloud positions
//let clouds1X = 75; let  clouds4X = 500; let clouds2X = 250;
//let clouds1Y = 280; let clouds4Y = 280; let clouds2Y = 275; 

let clouds1X = -200; let  clouds4X = 0; let clouds2X = -250;
let clouds1Y = 280; let clouds4Y = 280; let clouds2Y = 275; 


//Global variables for right cloud positions
//let clouds3X = 450; let clouds5X = 925;
//let clouds3Y = 30;  let clouds5Y = 450;

let clouds3X = 1000; let clouds5X = 1000;
let clouds3Y = 30;  let clouds5Y = 450;

let eyeL; let eyeR; 
let eyeOffset = 0;

let pupil; 
let pupilScale = 1;
let pupilX = -5;
let pupilMove = 2;
let pupilSwitch = false

let table;
let tableY = 500

//Cat Details
let cat;
let catOffset = 0
let catX = 0;
let catY = 0;
let catMove = 2;
let catSize;
let catScale = 0.05;
let catMax = catScale <= 1;
let catGrowth = 0.01;
let catSwitch = false


//Global variables for ellipse size and position
let elllipseSize;
let ellipseWidth = 200; let ellipseHeight = 35;
let ellipseX = 400; let ellipseY = 600;

let textX = 485;
 let textMove = 1;

async function setup() 
{    
    createCanvas(800, 556);
    rectMode(CENTER);
    imageMode(CENTER);
 
   
    myfont = await loadFont("assets/HENNYPENNY-REGULAR.TTF");
    textFont(myfont);
    textSize(30);
     
    sky = await loadImage("assets/sky.png");
    table = await loadImage("assets/table.png");

     clouds1 = await loadImage("assets/clouds1.png");
    clouds2 = await loadImage("assets/clouds2.png");
     clouds4 = await loadImage("assets/clouds4.png");
   
    
  clouds3 = await loadImage("assets/clouds3.png");
  clouds5 = await loadImage("assets/clouds5.png");

     cat = await loadImage("assets/cat.png");

     eyeL = await loadImage("assets/eyeLeft1.png");
     eyeR = await loadImage("assets/eyeRight1.png");
     pupil = await loadImage("assets/pupil1.png");

}

  
function draw() 
{
  image(sky, width/2, height/2);

   titlePage();

     if(scene01Switch == true)
      {
        scene01();
      }

      if(scene02Switch == true)
      {
        scene02();
      }

      if(scene03Switch == true)
      {
        scene03();
      }
     }

   function titlePage()

 {    
  //table at center of page
  

    image(clouds1, clouds1X, clouds1Y);
    image(clouds4, clouds4X, clouds4Y);
    image(clouds2, xPos, clouds2Y);
  

    //Clouds on the right side of the canvas, move to the left 
   image(clouds3, clouds3X, clouds3Y);
   image(clouds5, clouds5X, clouds5Y);

    image(table, width/2, tableY, table.width, table.height);
  
  //let yOffset = sin(frameCount * 0.05) * 15;
  let catSize = (cat.width * catScale, cat.height * catScale);
  image(cat, catX, height/2 - catOffset, catSize, catSize);


  

image(pupil, pupilX, height/2, pupil.width * pupilScale, pupil.height * pupilScale);

  if (pupilSwitch == true)
  {
    pupilX += pupilMove
  
  if (pupilX >= width/2)
{
  pupilX = width/2
  }
  }

    if (catSwitch == true)
  {
    catX += catMove
    if (catX >= width/2)
{
  catX = width/2
  }
  
  }
  
// orbiting title
//let x = width /2 + radius * cos(angle);
//let y = height/2 + radius * sin(angle);
//fill (0);
fill(78, 159, 191, 165); 
text("oN cLoUd niNe...", 485, height/2);
 //angle += 0.03; 

//Clouds on the left side of the canvas, moving to the right
  

     //Draw eye
image(eyeL, width/2 -eyeOffset, height/2, eyeL.width, eyeL.height);
image(eyeR, width/2 +eyeOffset, height/2, eyeR.width, eyeR.height);
}

function scene01()
{
   
    //fill (115, 35, 6, 150);
   // noStroke();
    //ellipse(ellipseX, ellipseY, ellipseWidth, ellipseHeight);
 {
    pupilScale -= 0.02;

    if(pupilScale <= 0.001)
    {
      pupilScale = 0.001;
    }

  eyeOffset += 10;
  
  drawCloudsmove();
  

  if (catScale < catMax)
  {
  catScale += catGrowth
}
}
}

function scene02 ()
{
catOffset +=10;

}

function scene03 ()
{

image(eyeL, 201, 160, eyeL.width/2 * random(5), eyeL.height/2);
image(eyeR, 201, 160, eyeR.width/2, eyeR.height/2 * random(1));
image(pupil, 201, 160, pupil.width/2 * random (1), pupil.height/2 * random (1));

image(eyeL, 610, 160, eyeL.width/2, eyeL.height/2);
image(eyeR, 610, 160, eyeR.width/2, eyeR.height/2);
image(cat, 610, 160, cat.width/2, cat.height/2);


image(eyeL, 201, 389, eyeL.width/2, eyeL.height/2);
image(eyeR, 201, 389, eyeR.width/2, eyeR.height/2);
image(cat, 201, 389, cat.width/2, cat.height/2);

image(eyeL, 610, 389, eyeL.width/2, eyeL.height/3);
image(eyeR, 610, 389, eyeR.width/2, eyeR.height/2);
image(pupil, 610, 389, pupil.width/2, pupil.height/2 * random(1));

}

function mousePressed()
{
 pupilSwitch = !pupilSwitch;
 catSwitch = !catSwitch;

}

function keyPressed()
{
   if (key === '1')
   {
    scene01Switch = !scene01Switch
   }

   if (key === '2')
   {
    scene02Switch = !scene02Switch
   }

  
   if (key === '3')
   {
    scene03Switch = !scene03Switch
  
   }

   
}

function drawCloudsmove ()

//left cloud positions
//let clouds1X = 75; let  clouds4X = 500; let clouds2X = 250;

{
  clouds1X += 0.4; 

    if (clouds1X >= 55)
{
  clouds1X = 55
  }
  
  clouds4X += 0.4;
  if (clouds4X >= 500)
{
  clouds4X = 500
  }

  xPos += 0.7; //want this to move continuously

    if (xPos >= 900)
{
  xPos = -900;
  }

//right cloud positions
//let clouds3X = 450; let clouds5X = 855;


  clouds3X -= 0.5;

    if (clouds3X <= 400)
{
  clouds3X = 400
  }

  clouds5X -= 0.7;
 if (clouds5X <= 855)
{
  clouds5X = 855
  }

  

 // tableY -=1;
  //if (tableY<=300)
 //{
   // tableY = 300


  //ellipseY -=0.2;
 // if (ellipseY<=475)
 // {
    //ellipseY = 475
 // }
  
}

