/*Chantice Fields
SS4--Experimenting with making still images more dynamic.
*/

let magrittesky;
let magrittecat;
let magritteclouds1;
let magritteclouds2;
let magritteclouds3;
let magritteclouds4;
let magritteclouds5;
let magrittetable;
let bg;

//Global variables for movement and opacity
let opacity = 0;
let fade = 1;
let xPos = 100;
let yPos = 100;
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

    magrittecat = await loadImage("assets/magrittecat.png");
    magrittesky = await loadImage("assets/magrittesky.png");
    magritteclouds1 = await loadImage("assets/magritteclouds1.png");
    magritteclouds2 = await loadImage("assets/magritteclouds2.png");
    magritteclouds3 = await loadImage("assets/magritteclouds3.png");
    magritteclouds4 = await loadImage("assets/magritteclouds4.png");
    magritteclouds5 = await loadImage("assets/magritteclouds5.png");
    magrittetable = await loadImage("assets/magrittetable.png");
      
}

function draw() 
{
background(bg);
bg = image(magrittesky, width/2, height/2);

image(magritteclouds4, 10, 215);
image(magritteclouds5, 100, 260);
image(magritteclouds1, 100, 100);
image(magritteclouds2, 375, 350);
image(magritteclouds3, 410, 100);

image(magrittetable, 207, 210);


fill(opacity);
fill(255);
text("ON CLOUD NINE...", width/2, height/4);


	if (mouseIsPressed) 
	{
		image(magrittecat, width/2, rise, magrittecat.width, magrittecat.height);
        if (rise < height) 
		{
			rise++;
		}

    }


}  

