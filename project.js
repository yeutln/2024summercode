// Declare variables for images, fonts, and audio
let bedroom, dungeon, candles, blood, glitch, torch, main;
let linoFont, comiFont, satanFont, gorlaFont;
let music;

// Initial coordinates for main character
let mainX = 50;
let mainY = 50;

// Screen identifier
let screen = 0;

// Boolean to track options button state
let optionsClicked = false;

// Back button variables
let backButtonX = 20;
let backButtonY = 20;
let backButtonWidth = 120;
let backButtonHeight = 40;

function preload(){
   // Load images
   bedroom = loadImage('bedroom.png');
   dungeon = loadImage('dungeon.png');
   candles = loadImage('candles.gif');
   blood = loadImage('blood.png');
   glitch = loadImage('glitch.png'); 
   torch = loadImage('torch.gif');
   main = loadImage('main.png');

   // Load fonts
   linoFont = loadFont('Linographer.ttf');
   comiFont = loadFont('comicate.ttf');
   satanFont = loadFont('satan.ttf'); 
   gorlaFont = loadFont('gorla.ttf')

   // Load music
   music = loadSound('music.mp3');
}

function setup(){
   createCanvas(windowWidth, windowHeight);

   mainX = 325;
   mainY = 230;
}

function draw(){
   if(screen === 0){
      screen1();
   } else if (screen === 1){
      screen2();
   } else if (screen === 2){
      screen3();
   } else if (screen === 3){
      screen4();
   }
}

function screen1(){
   background(0);
    
   image(blood, 10, -200, 1000, 700);
   image(blood, 900, -200, 1000, 700);
   image(candles, 20, 470, 300, 300);
   image(candles, 1150, 470, 300, 300);
   
   fill(97, 27, 22);
   textSize(40);
   textFont(linoFont);
   text('Nightmares End', width/2 , 200);
   textFont(comiFont);

   if (optionsClicked){
      image(glitch, 0, 0, width, height); 
      textAlign(CENTER, CENTER);
      textSize(80); 
      fill(82, 14, 14);
      textFont(satanFont); 
      text('START THE GAME', width/2, 600);

      fill(0, 150);
      rect(backButtonX, backButtonY, backButtonWidth, backButtonHeight, 10);
      fill(82, 14, 14);
      textSize(60);
      textAlign(CENTER, CENTER);
      text('BACK', backButtonX + backButtonWidth / 2, backButtonY + backButtonHeight / 2);
   } else {
      textAlign(CENTER, CENTER);
      text('click "x" to start..', width/2, height/2);
      text('options', width/2, 430);
      text('???', width/2, 480);
   }
}

function screen2(){
   background(0);

   image(bedroom, 100, 70, 1000, 650);
   image(main, mainX, mainY, 80, 80); 

   // Movement controls for main character
   if(keyIsDown(LEFT_ARROW) && mainX > 140){
      mainX -= 3;
   }
   if(keyIsDown(RIGHT_ARROW) && mainX < 1000){
      mainX += 3;
   }
   if(keyIsDown(UP_ARROW) && mainY > 210){
      mainY -= 3;
   }
   if(keyIsDown(DOWN_ARROW) && mainY < 610){
      mainY += 3;
   }

   // Check if main character is near specific coordinates for "The power is off.."
   let distance1 = dist(mainX, mainY, 804, 250);
   if (distance1 < 50) { 
      fill(255);
      stroke(0); 
      strokeWeight(2); 
      textSize(30);
      textFont(gorlaFont);
      textAlign(CENTER, CENTER);
      text('The power is off..', 815, 144); 
      noStroke(); 
   }

   // Check if main character is near specific coordinates for "Weird.. my door is locked..."
   let distance2 = dist(mainX, mainY, 938, 373);
   if (distance2 < 50) { 
      fill(255);
      stroke(0); 
      strokeWeight(2); 
      textSize(30);
      textFont(gorlaFont);
      textAlign(CENTER, CENTER);
      text('Weird.. my door is locked, I have a spare key in my dresser.', 990, 325); 
      noStroke(); 
   }

   // Check if main character is near specific coordinates for "It's so gloomy outside.."
   let distance3 = dist(mainX, mainY, 573, 251);
   if (distance3 < 50) { 
      fill(255);
      stroke(0); 
      strokeWeight(2); 
      textSize(35);
      textFont(gorlaFont);
      textAlign(CENTER, CENTER);
      text("It's so gloomy outside..", 573, 200); 
      noStroke(); 
   }
}

function keyPressed(){
   if(key === 'x'){
      if(screen === 0){
         screen = 1;
         music.loop(); 
      }
   }
}

function mousePressed(){
   if (mouseX > 660 && mouseX < 660 + textWidth('options') + 20 &&
       mouseY > 450 - 40 && mouseY < 450) {
      optionsClicked = true;
      if (!music.isPlaying()) {
         music.loop(); 
      }
   }

   if (optionsClicked && mouseX > backButtonX && mouseX < backButtonX + backButtonWidth &&
       mouseY > backButtonY && mouseY < backButtonY + backButtonHeight) {
      optionsClicked = false; 
   }
}

function windowResized(){
   resizeCanvas(windowWidth, windowHeight);
}

