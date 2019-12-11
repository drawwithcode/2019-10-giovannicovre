var bg, deathStar, alderaanTexture;

function preload() {
  //background
  bg = loadImage("assets/starwars-background.jpg");

  //obj
  deathStar = loadModel("assets/deathstar.obj", true);

  //texture
  aldeeranTexture = loadImage("assets/aldeeran-texture.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  frameRate(60);
  angleMode(DEGREES);
  textureWrap(CLAMP);
}

function draw() {
  //BACKGROUND
  push();
  translate(-width / 2, -height / 2);
  backgroundImage(bg);
  pop();

  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;

  var dsRotation = frameCount * 0.1;
  var dsX = frameCount * 0.5;

  ambientLight(50, 50, 50);
  pointLight(200, 200, 200, 0, 0, 750);
  if (locX < width / 4) {
    pointLight(0, 255, 0, locX, locY, 1500);
  } else {
    pointLight(255, 0, 0, locX, locY, 1500);
  }

  //DEATH STAR
  push();
  //transformations
  if (width / 2 - dsX > width / 6) {
    translate(width / 2 - dsX, 0, 0);
  } else {
    translate(width / 6, 0, 0);
  }
  rotateZ(180);
  if (dsRotation < 100) {
    rotateY(frameCount * 0.1);
  } else {
    rotateY(100);
  }
  scale(0.5);
  //appearance
  noStroke();
  ambientMaterial(150);
  model(deathStar);
  pop();

  //ALDEERAN
  push();
  //transformations
  translate(-windowWidth / 3, 0, 0);
  rotateY(frameCount * 0.1);
  //appearance
  noStroke();
  texture(aldeeranTexture);
  sphere(250);
  pop();

  if (width / 2 - dsX < width / 6 && dsRotation > 100) {
    var videoLink = createA("https://www.youtube.com/watch?v=5p0IP-FVG2I", "SEE MORE", "_blank");
    videoLink.size(100, 20);
    videoLink.style("font-size", "18px");
    videoLink.style("color", "white");
    videoLink.style("font-family", "Helvetica, Arial, sans-serif");
    videoLink.position(windowWidth - videoLink.width - 60, windowHeight - videoLink.height - 40);
  }
}

function backgroundImage(img) {
  push();
  translate(width / 2, height / 2);
  imageMode(CENTER);
  let scale = Math.max(width / img.width, height / img.height);
  image(img, 0, 0, img.width * scale, img.height * scale);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
