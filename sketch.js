// Your code will go here

// Open up your console - if everything loaded properly you should see the version number
// corresponding to the latest version of ml5 printed to the console and in the p5.js canvas.

let player;
let bgImage;
let playerImage;
let obstacleImage;
let obstacles = [];
let wordClassifier;

function preload() {
  bgImage = loadImage("55.jpg");
  playerImage = loadImage("11.jpg");
  obstacleImage = loadImage("00.png");
  let options = {
    probabillityThreshold: 0.85,
  };
  worldClassifier = ml5.soundClassifier("SpeechCommands18w", options);
}

function setup() {
  createCanvas(800, 400);
  player = new Player();
}

function keyPressed() {
  if (key === " ") {
    player.jump();
  }
}

function draw() {
  // in 1% of frames, add new obstacle
  if (random(1) < 0.004) {
    obstacles.push(new obstacle());
  }

  background(bgImage);

  for (let obs of obstacles) {
    obs.show();
    obs.moveBy();
    if (player.collided(obs) === true) {
      console.log("Game Over!");
      noLoop();
    }
  }
  player.show();
  player.move();
}
