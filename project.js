// Declare variables for images, fonts, and audio
let bedroom, dungeon, candles, blood, glitch, torch, main;
let linoFont, comiFont, satanFont;
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
   glitch = loadImage('glitch.png'); // Load glitch.png instead of glitch.gif
   torch = loadImage('torch.gif');
   main = loadImage('main.png');

   // Load fonts
   linoFont = loadFont('Linographer.ttf');
   comiFont = loadFont('comicate.ttf');
   satanFont = loadFont('satan.ttf'); // Load satan.ttf font

   // Load music
   music = loadSound('music.mp3');
}

function setup(){
   createCanvas(windowWidth, windowHeight);

   // Set initial position of main character
   mainX = 325;
   mainY = 230;

   // Start playing music
   music.loop();
   getAudioContext().resume();
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

   // Check if options button is clicked
   if (optionsClicked) {
      image(glitch, 0, 0, width, height); 
      textAlign(CENTER, CENTER);
      textSize(80); 
      fill(82, 14, 14);
      textFont(satanFont); // Use satanFont for the text
      text('START THE GAME', width/2, 600);

      // Draw back button
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
      mainX -= 2.5;
   }
   if(keyIsDown(RIGHT_ARROW) && mainX < 1000){
      mainX += 2.5;
   }
   if(keyIsDown(UP_ARROW) && mainY > 210){
      mainY -= 2.5;
   }
   if(keyIsDown(DOWN_ARROW) && mainY < 610){
      mainY += 2.5;
   }
}

function keyPressed(){
   if(key === 'x'){
      if(screen === 0){
         screen = 1;
      }
   }
}

function mousePressed(){
   // Check if mouse is within options button area
   if (mouseX > 660 && mouseX < 660 + textWidth('options') + 20 &&
       mouseY > 450 - 40 && mouseY < 450) {
      optionsClicked = true;
   }

   // Check if mouse is within back button area on glitch screen
   if (optionsClicked && mouseX > backButtonX && mouseX < backButtonX + backButtonWidth &&
       mouseY > backButtonY && mouseY < backButtonY + backButtonHeight) {
      optionsClicked = false; // Reset optionsClicked to go back
   }
}

function windowResized(){
   resizeCanvas(windowWidth, windowHeight);
}

