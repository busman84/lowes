// By Simon Sarris
// www.simonsarris.com
// sarris@acm.org
//
// Last update December 2011
//
// Free to use and distribute at will
// So long as you are nice to people, etc

// Constructor for Shape objects to hold data for all drawn objects.
// For now they will just be defined as rectangles.
function Background(p, x, y, w, h) {
    var background = new Image();
    background.src = "images/background.png"
    this.p = p || background
    this.x = x || 0
    this.y = y || 0
    this.w = w || 10
    this.h = h || 10

}
Background.prototype.draw = function(ctx) {
        var img = document.createElement("img");
        img.src = "images/background.png";
        ctx.drawImage(img, this.x, this.y, this.w, this.h);
    }
    //Determine if a point is inside hero's bounds
Background.prototype.contains = function(mx, my) {
    // All we have to do is make sure the Mouse X,Y fall in the area between
    // the shape's X and (X + Width) and its Y and (Y + Height)
    return (this.x <= mx) && (this.x + this.w >= mx) &&
        (this.y <= my) && (this.y + this.h >= my);
}


function Picnic(p, x, y, w, h) {
    var picnic = new Image();
    picnic.src = "images/deck2.png"
    this.p = p || picnic
    this.x = x || 0
    this.y = y || 0
    this.w = w || 10
    this.h = h || 10

}
//draws hero in given context
Picnic.prototype.draw = function(ctx) {
        var img = document.createElement("img");
        img.src = "images/picnictable2.png";
        ctx.drawImage(img, this.x, this.y, this.w, this.h);
    }
    //Determine if a point is inside hero's bounds
Picnic.prototype.contains = function(mx, my) {
    // All we have to do is make sure the Mouse X,Y fall in the area between
    // the shape's X and (X + Width) and its Y and (Y + Height)
    return (this.x <= mx) && (this.x + this.w >= mx) &&
        (this.y <= my) && (this.y + this.h >= my);
}



function Pinklc(p, x, y, w, h) {
    var pinklc = new Image();
    pinklc.src = "images/pinklawnchair.png"
    this.p = p || pinklc
    this.x = x || 0
    this.y = y || 0
    this.w = w || 10
    this.h = h || 10

}
Pinklc.prototype.draw = function(ctx) {
        var img = document.createElement("img");
        img.src = "images/pinklawnchair.png";
        ctx.drawImage(img, this.x, this.y, this.w, this.h);
    }
    //Determine if a point is inside hero's bounds
Pinklc.prototype.contains = function(mx, my) {
    // All we have to do is make sure the Mouse X,Y fall in the area between
    // the shape's X and (X + Width) and its Y and (Y + Height)
    return (this.x <= mx) && (this.x + this.w >= mx) &&
        (this.y <= my) && (this.y + this.h >= my);
}

function Yellowlc(p, x, y, w, h) {
    var yellowlc = new Image();
    yellowlc.src = "images/yellowlawnchairL.png"
    this.p = p || yellowlc
    this.x = x || 0
    this.y = y || 0
    this.w = w || 10
    this.h = h || 10

}
Yellowlc.prototype.draw = function(ctx) {
        var img = document.createElement("img");
        img.src = "images/yellowlawnchairL.png";
        ctx.drawImage(img, this.x, this.y, this.w, this.h);
    }
    //Determine if a point is inside hero's bounds
Yellowlc.prototype.contains = function(mx, my) {
    // All we have to do is make sure the Mouse X,Y fall in the area between
    // the shape's X and (X + Width) and its Y and (Y + Height)
    return (this.x <= mx) && (this.x + this.w >= mx) &&
        (this.y <= my) && (this.y + this.h >= my);
}


function Grill(p, x, y, w, h) {
    var grill = new Image();
    grill.src = "images/gasgrill.png"
    this.p = p || grill
    this.x = x || 0
    this.y = y || 0
    this.w = w || 10
    this.h = h || 10

}
Grill.prototype.draw = function(ctx) {
        var img = document.createElement("img");
        img.src = "images/gasgrill.png";
        ctx.drawImage(img, this.x, this.y, this.w, this.h);
    }
    //Determine if a point is inside hero's bounds
Grill.prototype.contains = function(mx, my) {
    // All we have to do is make sure the Mouse X,Y fall in the area between
    // the shape's X and (X + Width) and its Y and (Y + Height)
    return (this.x <= mx) && (this.x + this.w >= mx) &&
        (this.y <= my) && (this.y + this.h >= my);
}

