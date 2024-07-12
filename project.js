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

// Boolean to track if the key has been collected
let keyCollected = false;

// Coordinates for key
let keyX = 145;
let keyY = 265;

// Coordinates for door
let doorX = 987;
let doorY = 392;

// Boolean to show intro text
let showIntroText = false;

function preload(){
   // Load images
   bedroom = loadImage('bedroom.png');
   dungeon = loadImage('dungeon.png');
   candles = loadImage('candles.gif');
   blood = loadImage('blood.png');
   glitch = loadImage('glitch.png'); 
   torch = loadImage('torch.gif');
   main = loadImage('main.png');
   keyImg = loadImage('key.png');

   // Load fonts
   linoFont = loadFont('Linographer.ttf');
   comiFont = loadFont('comicate.ttf');
   satanFont = loadFont('satan.ttf'); 
   gorlaFont = loadFont('gorla.ttf');

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
   } else if (screen === 4){
      gameOverScreen();
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

   if (!keyCollected) {
      image(keyImg, keyX, keyY, 50, 50);
   }

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
      text(keyCollected ? 'The door is now unlocked..' : 'Weird.. my door is locked, I have a spare key in my dresser.', 990, 325); 
      noStroke(); 
   }

   // Check if main character is near specific coordinates for "It's so gloomy outside.."
   let distance3 = dist(mainX, mainY, 573, 235);
   if (distance3 < 50) { 
      fill(255);
      stroke(0); 
      strokeWeight(2); 
      textSize(35);
      textFont(gorlaFont);
      textAlign(CENTER, CENTER);
      text("It's so gloomy outside..", 573, 170); 
      noStroke(); 
   }

   // Check if main character is near specific coordinates for "The power is off.." (new location)
   let distance4 = dist(mainX, mainY, 609, 542);
   if (distance4 < 50) { 
      fill(255);
      stroke(0); 
      strokeWeight(2); 
      textSize(30);
      textFont(gorlaFont);
      textAlign(CENTER, CENTER);
      text('The power is off..', 605, 500); 
      noStroke(); 
   }
   let distance5 = dist(mainX, mainY, 362, 250);
   if (distance5 < 50) { 
      fill(255);
      stroke(0); 
      strokeWeight(2); 
      textSize(30);
      textFont(gorlaFont);
      textAlign(CENTER, CENTER);
      text('What a weird nightmare.. I need to freshen up', 362, 200); 
      noStroke(); 
   }
}

function screen3(){
   background(0);
   image(dungeon, 0, 0, windowWidth, windowHeight);
   image(main, mainX, mainY, 80, 80); 

   // Movement controls for main character
   if(keyIsDown(LEFT_ARROW) && mainX > 280){
      mainX -= 3;
   }
   if(keyIsDown(RIGHT_ARROW)){
      mainX += 3;
   }
   if(keyIsDown(UP_ARROW) && mainY > 96){
      mainY -= 3;
   }
   if(keyIsDown(DOWN_ARROW)){
      mainY += 3;
   }

   let distance = dist(mainX, mainY, 1000, 320);
   if (distance < 50) {
      screen = 4;
   }
}

function gameOverScreen() {
   background(0);
   fill(255, 0, 0);
   textSize(100);
   textFont(satanFont);
   textAlign(CENTER, CENTER);
   text("GAME OVER", width / 2, height / 2);
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
   }

   if (optionsClicked && mouseX > backButtonX && mouseX < backButtonX + backButtonWidth &&
       mouseY > backButtonY && mouseY < backButtonY + backButtonHeight) {
      optionsClicked = false; 
   }

   // Handle key collection
   if (!keyCollected && mouseX > keyX && mouseX < keyX + 50 && mouseY > keyY && mouseY < keyY + 50) {
      keyCollected = true;
   }

   // Handle door interaction to move to screen 3
   let doorDistance = dist(mouseX, mouseY, doorX, doorY);
   if (keyCollected && doorDistance < 50) {
      screen = 2;
      mainX = 308;
      mainY = 700;
   }
}

function windowResized(){
   resizeCanvas(windowWidth, windowHeight);
}


