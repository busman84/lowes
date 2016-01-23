// Create the canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

// Plank image
var counter = 1;
var plankReady = false;
var plankImage = new Image();
plankImage.onload = function () {
	plankReady = true;
};
plankImage.src = "images/wood_plank.png";

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
heroImage.src = "images/wood_plank.png";

// Monster image
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = "images/wood_plank.png";

// Game objects
var hero = {
	speed: 256 // movement in pixels per second
};
var monster = {
	speed: 256
};
var monstersCaught = 0;

var wood_plank = {
	speed: 256,
	selected: false
};

var click_coordinates = {};

// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

// Reset the game when the player catches a monster
var reset = function () {
	hero.x = canvas.width / 2;
	hero.y = canvas.height / 2;

	// Throw the monster somewhere on the screen randomly
	monster.x = 32 + (Math.random() * (canvas.width - 64));
	monster.y = 32 + (Math.random() * (canvas.height - 64));
};

var generateWoodPlank = function () {
	counter += 1;
	wood_plank.x = 32 + (Math.random() * (canvas.width - 64));
	wood_plank.y = 32 + (Math.random() * (canvas.height - 64));
	if (plankReady){
		ctx.drawImage(plankImage, 10, 10);
	}
	else {
		alert("Not ready");
	}
}


var designateObject = function (object, clicked_object) {
	object = clicked_object;
	return clicked_object;
}

// Update game objects
var update = function (modifier, object) {
	if (38 in keysDown) { // Player holding up
		object.y -= object.speed * modifier;
	}
	if (40 in keysDown) { // Player holding down
		object.y += object.speed * modifier;
	}
	if (37 in keysDown) { // Player holding left
		object.x -= object.speed * modifier;
	}
	if (39 in keysDown) { // Player holding right
		object.x += object.speed * modifier;
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
};

// The main game loop
var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000, monster);
	render();

	then = now;

	// Request to do this again ASAP
	requestAnimationFrame(main);
};

var getPosition = function (event) {
  x = event.x;
  y = event.y;

  var canvas = document.getElementById("canvas");

  x -= canvas.offsetLeft;
  y -= canvas.offsetTop;
  click_coordinates.x = x;
  click_coordinates.y = y;

  alert("x:" + x + " y:" + y);
  return click_coordinates;
}


// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();
reset();
main();

$('#more-wood').on('click', function(e) {
	e.preventDefault();
	console.log("MORE WOOD!!");
	generateWoodPlank();
});

	//$('#canvas').on('mousedown', getPosition, false);

canvas.addEventListener("mousedown", function(event) {
	getPosition(event);

});