function Hero(p, x, y, w, h) {
    var heroPic = new Image();
    heroPic.src = "images/brownwood.png"
    this.p = p || heroPic
    this.x = x || 0
    this.y = y || 0
    this.w = w || 10
    this.h = h || 10

}
//draws hero in given context
Hero.prototype.draw = function(ctx) {
        var img = document.createElement("img");
        img.src = "images/brownwood.png";
        ctx.drawImage(img, this.x, this.y, this.w, this.h);
    }
    //Determine if a point is inside hero's bounds
Hero.prototype.contains = function(mx, my) {
    // All we have to do is make sure the Mouse X,Y fall in the area between
    // the shape's X and (X + Width) and its Y and (Y + Height)
    return (this.x <= mx) && (this.x + this.w >= mx) &&
        (this.y <= my) && (this.y + this.h >= my);
}
function White(p, x, y, w, h) {
    var heroPic = new Image();
    heroPic.src = "images/white.png"
    this.p = p || heroPic
    this.x = x || 0
    this.y = y || 0
    this.w = w || 10
    this.h = h || 10

}
//draws hero in given context
White.prototype.draw = function(ctx) {
        var img = document.createElement("img");
        img.src = "images/white.png";
        ctx.drawImage(img, this.x, this.y, this.w, this.h);
    }
    //Determine if a point is inside hero's bounds
White.prototype.contains = function(mx, my) {
    // All we have to do is make sure the Mouse X,Y fall in the area between
    // the shape's X and (X + Width) and its Y and (Y + Height)
    return (this.x <= mx) && (this.x + this.w >= mx) &&
        (this.y <= my) && (this.y + this.h >= my);
}
function Light(p, x, y, w, h) {
    var heroPic = new Image();
    heroPic.src = "images/lightbrown.png"
    this.p = p || heroPic
    this.x = x || 0
    this.y = y || 0
    this.w = w || 10
    this.h = h || 10

}
//draws hero in given context
Light.prototype.draw = function(ctx) {
        var img = document.createElement("img");
        img.src = "images/lightbrown.png";
        ctx.drawImage(img, this.x, this.y, this.w, this.h);
    }
    //Determine if a point is inside hero's bounds
Light.prototype.contains = function(mx, my) {
    // All we have to do is make sure the Mouse X,Y fall in the area between
    // the shape's X and (X + Width) and its Y and (Y + Height)
    return (this.x <= mx) && (this.x + this.w >= mx) &&
        (this.y <= my) && (this.y + this.h >= my);
}

function Shape(x, y, w, h, fill) {
    // This is a very simple and unsafe constructor. All we're doing is checking if the values exist.
    // "x || 0" just means "if there is a value for x, use that. Otherwise use 0."
    // But we aren't checking anything else! We could put "Lalala" for the value of x 
    this.x = x || 0;
    this.y = y || 0;
    this.w = w || 1;
    this.h = h || 1;
    this.fill = fill || '#AAAAAA';
}
// Draws this shape to a given context
Shape.prototype.draw = function(ctx) {
    ctx.fillStyle = this.fill;
    ctx.fillRect(this.x, this.y, this.w, this.h);
}

// Determine if a point is inside the shape's bounds
Shape.prototype.contains = function(mx, my) {
    // All we have to do is make sure the Mouse X,Y fall in the area between
    // the shape's X and (X + Width) and its Y and (Y + Height)
    return (this.x <= mx) && (this.x + this.w >= mx) &&
        (this.y <= my) && (this.y + this.h >= my);
}

