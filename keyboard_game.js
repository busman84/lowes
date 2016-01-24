// Create the canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 550;
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
heroImage.src = "images/hero.png";

// Monster image
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = "images/monster.png";

// Deck Chair image
var deckChairImage = new Image();
deckChairImage.src = "images/pinklawnchair.png";

// Grill Image
var grillReady = false;
var grillImage = new Image();
grillImage.onload = function () {
	grillReady = true;
}
grillImage.src = "images/gasgrill.png";

// Bar Image
var barImage = new Image();
barImage.src = "images/dabar.png";

// Object Prototypes
function bar() {
	this.image = barImage;
	this.speed = 256;
	this.x = canvas.width / 2;
	this.y = canvas.height / 2;
	this.selected = false;
};

function wood_piece() {
	this.image = plankImage;
	this.speed = 256;
	this.x = canvas.width / 2;
	this.y = canvas.height / 2;
	this.selected = false;
};

function deck_chair() {
	this.image = deckChairImage;
	this.speed = 256;
	this.x = canvas.width / 2;
	this.y = canvas.height / 2;
	this.selected = false;
};

function grill() {
	this.image = grillImage;
	this.speed = 256;
	this.x = canvas.width / 2;
	this.y = canvas.height / 2;
	this.selected = false;
};
function monster_maker() {
	this.image = monsterImage;
	this.speed = 256;
	this.x = canvas.width / 2;
	this.y = canvas.height / 2;
	this.selected = false;
};
// Game objects

var all_objects = [];
var wood_pile = [];
var monster_den = [];
var stacked_chairs = [];
var many_grills = [];
var many_bars = [];

var hero = {
	speed: 256, // movement in pixels per second
	image: heroImage,
	selected: true,
	x: 100,
	y: 300
};
	
var monster = {
	speed: 256,
	image: monsterImage,
	selected: false,
	x: 200,
	y: 150
};
var monstersCaught = 0;

var wood_plank = {
	speed: 256,
	image: plankImage,
	selected: false
};

// all_objects.push(hero);
// all_objects.push(monster);

var wood_1 = new wood_piece();
var wood_2 = new wood_piece();
var wood_3 = new wood_piece();
var wood_4 = new wood_piece();
var wood_5 = new wood_piece();
var wood_6 = new wood_piece();
var wood_7 = new wood_piece();
var wood_8 = new wood_piece();
wood_pile.push(wood_1, wood_2, wood_3, wood_4, wood_5, wood_6, wood_7, wood_8);

var monster_1 = new monster_maker();
var monster_2 = new monster_maker();
var monster_3 = new monster_maker();
var monster_4 = new monster_maker();
var monster_5 = new monster_maker();
var monster_6 = new monster_maker();	
monster_den.push(monster_1, monster_2, monster_3, monster_4, monster_5, monster_6);

var chair_1 = new deck_chair();
var chair_2 = new deck_chair();
var chair_3 = new deck_chair();
var chair_4 = new deck_chair();
var chair_5 = new deck_chair();
stacked_chairs.push(chair_1, chair_2, chair_3, chair_4, chair_5);

var grill_1 = new grill();
var grill_2 = new grill();
many_grills.push(grill_1, grill_2);

var bar_1 = new bar();
var bar_2 = new bar();
many_bars.push(bar_1, bar_2);



// var click_coordinates = {};

// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

// Reset the game when the player catches a monster
// var reset = function () {
// 	hero.x = canvas.width / 2;
// 	hero.y = canvas.height / 2;

// 	// Throw the monster somewhere on the screen randomly
// 	monster.x = 32 + (Math.random() * (canvas.width - 64));
// 	monster.y = 32 + (Math.random() * (canvas.height - 64));
// };

var generateWoodPlank = function (all_objects, wood_pile) {
	var wood_index = wood_pile.length - 1;
	for(var n = 0; n < all_objects.length; n++) {
		if(all_objects[n]["selected"] == true) {
			all_objects[n]["selected"] = false;
		}
	}
	wood_pile[wood_index]["selected"] = true;
	all_objects.push(wood_pile[wood_index]);
	console.log(all_objects);
	wood_pile.pop();
	return all_objects;

}

