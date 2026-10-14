let toggle = false;

function setup()
{
    createCanvas(500, 500);
    rectMode(CENTER);
    textAlign(CENTER);
}


function draw()
{
background (200);
iceCream (100, height/2, 65, 170, 230, 180, "MINT");
iceCream (50, 200, 75, 250, 170, 210, "BERRY");
iceCream (450, 300, 80, 250, 250, 210, "COCONUT");

if (toggle ==true)
{
rectRayDisplay(25, 450, 50, "I")
rectRayDisplay(width/2, 450, 50, "A")
rectRayDisplay(width - 25, 450, 50, "N")
}
}


function iceCream(x, y, diameter, r, g, b, flavor)
{
    fill (170, 120, 35); //cone color
triangle (x, y, x + 50, y, x + 25, y +100);
fill (r, g, b);
circle (x + 25, y, diameter);
text(flavor, x + 25, y - 50);
}

function rectRayDisplay(x, y, size, letter)
{
    fill (245, 245, 60);
    rect(x, y, size, size);

    for (let i = 0; i < size; i += 10)
    {
        line(x, y, mouseX + 1, mouseY + i);

    }
    fill (0);
    text (letter, x, y);
}

function mousePressed()
{
    toggle = !toggle;
}