function CanvasState(canvas) {
    // **** First some setup! ****

    this.canvas = canvas;
    this.width = canvas.width;
    this.height = canvas.height;
    this.ctx = canvas.getContext('2d');
    // This complicates things a little but but fixes mouse co-ordinate problems
    // when there's a border or padding. See getMouse for more detail
    var stylePaddingLeft, stylePaddingTop, styleBorderLeft, styleBorderTop;
    if (document.defaultView && document.defaultView.getComputedStyle) {
        this.stylePaddingLeft = parseInt(document.defaultView.getComputedStyle(canvas, null)['paddingLeft'], 10) || 0;
        this.stylePaddingTop = parseInt(document.defaultView.getComputedStyle(canvas, null)['paddingTop'], 10) || 0;
        this.styleBorderLeft = parseInt(document.defaultView.getComputedStyle(canvas, null)['borderLeftWidth'], 10) || 0;
        this.styleBorderTop = parseInt(document.defaultView.getComputedStyle(canvas, null)['borderTopWidth'], 10) || 0;
    }
    // Some pages have fixed-position bars (like the stumbleupon bar) at the top or left of the page
    // They will mess up mouse coordinates and this fixes that
    var html = document.body.parentNode;
    this.htmlTop = html.offsetTop;
    this.htmlLeft = html.offsetLeft;

    // **** Keep track of state! ****

    this.valid = false; // when set to false, the canvas will redraw everything
    this.shapes = []; // the collection of things to be drawn
    this.heros = []; // the collection of heroes to be drawn
    this.whites = [];
    this.lights = [];
    this.picnics = [];
    this.grills = [];
    this.backgrounds = [];
    this.pinklcs = [];
    this.yellowlcs = [];
    this.dragging = false; // Keep track of when we are dragging
    // the current selected object. In the future we could turn this into an array for multiple selection
    this.selection = null;
    this.dragoffx = 0; // See mousedown and mousemove events for explanation
    this.dragoffy = 0;

    // **** Then events! ****

    // This is an example of a closure!
    // Right here "this" means the CanvasState. But we are making events on the Canvas itself,
    // and when the events are fired on the canvas the variable "this" is going to mean the canvas!
    // Since we still want to use this particular CanvasState in the events we have to save a reference to it.
    // This is our reference!
    var myState = this;

    //fixes a problem where double clicking causes text to get selected on the canvas
    canvas.addEventListener('selectstart', function(e) {
        e.preventDefault();
        return false;
    }, false);
    // Up, down, and move are for dragging
    canvas.addEventListener('mousedown', function(e) {
        var mouse = myState.getMouse(e);
        var mx = mouse.x;
        var my = mouse.y;
        var shapes = myState.shapes;
        var heros = myState.heros;
        var picnics = myState.picnics;
        var backgrounds = myState.backgrounds;
        var grills = myState.grills;
        var pinklcs = myState.pinklcs;
        var yellowlcs = myState.yellowlcs;
        var whites = myState.whites;
        var lights = myState.lights;
        var l = shapes.length;
        var hl = heros.length;
        var pl = picnics.length;
        var bl = backgrounds.length;
        var gl = grills.length;
        var pinkl = pinklcs.length;
        var yl = yellowlcs.length;
        var wl = whites.length;
        var ll = lights.length;
        for (var i = hl - 1; i >= 0; i--) {
            if (heros[i].contains(mx, my)) {
                var mySel = heros[i];
                // Keep track of where in the object we clicked
                // so we can move it smoothly (see mousemove)
                myState.dragoffx = mx - mySel.x;
                myState.dragoffy = my - mySel.y;
                myState.dragging = true;
                myState.selection = mySel;
                myState.valid = false;
                return;
            }
        }
        for (var i = ll - 1; i >= 0; i--) {
            if (lights[i].contains(mx, my)) {
                var mySel = lights[i];
                // Keep track of where in the object we clicked
                // so we can move it smoothly (see mousemove)
                myState.dragoffx = mx - mySel.x;
                myState.dragoffy = my - mySel.y;
                myState.dragging = true;
                myState.selection = mySel;
                myState.valid = false;
                return;
            }
        }
        for (var i = wl - 1; i >= 0; i--) {
            if (whites[i].contains(mx, my)) {
                var mySel = whites[i];
                // Keep track of where in the object we clicked
                // so we can move it smoothly (see mousemove)
                myState.dragoffx = mx - mySel.x;
                myState.dragoffy = my - mySel.y;
                myState.dragging = true;
                myState.selection = mySel;
                myState.valid = false;
                return;
            }
        }
        for (var i = pl - 1; i >= 0; i--) {
            if (picnics[i].contains(mx, my)) {
                var mySel = picnics[i];
                // Keep track of where in the object we clicked
                // so we can move it smoothly (see mousemove)
                myState.dragoffx = mx - mySel.x;
                myState.dragoffy = my - mySel.y;
                myState.dragging = true;
                myState.selection = mySel;
                myState.valid = false;
                return;
            }
        }
        for (var i = gl - 1; i >= 0; i--) {
            if (grills[i].contains(mx, my)) {
                var mySel = grills[i];
                // Keep track of where in the object we clicked
                // so we can move it smoothly (see mousemove)
                myState.dragoffx = mx - mySel.x;
                myState.dragoffy = my - mySel.y;
                myState.dragging = true;
                myState.selection = mySel;
                myState.valid = false;
                return;
            }
        }
        for (var i = pinkl - 1; i >= 0; i--) {
            if (pinklcs[i].contains(mx, my)) {
                var mySel = pinklcs[i];
                // Keep track of where in the object we clicked
                // so we can move it smoothly (see mousemove)
                myState.dragoffx = mx - mySel.x;
                myState.dragoffy = my - mySel.y;
                myState.dragging = true;
                myState.selection = mySel;
                myState.valid = false;
                return;
            }
        }
        for (var i = yl - 1; i >= 0; i--) {
            if (yellowlcs[i].contains(mx, my)) {
                var mySel = yellowlcs[i];
                // Keep track of where in the object we clicked
                // so we can move it smoothly (see mousemove)
                myState.dragoffx = mx - mySel.x;
                myState.dragoffy = my - mySel.y;
                myState.dragging = true;
                myState.selection = mySel;
                myState.valid = false;
                return;
            }
        }
        for (var i = bl - 1; i >= 0; i--) {
            if (backgrounds[i].contains(mx, my)) {
                var mySel = backgrounds[i];
                // Keep track of where in the object we clicked
                // so we can move it smoothly (see mousemove)
                myState.dragoffx = mx - mySel.x;
                myState.dragoffy = my - mySel.y;
                myState.dragging = false;
                myState.selection = mySel;
                myState.valid = false;
                return;
            }
        }
        for (var i = l - 1; i >= 0; i--) {
            if (shapes[i].contains(mx, my)) {
                var mySel = shapes[i];
                // Keep track of where in the object we clicked
                // so we can move it smoothly (see mousemove)
                myState.dragoffx = mx - mySel.x;
                myState.dragoffy = my - mySel.y;
                myState.dragging = true;
                myState.selection = mySel;
                myState.valid = false;
                return;
            }
        }
        // havent returned means we have failed to select anything.
        // If there was an object selected, we deselect it
        if (myState.selection) {
            myState.selection = null;
            myState.valid = false; // Need to clear the old selection border
        }
    }, true);
    canvas.addEventListener('mousemove', function(e) {
        if (myState.dragging) {
            var mouse = myState.getMouse(e);
            // We don't want to drag the object by its top-left corner, we want to drag it
            // from where we clicked. Thats why we saved the offset and use it here
            myState.selection.x = mouse.x - myState.dragoffx;
            myState.selection.y = mouse.y - myState.dragoffy;
            myState.valid = false; // Something's dragging so we must redraw
        }
    }, true);
    canvas.addEventListener('mouseup', function(e) {
        myState.dragging = false;
    }, true);
    // double click for making new shapes
    // canvas.addEventListener('dblclick', function(e) {
    //     var heroPic = new Image();
    //     heroPic.src = "images/deck2.png"
    //     var mouse = myState.getMouse(e);
    //     myState.addHero(new Hero(heroPic, mouse.x - 10, mouse.y - 10, heroPic.width, heroPic.height));
    // }, true);

    // **** Options! ****

    this.selectionColor = '#CC0000';
    this.selectionWidth = 2;
    this.interval = 30;
    setInterval(function() {
        myState.draw();
    }, myState.interval);
}

