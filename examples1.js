
let furby

function preload(){
	furby = loadimage('furby.png')
}

function setup(){

	createCanvas(windowWidth, windowHeight)
	rectMode(CENTER)

}


function draw(){



	if(mouseIsPressed == true){
		background(250, 0, 0)

	}else{
		background(0, 0, 250)
	}

	textSize(40)
	text('Hello World!', 100, 200)

	if(keyIsPressed == true){
		fill(200, 200, 100)
		ellipse(windowWidth/2, windowHeight/2, 100, 100)
	}else{
		fill(100, 200, 100)
		rect(windowWidth/2, windowHeight/2, 100, 100)
	}



}