var generateMonsters = function (all_objects, monster_den) {
	var monster_index = monster_den.length - 1;
	console.log(monster_index);
	for(var j = 0; j < all_objects.length; j++) {
		if(all_objects[j]["selected"] == true) {
			all_objects[j]["selected"] = false;
		}
	}
	monster_den[monster_index]["selected"] = true;
	all_objects.push(monster_den[monster_index]);
	console.log(all_objects);
	monster_den.pop();
	return all_objects;

};

var generateGrills = function (all_objects, many_grills) {
	var grill_index = many_grills.length - 1;
	console.log(grill_index);
	for(var g = 0; g < all_objects.length; g++) {
		if(all_objects[g]["selected"] == true) {
			all_objects[g]["selected"] = false;
		}
	}
	many_grills[grill_index]["selected"] = true;
	all_objects.push(many_grills[grill_index]);
	many_grills.pop();
	return all_objects;
}

var generateChairs = function (all_objects, stacked_chairs) {
	var chair_index = stacked_chairs.length - 1;
	console.log(chair_index);
	for(var g = 0; g < all_objects.length; g++) {
		if(all_objects[g]["selected"] == true) {
			all_objects[g]["selected"] = false;
		}
	}
	stacked_chairs[chair_index]["selected"] = true;
	all_objects.push(stacked_chairs[chair_index]);
	stacked_chairs.pop();
	return all_objects;
}

var generateBars = function (all_objects, many_bars) {
	var bar_index = many_bars.length - 1;
	for(var b = 0; b < all_objects.length; b++) {
		if(all_objects[b]["selected"] == true) {
			all_objects[b]["selected"] = false;
		}
	}
	many_bars[bar_index]["selected"] = true;
	all_objects.push(many_bars[bar_index]);
	many_bars.pop();
	return all_objects;
}


// var designateObject = function (all_objects, delta) {
// 	//var selected_object = monster;
// 	// for(var i=0; i < all_objects.length; i++) {
// 	// 	if (all_objects[i]["selected"] == true) {
// 	// 		selected_object = all_objects[i];
// 	// 		alert(selected_object);
// 	// 	}
// 	// 	else {
// 	// 		console.log("NOPE");
// 	// 	}
// 	// }
// 	update(delta / 1000, all_objects);
// };

// Update game objects
var update = function (modifier, all_objects) {
	for(k = 0; k < all_objects.length; k++) {
		if (all_objects[k]["selected"] == true) {
			var selected_object = all_objects[k];
			if (38 in keysDown) { // Player holding up
			selected_object.y -= selected_object.speed * modifier;
			}
			if (40 in keysDown) { // Player holding down
				selected_object.y += selected_object.speed * modifier;
			}
			if (37 in keysDown) { // Player holding left
				selected_object.x -= selected_object.speed * modifier;
			}
			if (39 in keysDown) { // Player holding right
				selected_object.x += selected_object.speed * modifier;
			}

		}

	}
};

// Allows for drawing different objects

var draw_images = function (all_objects) {
	for(i=0;i<all_objects.length;i++) {
		ctx.drawImage(all_objects[i]["image"],all_objects[i]["x"], all_objects[i]["y"]);
	}
};

// Draw everything
var render = function () {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
		draw_images(all_objects);
	}

	// Score
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("My New Deck", 40, 40);
};

// The main game loop
var main = function () {
	var now = Date.now();
	var delta = now - then;
	update(delta / 1000, all_objects);
	render();

	then = now;

	// Request to do this again ASAP
	requestAnimationFrame(main);
};


// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();
//reset();
main();

var wood_button = document.getElementById("more-wood");

wood_button.addEventListener('click', function(e) {
	e.preventDefault();
	generateWoodPlank(all_objects, wood_pile);
});

var monster_button = document.getElementById("more-monsters");
monster_button.addEventListener('click', function(e) {
	e.preventDefault();
	generateMonsters(all_objects, monster_den);
});

var grill_button = document.getElementById("more-grills");
grill_button.addEventListener('click', function(e) {
	e.preventDefault();
	generateGrills(all_objects, many_grills);
});

var chair_button = document.getElementById("more-chairs");
chair_button.addEventListener('click', function(e) {
	e.preventDefault();
	generateChairs(all_objects, stacked_chairs);
});

var bar_button = document.getElementById("more-bars");
bar_button.addEventListener('click', function(e) {
	e.preventDefault();
	generateBars(all_objects, many_bars);
});