CanvasState.prototype.addShape = function(shape) {
    this.shapes.push(shape);
    this.valid = false;
}

CanvasState.prototype.addHero = function(hero) {
    this.heros.push(hero);
    this.valid = false;
}
CanvasState.prototype.addWhite = function(white) {
    this.whites.push(white);
    this.valid = false;
}
CanvasState.prototype.addLight = function(light) {
    this.lights.push(light);
    this.valid = false;
}
CanvasState.prototype.addPicnic = function(picnic) {
    this.picnics.push(picnic);
    this.valid = false;
}
CanvasState.prototype.addGrill = function(grill) {
    this.grills.push(grill);
    this.valid = false;
}
CanvasState.prototype.addPinklc = function(pinklc) {
    this.pinklcs.push(pinklc);
    this.valid = false;
}
CanvasState.prototype.addYellowlc = function(yellowlc) {
    this.yellowlcs.push(yellowlc);
    this.valid = false;
}
CanvasState.prototype.addBackground = function(background) {
    this.backgrounds.push(background);
    this.valid = false;
}
CanvasState.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.width, this.height);
}

// While draw is called as often as the INTERVAL variable demands,
// It only ever does something if the canvas gets invalidated by our code
CanvasState.prototype.draw = function() {
    // if our state is invalid, redraw and validate!
    if (!this.valid) {
        var ctx = this.ctx;
        var shapes = this.shapes;
        var heros = this.heros;
        var lights = this.lights;
        var whites = this.whites;
        var picnics = this.picnics;
        var grills = this.grills;
        var backgrounds = this.backgrounds;
        var pinklcs = this.pinklcs;
        var yellowlcs = this.yellowlcs;
        this.clear();

        // ** Add stuff you want drawn in the background all the time here **

        // draw all shapes
        //debugger
        var bl = backgrounds.length;
        for (var k = 0; k < bl; k++) {
            var background = backgrounds[k];
            // We can skip the drawing of elements that have moved off the screen:
            if (background.x > this.width || background.y > this.height ||
                background.x + background.w < 0 || background.y + background.h < 0) continue;
            backgrounds[k].draw(ctx);
        }
        var l = shapes.length;
        for (var i = 0; i < l; i++) {
            var shape = shapes[i];
            // We can skip the drawing of elements that have moved off the screen:
            if (shape.x > this.width || shape.y > this.height ||
                shape.x + shape.w < 0 || shape.y + shape.h < 0) continue;
            shapes[i].draw(ctx);
        }
        //debugger
        var hl = heros.length;
        for (var j = 0; j < hl; j++) {
            var hero = heros[j];
            // We can skip the drawing of elements that have moved off the screen:
            if (hero.x > this.width || hero.y > this.height ||
                hero.x + hero.w < 0 || hero.y + hero.h < 0) continue;
            heros[j].draw(ctx);
        }
        var wl = whites.length;
        for (var j = 0; j < wl; j++) {
            var white = whites[j];
            // We can skip the drawing of elements that have moved off the screen:
            if (white.x > this.width || white.y > this.height ||
                white.x + white.w < 0 || white.y + white.h < 0) continue;
            whites[j].draw(ctx);
        }
        var ll = lights.length;
        for (var j = 0; j < ll; j++) {
            var light = lights[j];
            // We can skip the drawing of elements that have moved off the screen:
            if (light.x > this.width || light.y > this.height ||
                light.x + light.w < 0 || light.y + light.h < 0) continue;
            lights[j].draw(ctx);
        }
        var pl = picnics.length;
        for (var k = 0; k < pl; k++) {
            var picnic = picnics[k];
            // We can skip the drawing of elements that have moved off the screen:
            if (picnic.x > this.width || picnic.y > this.height ||
                picnic.x + picnic.w < 0 || picnic.y + picnic.h < 0) continue;
            picnics[k].draw(ctx);
        }
        var gl = grills.length;
        for (var k = 0; k < gl; k++) {
            var grill = grills[k];
            // We can skip the drawing of elements that have moved off the screen:
            if (grill.x > this.width || grill.y > this.height ||
                grill.x + grill.w < 0 || grill.y + grill.h < 0) continue;
            grills[k].draw(ctx);
        }
        var pinkl = pinklcs.length;
        for (var k = 0; k < pinkl; k++) {
            var pinklc = pinklcs[k];
            // We can skip the drawing of elements that have moved off the screen:
            if (pinklc.x > this.width || pinklc.y > this.height ||
                pinklc.x + pinklc.w < 0 || pinklc.y + pinklc.h < 0) continue;
            pinklcs[k].draw(ctx);
        }
        var yl = yellowlcs.length;
        for (var k = 0; k < yl; k++) {
            var yellowlc = yellowlcs[k];
            // We can skip the drawing of elements that have moved off the screen:
            if (yellowlc.x > this.width || yellowlc.y > this.height ||
                yellowlc.x + yellowlc.w < 0 || yellowlc.y + yellowlc.h < 0) continue;
            yellowlcs[k].draw(ctx);
        }

        // draw selection
        // right now this is just a stroke along the edge of the selected Shape
        if (this.selection != null) {
            ctx.strokeStyle = this.selectionColor;
            ctx.lineWidth = this.selectionWidth;
            var mySel = this.selection;
            ctx.strokeRect(mySel.x, mySel.y, mySel.w, mySel.h);
        }

        // ** Add stuff you want drawn on top all the time here **

        this.valid = true;
    }
}


