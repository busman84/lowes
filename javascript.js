var x = 75;
var y = 50;
var WIDTH = 400;
var HEIGHT = 300;
var dragok = false;

// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "images/background.png";

// Hero image
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = "images/hero.png";

// Monster image
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = "images/monster.png";

// Game objects
var hero = {
	speed: 256 // movement in pixels per second
};
var monster = {};
var monstersCaught = 0;

function rect(x,y,w,h) {
 ctx.beginPath();
 ctx.rect(x,y,w,h);
 ctx.closePath();
 ctx.fill();
};

function draw() {
 // clear();
 ctx.fillStyle = "#FAF7F8";
 rect(0,0,WIDTH,HEIGHT);
 ctx.drawImage(bgImage, 0, 0);
 ctx.fillStyle = "#444444";
 rect(x - 15, y - 15, 30, 30);
};



// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

// Handle mouse click
function myMove(e){
 if (dragok){
  x = e.pageX - canvas.offsetLeft;
  y = e.pageY - canvas.offsetTop;
 }
};

function myDown(e){
 if (e.pageX < x + 15 + canvas.offsetLeft && e.pageX > x - 15 +
 canvas.offsetLeft && e.pageY < y + 15 + canvas.offsetTop &&
 e.pageY > y -15 + canvas.offsetTop){
  x = e.pageX - canvas.offsetLeft;
  y = e.pageY - canvas.offsetTop;
  dragok = true;
  canvas.onmousemove = myMove;
 }
};

function myUp(){
 dragok = false;
 canvas.onmousemove = null;
};

// Reset the game when the player catches a monster
var reset = function () {
	hero.x = canvas.width / 2;
	hero.y = canvas.height / 2;

	// Throw the monster somewhere on the screen randomly
	monster.x = 32 + (Math.random() * (canvas.width - 64));
	monster.y = 32 + (Math.random() * (canvas.height - 64));
};

// Update game objects
var update = function (modifier) {
	if (38 in keysDown) { // Player holding up
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) { // Player holding down
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) { // Player holding left
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) { // Player holding right
		hero.x += hero.speed * modifier;
	}

	// Are they touching?
	// if (
	// 	hero.x <= (monster.x + 32)
	// 	&& monster.x <= (hero.x + 32)
	// 	&& hero.y <= (monster.y + 32)
	// 	&& monster.y <= (hero.y + 32)
	// ) {
	// 	++monstersCaught;
	// 	reset();
	// }
};

// Draw everything
var render = function () {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}

	if (monsterReady) {
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}

	// Score
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Goblins caught: " + monstersCaught, 32, 32);
	return setInterval(draw, 10);
	
};

// The main game loop
var main = function () {
	var now = Date.now();
	var delta = now - then;

	//update(delta / 1000);
	render();

	then = now;

	// Request to do this again ASAP
	//requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
// var w = window;
// requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();
reset();
main();
canvas.onmousedown = myDown;
canvas.onmouseup = myUp;

// var canvas;
// var ctx;
// var x = 75;
// var y = 50;
// var WIDTH = 400;
// var HEIGHT = 300;
// var dragok = false;

// function rect(x,y,w,h) {
//  ctx.beginPath();
//  ctx.rect(x,y,w,h);
//  ctx.closePath();
//  ctx.fill();
// }

// function clear() {
//  ctx.clearRect(0, 0, WIDTH, HEIGHT);
// }

// function init() {
//  canvas = document.getElementById("canvas");
//  ctx = canvas.getContext("2d");
//  return setInterval(draw, 10);
// }

// function draw() {
//  clear();
//  ctx.fillStyle = "#FAF7F8";
//  rect(0,0,WIDTH,HEIGHT);
//  ctx.fillStyle = "#444444";
//  rect(x - 15, y - 15, 30, 30);
// }

// function myMove(e){
//  if (dragok){
//   x = e.pageX - canvas.offsetLeft;
//   y = e.pageY - canvas.offsetTop;
//  }
// }

// function myDown(e){
//  if (e.pageX < x + 15 + canvas.offsetLeft && e.pageX > x - 15 +
//  canvas.offsetLeft && e.pageY < y + 15 + canvas.offsetTop &&
//  e.pageY > y -15 + canvas.offsetTop){
//   x = e.pageX - canvas.offsetLeft;
//   y = e.pageY - canvas.offsetTop;
//   dragok = true;
//   canvas.onmousemove = myMove;
//  }
// }

// function myUp(){
//  dragok = false;
//  canvas.onmousemove = null;
// }

// init();
// canvas.onmousedown = myDown;
// canvas.onmouseup = myUp;