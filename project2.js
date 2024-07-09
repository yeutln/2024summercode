//characters
let character 
let bedroom
let dungeon

let startBool = true

let nextScreenBool = true 

let linoFont
let comiFont
let candles
let blood
let glitch
let torch
let main



function preload(){
   character = loadImage('main.png')
   bedroom = loadImage('bedroom.png')
   dungeon = loadImage('dungeon.png')
   linoFont = loadFont('Linographer.ttf')
   comiFont = loadFont('comicate.ttf')
   candles = loadImage('candles.gif')
   blood = loadImage('blood.png')
   glitch = loadImage('glitch.gif')
   torch = loadImage('torch.gif')
   main = loadImage('main.png')
}



function setup(){
   createCanvas(windowWidth, windowHeight)
   background(0)
   imageMode(CENTER)
}


function draw(){
   if(startBool == true)
      startGame()
   

}


function startGame(){
    background(0)
    
    image(blood, 230, 150, 900, 700)
    image(blood, 1000, 150, 900, 700)
    image(candles, 175, 620, 300, 300)
    image(candles, 1290, 620, 300, 300)
    fill(97, 27, 22)
    textSize(40)
    textFont(linoFont)
    text('Nightmares End', 450, 200)
    textFont(comiFont)
    text('click "x" to start..', 575, 400)
    text('options', 660, 450)
    text('???', 700, 500)

}





function windowResized(){
   resizeCanvas(windowWidth, windowHeight)
}