// Creates an object with x and y defined, set to the mouse position relative to the state's canvas
// If you wanna be super-correct this can be tricky, we have to worry about padding and borders
CanvasState.prototype.getMouse = function(e) {
    var element = this.canvas,
        offsetX = 0,
        offsetY = 0,
        mx, my;

    // Compute the total offset
    if (element.offsetParent !== undefined) {
        do {
            offsetX += element.offsetLeft;
            offsetY += element.offsetTop;
        } while ((element = element.offsetParent));
    }

    // Add padding and border style widths to offset
    // Also add the <html> offsets in case there's a position:fixed bar
    offsetX += this.stylePaddingLeft + this.styleBorderLeft + this.htmlLeft;
    offsetY += this.stylePaddingTop + this.styleBorderTop + this.htmlTop;

    mx = e.pageX - offsetX;
    my = e.pageY - offsetY;

    // We return a simple javascript object (a hash) with x and y defined
    return {
        x: mx,
        y: my
    };
}

// If you dont want to use <body onLoad='init()'>
// You could uncomment this init() reference and place the script reference inside the body tag
//init();

function init() {
    var s = new CanvasState(document.getElementById('canvas1'));
    // s.addShape(new Shape(40, 40, 50, 50)); // The default is gray
    // s.addShape(new Shape(60, 140, 40, 60, 'lightskyblue'));
    var hero2Pic = new Image();
    hero2Pic.src = "images/gasgrill.png"
    var hero3Pic = new Image();
    hero3Pic.src = "images/deck2.png"
    // debugger
    // s.addHero(new Hero(hero2Pic, 20, 20, 50, 50));
    s.addBackground(new Background(hero3Pic, 0, 0, 512, 487));
    $("#grill").click(function() {
        s.addGrill(new Grill(hero3Pic, 30, 30, 50, 50));
    });
    $("#picnic").click(function() {
        s.addPicnic(new Picnic(hero3Pic, 30, 30, 50, 30));
    });
    $("#pinklc").click(function() {
        s.addPinklc(new Pinklc(hero3Pic, 30, 30, 50, 50));
    });
    $("#yellowlc").click(function() {
        s.addYellowlc(new Yellowlc(hero3Pic, 30, 30, 50, 50));
    });
    $("#wood").click(function() {
        s.addHero(new Hero(hero3Pic, 30, 30, 100, 100));
    });
    $("#w_wood").click(function() {
        s.addWhite(new White(hero3Pic, 30, 30, 50, 10));
    });
    $("#l_wood").click(function() {
        s.addLight(new Light(hero3Pic, 30, 30, 20, 40));
    });
}

