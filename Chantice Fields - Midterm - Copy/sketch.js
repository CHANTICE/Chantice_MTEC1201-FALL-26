let clouds1; let clouds4; let clouds5;
let clouds2; let clouds3;

let cat;
let table;


//Global variables for ellipse size and position
let elllipseSize;
let ellipseWidth = 165; let ellipseHeight = 35;
let ellipseX = 218; let ellipseY = 395;


//Global variables for left cloud positions
let clouds1X = 100; let clouds4X = 10;  let clouds5X = 100;
let clouds1Y = 100; let clouds4Y = 215; let clouds5Y = 260;


//Global variables for right cloud positions
let clouds2X = 375; let clouds3X = 410;
let clouds2Y = 350; let clouds3Y = 100;


async function setup() 
{   
    createCanvas(415, 420);
    background(0);
    imageMode(CENTER);
    textAlign(CENTER);
    textSize(40);
    

     clouds1 = await loadImage("assets/magritteclouds1.png");
     clouds4 = await loadImage("assets/magritteclouds4.png");
     clouds5 = await loadImage("assets/magritteclouds5.png");

     clouds2 = await loadImage("assets/magritteclouds2.png");
     clouds3 = await loadImage("assets/magritteclouds3.png");

     cat = await loadImage("assets/magrittecat.png");
     table = await loadImage("assets/magrittetable1.png");
}

function draw() 
{
    background(0);

    
    image(table, width/2, height/2, width, height);

    fill (115, 35, 6, 200);
    noStroke(0);
    ellipse(ellipseX, ellipseY, ellipseWidth-10, ellipseHeight);

    //Clouds on the left side of the canvas, moving to the right
    image(clouds1, clouds1X, clouds1Y, width, height);
    image(clouds4, clouds4X, clouds4Y, width, height);
    image(clouds5, clouds5X, clouds5Y, width, height);

    clouds1X += 0.4;
    clouds4X += 0.2;
    clouds5X += 0.7;

    //Clouds on the right side of the canvas, move to the left
    image(clouds2, clouds2X, clouds2Y);
    image(clouds3, clouds3X, clouds3Y);

    clouds2X -= 0.3;
    clouds3X -= 0.5;

        
    let yOffset = sin(frameCount * 0.05) * 15
    image(cat, width/2, height/2 + yOffset, width-55, height-55);
          
}
