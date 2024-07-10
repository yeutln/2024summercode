//characters
let bedroom
let dungeon

let mainX = 50;
let mainY = 50;

let linoFont
let comiFont
let candles
let blood
let glitch
let torch
let main
let scren = 0


function preload(){
   bedroom = loadImage('bedroom.png')
   dungeon = loadImage('dungeon.png')
   linoFont = loadFont('Linographer.ttf')
   comiFont = loadFont('comicate.ttf')
   candles = loadImage('candles.gif')
   blood = loadImage('blood.png')
   glitch = loadImage('glitch.gif')
   torch = loadImage('torch.gif')
   main = loadImage('main.png')
   mainX = loadImage('main.png')
   mainY = loadImage('main.png')
}



function setup(){
   createCanvas(windowWidth, windowHeight)
   mainX = 325;
   mainY = 230;
}


function draw(){
   

   if(scren == 0){
     screen1();
   } else if (scren == 1){
     screen2();
   } else if (scren == 2){
     screen3();
   }else if (scren == 3){
     screen4();
   }
 

   
}




function screen1(){
   background(0)
    
    image(blood, 10, -200, 1000, 700)
    image(blood, 900, -200, 1000, 700)
    image(candles, 20, 470, 300, 300)
    image(candles, 1150, 470, 300, 300)
    fill(97, 27, 22)
    textSize(40)
    textFont(linoFont)
    text('Nightmares End', 450, 200)
    textFont(comiFont)
    text('click "x" to start..', 565, 400)
    text('options', 660, 450)
    text('???', 700, 500)
} 




function screen2(){
   background(0)

   image(bedroom, 100, 70, 1000, 650)
   image(main, mainX,mainY, 80, 80) 
   if(keyIsDown(LEFT_ARROW) && mainX >140){
      mainX -= 2.5;
   }
   if(keyIsDown(RIGHT_ARROW) && mainX <1000){
      mainX += 2.5;
   }
   if(keyIsDown(UP_ARROW) && mainY >210){
      mainY -= 2.5;
   }
   if(keyIsDown(DOWN_ARROW) && mainY <610){
      mainY += 2.5;
   }


 }

function keyPressed(){
   if(key == 'x')
   if(scren == 0){
      scren = 1;
    }
}   






function windowResized(){
   resizeCanvas(windowWidth, windowHeight)
}