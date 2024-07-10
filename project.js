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

// Variable to track mute/unmute state
let musicMuted = false;

function preload() {
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

function setup() {
    createCanvas(windowWidth, windowHeight);

    // Position main character initially
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

    textAlign(CENTER, CENTER);
    text('click "x" to start..', width / 2, height / 2);
    text('options', width / 2, 430);
    text('???', width / 2, 480);
}

function screen2() {
    background(0);

    image(bedroom, 100, 70, 1000, 650);
    image(main, mainX, mainY, 80, 80);

    // Movement controls for main character
    if (keyIsDown(LEFT_ARROW) && mainX > 140) {
        mainX -= 2.5;
    }
    if (keyIsDown(RIGHT_ARROW) && mainX < 1000) {
        mainX += 2.5;
    }
    if (keyIsDown(UP_ARROW) && mainY > 210) {
        mainY -= 2.5;
    }
    if (keyIsDown(DOWN_ARROW) && mainY < 610) {
        mainY += 2.5;
    }
}

function keyPressed() {
    if (key === 'x') {
        if (screen === 0) {
            screen = 1;
            // Start playing the music.mp3 file
            if (!music.isPlaying()) {
                music.loop();
            }
        }
    }
}

function mousePressed() {
    // Check other mousePressed logic for your existing code
    if (mouseX > 660 && mouseX < 660 + textWidth('options') + 20 &&
        mouseY > 450 - 40 && mouseY < 450) {
        optionsClicked = true;
    }

    if (optionsClicked && mouseX > 20 && mouseX < 140 &&
        mouseY > 20 && mouseY < 60) {
        optionsClicked = false; // Reset optionsClicked to go back
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

