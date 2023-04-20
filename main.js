var ironman;
var ultron;
var sokovia;

function setup(){

    ironman  = createSprite(10, 350, 50, 70)
    ultron  = createSprite(200, 350, 50, 70)

    
ironmanImg = loadImage("ironman.png")
ultonImg = loadImage("ultron.jpg")
sokoviaImg = loadImage("sokovia.webp")
}

function draw(){

    ironmanImg = addImage("ironman.png")
    sokoviaImg = addImage("ironman.png")
    ultronImg = addImage("ironman.png")
   

    drawSprites()
}