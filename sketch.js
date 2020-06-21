var gameState = 0;

var bgImage, spImage, timage1;
var officer, timage2;
var timage3;
var timage4, no1;
var fcimage;
var end;
function preload(){
 bgImage = loadImage("images/r.png");
 spImage = loadImage("images/flying.png");
 timage1 = loadImage("images/text1.png"); 
 officer = loadImage("images/fd3.png");
 timage2 = loadImage("images/text2.png");
 fcimage = loadImage("images/fd2.jpg"); 
 timage3 = loadImage("images/text3.png");
 timage4 = loadImage("images/text4.png");
 no1 = loadImage("images/fd4.jpg");
 end = loadImage("images/fd.jpg");
}

function setup() {
  createCanvas(1200,600);
   
  
}

function draw() {
  
  if (gameState === 0){
    background(255);
    textSize(30);
    noStroke();
    fill(0);
    text("Press alphabets of father in order",200,300);
    
  }

  //f
  if(keyCode === 70){  
    background(bgImage);
    image(spImage,500,70);
    image(timage1,0,0);
    
    gameState=1;
    
  }
  //a
  if(keyCode === 65){
    background(255);
    image(officer,700,300);
    image(timage2,0,0);
  }
  //t
  if(keyCode === 84){
    background(255);
    background(timage3);
    image(no1,1000,300);
  }
  //h
  if (keyCode === 72){
   background(fcimage);
  }
  //e
  if(keyCode === 69){
    background(timage4);    
  }
  //r
  if(keyCode === 82){
    background(end);
  }



  drawSprites();
}

