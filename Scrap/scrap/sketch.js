let clouds4;

//Global variables for movement and opacity
let opacity = 0;
let fade = 1;
let xPos = 100;
let yPos = 300;
let xMove = 5;
let yMove = 0;
let rise = 1;
let xlocation = 0;

async function setup() 
{   
    createCanvas(415, 420);
    background(255);
    imageMode(CENTER);
    textAlign(CENTER);
    textSize(40);

     clouds4 = await loadImage("assets/magritteclouds4.png");
}

function draw() 
{
    background(220);

    image(clouds4, 10, 215);
image(xLocation, height / 2, width / 4, width / 4);
}
