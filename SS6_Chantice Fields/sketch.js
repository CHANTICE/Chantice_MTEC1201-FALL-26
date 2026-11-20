/*Chantice Fields
*/
let arrayVal = []; //array for storing my calculated values

//timer variables
let currentTime = 0; 
let prevTime = 0;
let timer = 2000;

//color variables
let r = 199;
let g = 40;
let b = 163;

// star variable
let x = 0;
let y = 0;
 

function setup() 
{
  createCanvas(800, 800);
  rectMode(CENTER);
  for (let i = 5; i <= 12; i++)
	{
		arrayVal[i - 5] = pow(i, 6); //sub i by 4 so 1st array element is addressed
		
		//print array values to console:
		//print("arrayVal[" + (i-4) + "] = " + arrayVal[i-4]);
	}

}

function draw() 
{
    currentTime = millis(); //keep track of elapsed time
	
	if (currentTime - prevTime >= timer) //if 1 sec has passed since last timer triggered
	{
		prevTime = currentTime; //set previous time to the current time when timer triggered
		
		//choose a random element from array
		r = arrayVal[int(random(arrayVal.length))]; 
		g = arrayVal[int(random(arrayVal.length))];
		b = arrayVal[int(random(arrayVal.length))];
    }  
    background(r, g, b);
      stroke (40, 199, 195);
     strokeWeight(4);

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

//squares
for (let y = 50; y < height; y += 100) 
     { // first for loop!
       for (let x = 50; x < width; x += 100) 
       {
           fill(r, g, b);
   r = random(0, 255);
	g = random(50, 200);
	b = random(100, 255);
           square(x, y, 100);
         }
        }


//stars
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

//Center Stars
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
}
}
    

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

