let spriteSheet;
let frameWidth = 883 / 8; // each frame width for all.png
let frameHeight = 87;
let currentFrame = 0;
let frameCounter = 0;
let frameDelay = 5; // 控制第一個動畫速度

let spriteSheet2;
let frameWidth2 = 402 / 7; // each frame width for all2.png
let frameHeight2 = 97;
let currentFrame2 = 0;
let frameCounter2 = 0;
let frameDelay2 = 6; // 控制第二個動畫速度

let spacing = 20; // 兩個動畫之間的間距

function preload() {
  spriteSheet = loadImage('1/all.png');
  spriteSheet2 = loadImage('2/all2.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255); // 白色背景

  // 計算中央位置
  let centerX = width / 2;
  let centerY = height / 2;

  // 計算整體寬度，將兩個動畫作為一個 group 置中
  let totalWidth = frameWidth + spacing + frameWidth2;
  let groupLeft = centerX - totalWidth / 2;

  // 第一個動畫（左）
  let sourceX1 = currentFrame * frameWidth;
  let x1 = groupLeft;
  let y1 = centerY - frameHeight / 2;
  image(spriteSheet,
        x1,
        y1,
        frameWidth,
        frameHeight,
        sourceX1,
        0,
        frameWidth,
        frameHeight);

  // 第二個動畫（右）
  let sourceX2 = currentFrame2 * frameWidth2;
  let x2 = groupLeft + frameWidth + spacing;
  let y2 = centerY - frameHeight2 / 2;
  image(spriteSheet2,
        x2,
        y2,
        frameWidth2,
        frameHeight2,
        sourceX2,
        0,
        frameWidth2,
        frameHeight2);

  // 更新第一個動畫幀
  frameCounter++;
  if (frameCounter >= frameDelay) {
    frameCounter = 0;
    currentFrame = (currentFrame + 1) % 8;
  }

  // 更新第二個動畫幀
  frameCounter2++;
  if (frameCounter2 >= frameDelay2) {
    frameCounter2 = 0;
    currentFrame2 = (currentFrame2 + 1) % 7;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
