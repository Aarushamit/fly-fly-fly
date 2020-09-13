

var bird, bird_img;
var pipes = [];
var score = 0;
var bg_img;
var pc = [];
var something;
var noise; 


function preload() {

bird_img = loadImage("jet.png");
enemy = loadImage("pole.png");
enemy1 = loadImage("pole (1).png");
bg_img = loadImage("bg.jpeg");


}



function setup() {
  createCanvas(640, 480);
  bird = new Bird();
 
  image(bird_img, 64, width/2, 30, 30);
  bird.scale = 1;

 

  pipes.push(new Pipe());
}

function draw() {
  background(bg_img);

  
  

  for (var i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      console.log('HIT');
      bird.visible = false;
      pipes[i].visible = false;
    }

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }

  bird.update();
  bird.show();
  

  if (frameCount % 75 == 0) {
    pipes.push(new Pipe());
  }

  if(frameCount%20===0) {
    score+= 3;
  }

  if(score<0) {
    textSize(25);
    fill("red");
    text("OH NO.. COMMON", 200, 200,100, 100);
  }

 // if(frameCount%60===0) {
   // something = createSprite(640, 480, 30, 15);
    //something.push(pc);
  //}

  this.Text = text("your score:"+score, 20, 20);

  if(frameCount%400===0) {
    textSize(20);
    fill("green"); 
    text("YEAH!!! YOU R A TRUE GAMER!!", 200, 200, 30, 30);
  }


}

function keyPressed() {
  if (key == ' ') {
    bird.up();
    //score = score+1;
    //console.log("SPACE");
  }

  
}
