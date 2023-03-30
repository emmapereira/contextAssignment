//NUMBER 1
var s1 = function (sketch) {
  sketch.setup = function () {
    let canvas1 = sketch.createCanvas(320, 320);
    img = sketch.loadImage("pictures/scooter-jennifer-coolidge.jpeg");
    canvas1.parent("sketch-holder");
  };
  sketch.draw = function () {
    img.resize(320, 320);
    sketch.image(img, 0, 0);
    sketch.filter(sketch.POSTERIZE, 8);
    sketch.filter(sketch.BLUR, 1);
  };
};

// create a new instance of p5 and pass in the function for sketch 1
new p5(s1);

//NUMBER 2

var s2 = function (sketch) {
  sketch.setup = function () {
    let canvas2 = sketch.createCanvas(320, 320);
    img2 = sketch.loadImage("pictures/watcher.jpeg");
    canvas2.parent("sketch-holder2");
  };
  sketch.draw = function () {
    img2.resize(320, 320);
    sketch.image(img2, 0, 0);
    sketch.filter(sketch.POSTERIZE, 6);
    sketch.filter(sketch.BLUR, 1);
  };
};

// create a new instance of p5 and pass in the function for sketch 1
new p5(s2);

//NUMBER 3

var s3 = function (sketch) {
  sketch.setup = function () {
    let canvas3 = sketch.createCanvas(320, 320);
    img3 = sketch.loadImage("pictures/The_last_of_us.jpg");
    canvas3.parent("sketch-holder3");
  };
  sketch.draw = function () {
    img3.resize(320, 320);
    sketch.image(img3, 0, 0);
    sketch.filter(sketch.POSTERIZE, 7);
    //sketch.filter(sketch.BLUR, 1);
  };
};

// create a new instance of p5 and pass in the function for sketch 1
new p5(s3);

//NUMBER 4

var s4 = function (sketch) {
  sketch.setup = function () {
    let canvas4 = sketch.createCanvas(320, 320);
    img4 = sketch.loadImage("pictures/hannah-montana-friends.jpeg");
    canvas4.parent("sketch-holder4");
  };
  sketch.draw = function () {
    img4.resize(320, 320);
    sketch.image(img4, 0, 0);
    sketch.filter(sketch.POSTERIZE, 5);
    sketch.filter(sketch.BLUR, 1);
  };
};

// create a new instance of p5 and pass in the function for sketch 1
new p5(s4);

//NUMBER 5

var s5 = function (sketch) {
  sketch.setup = function () {
    let canvas5 = sketch.createCanvas(320, 320);
    img5 = sketch.loadImage("pictures/Blind Guy McS.jpg");
    canvas5.parent("sketch-holder5");
  };
  sketch.draw = function () {
    img5.resize(320, 320);
    sketch.image(img5, 0, 0);
    sketch.filter(sketch.POSTERIZE, 4);
    sketch.filter(sketch.BLUR, 2);
  };
};

// create a new instance of p5 and pass in the function for sketch 1
new p5(s5);

//NUMBER 6

var s6 = function (sketch) {
  sketch.setup = function () {
    let canvas6 = sketch.createCanvas(320, 320);
    img6 = sketch.loadImage("pictures/Joey_eats.jpg");
    canvas6.parent("sketch-holder6");
  };
  sketch.draw = function () {
    img6.resize(320, 320);
    sketch.image(img6, 0, 0);
    sketch.filter(sketch.POSTERIZE, 3);
    sketch.filter(sketch.BLUR, 3);
  };
};

// create a new instance of p5 and pass in the function for sketch 1
new p5(s6);

//NUMBER 7

var s7 = function (sketch) {
  sketch.setup = function () {
    let canvas7 = sketch.createCanvas(320, 320);
    img7 = sketch.loadImage("pictures/Wednesday_dance.jpeg");
    canvas7.parent("sketch-holder7");
  };
  sketch.draw = function () {
    img7.resize(320, 320);
    sketch.image(img7, 0, 0);
    sketch.filter(sketch.POSTERIZE, 2);
    sketch.filter(sketch.BLUR, 5);
  };
};

// create a new instance of p5 and pass in the function for sketch 1
new p5(s7);

//NUMBER 8

var s8 = function (sketch) {
  sketch.setup = function () {
    let canvas8 = sketch.createCanvas(320, 320);
    img8 = sketch.loadImage("pictures/seinfield.jpeg");
    canvas8.parent("sketch-holder8");
  };
  sketch.draw = function () {
    img8.resize(320, 320);
    sketch.image(img8, 0, 0);
    sketch.filter(sketch.POSTERIZE, 2);
    sketch.filter(sketch.BLUR, 7);
  };
};

// create a new instance of p5 and pass in the function for sketch 1
new p5(s8);