init();

// $("#grill").click(function(){

// // alert("clicked")
// s.addHero(new Hero(hero3Pic, 400, 10, 50, 50));
// });
//   // var ctx = document.querySelector("canvas").getContext("2d");
//   // var img = document.createElement("img");
//   // img.src = "images/gasgrill.png";
//   // ctx.drawImage(img, 25, 25,25, 25);
//   heroPic = "images/gasgrill.png"
//   var grill = new Hero(heroPic, 10, 10, 50, 50)
//   grill.draw

// })
// $("#picnic").click(function(){
//   //alert("clicked")
//   var ctx = document.querySelector("canvas").getContext("2d");
//   var img = document.createElement("img");
//   img.src = "images/picnictable2.png";
//   ctx.drawImage(img, 25, 25,25, 25);
// })
// $("#pinklc").click(function(){
//   //alert("clicked")
//   var ctx = document.querySelector("canvas").getContext("2d");
//   var img = document.createElement("img");
//   img.src = "images/pinklawnchair.png";
//   ctx.drawImage(img, 25, 25,25, 25);
// })
// $("#yellowlc").click(function(){
//   //alert("clicked")
//   var ctx = document.querySelector("canvas").getContext("2d");
//   var img = document.createElement("img");
//   img.src = "images/yellowlawnchair.png";
//   ctx.drawImage(img, 25, 25,25, 25);
// })
