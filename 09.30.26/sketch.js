let tuna; //declare a p5.image object called tuna

async function setup()
{
  createCanvas(500, 500);
  background (200);
  imageMode(CENTER);
  tuna = await loadImage ("assets/tuna.png");
}

function draw() 
{
  background(220);

  image (tuna, width/2, height/2);
}
