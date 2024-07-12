let mainX = 50;
let mainY = 50;

let screen = 0;

let optionsClicked = false;

let backButtonX = 20;
let backButtonY = 20;
let backButtonWidth = 120;
let backButtonHeight = 40;

let keyCollected = false;
let keyX = 145;
let keyY = 265;

let doorX = 987;
let doorY = 392;

let dungeondoorX = 1283;
let dungeondoorY = 595;

let showIntroText = false;

let bedroom, dungeon, candles, blood, glitch, torch, main, keyImg;
let linoFont, comiFont, satanFont, gorlaFont;
let music;

function preload() {
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

function setup() {
   createCanvas(windowWidth, windowHeight);
   mainX = 325;
   mainY = 230;
}

function draw() {
   if (screen === 0) {
      screen1();
   } else if (screen === 1) {
      screen2();
   } else if (screen === 2) {
      screen3();
   } else if (screen === 3) {
      screen4();
   } else if (screen === 4) {
      gameOverScreen();
   }
}

function screen1() {
   background(0);

   image(blood, 10, -200, 1000, 700);
   image(blood, 900, -200, 1000, 700);
   image(candles, 20, 470, 300, 300);
   image(candles, 1150, 470, 300, 300);

   fill(97, 27, 22);
   textSize(40);
   textFont(linoFont);
   text('Nightmares End', width / 2, 200);
   textFont(comiFont);

   if (optionsClicked) {
      image(glitch, 0, 0, width, height);
      textAlign(CENTER, CENTER);
      textSize(80);
      fill(82, 14, 14);
      textFont(satanFont);
      text('START THE GAME', width / 2, 600);

      fill(0, 150);
      rect(backButtonX, backButtonY, backButtonWidth, backButtonHeight, 10);
      fill(82, 14, 14);
      textSize(60);
      textAlign(CENTER, CENTER);
      text('BACK', backButtonX + backButtonWidth / 2, backButtonY + backButtonHeight / 2);
   } else {
      textAlign(CENTER, CENTER);
      text('click "x" to start..', width / 2, height / 2);
      text('options', width / 2, 430);
      text('???', width / 2, 480);
   }
}

function screen2() {
   background(0);

   image(bedroom, 100, 70, 1000, 650);
   image(main, mainX, mainY, 80, 80);

   if (!keyCollected) {
      image(keyImg, keyX, keyY, 50, 50);
   }

   if (keyIsDown(LEFT_ARROW) && mainX > 140) {
      mainX -= 3;
   }
   if (keyIsDown(RIGHT_ARROW) && mainX < 1000) {
      mainX += 3;
   }
   if (keyIsDown(UP_ARROW) && mainY > 210) {
      mainY -= 3;
   }
   if (keyIsDown(DOWN_ARROW) && mainY < 610) {
      mainY += 3;
   }

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

   let distance2 = dist(mainX, mainY, 938, 373);
   if (distance2 < 50) {
      fill(255);
      stroke(0);
      strokeWeight(2);
      textSize(30);
      textFont(gorlaFont);
      textAlign(CENTER, CENTER);
      text(keyCollected ? 'Click on the door to unlock it' : 'Weird.. my door is locked, I have a spare key on my dresser.', 990, 325);
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

function screen3() {
   background(0);
   image(dungeon, 0, 0, windowWidth, windowHeight);
   image(main, mainX, mainY, 80, 80);

   // Movement controls for main character
   if (keyIsDown(LEFT_ARROW) && mainX > 280) {
      mainX -= 3;
   }
   if (keyIsDown(RIGHT_ARROW)) {
      mainX += 3;
   }
   if (keyIsDown(UP_ARROW) && mainY > 96) {
      mainY -= 3;
   }
   if (keyIsDown(DOWN_ARROW)) {
      mainY += 3;
   }

   

   // Check if main character is near specific coordinates for the new text message
   let distance6 = dist(mainX, mainY, 308, 694);
   if (distance6 < 50) {
      fill(255);
      stroke(0);
      strokeWeight(2);
      textSize(30);
      textFont(gorlaFont);
      textAlign(CENTER, CENTER);
      text('This dungeon was in my dream.. I have to escape there should be a door on the other side!', 338, 660);
      noStroke();
   }


   let distance7 = dist(mainX, mainY, 1310, 620);
   if(distance7 < 50){
   fill(255);
   textSize(30);
   textAlign(CENTER, CENTER);
   text('Click on the door to open', 1330, 565);
   }

}


function screen4() {
   // Display a black screen with the ending text
   background(0);
   fill(255, 0, 0);
   textAlign(CENTER, CENTER);
   textSize(35);
   textFont(satanFont)
   text('You managed to escape the dungeon, and ended up in your room again. Was that all just a nightmare..?', width / 2, height / 2);
}

function keyPressed() {
   if (key === 'x') {
      if (screen === 0) {
         screen = 1;
         music.loop();
      }
   }
}

function mousePressed() {
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

   let doorDistance = dist(mouseX, mouseY, doorX, doorY);
   if (keyCollected && doorDistance < 50) {
      screen = 2;
      mainX = 308;
      mainY = 700;
   }

   // Handle dungeon door click
   let dungeonDoorDistance = dist(mouseX, mouseY, dungeondoorX, dungeondoorY);
   if (dungeonDoorDistance < 50) {
      screen = 3;
   }
}

function windowResized() {
   resizeCanvas(windowWidth, windowHeight);
}
