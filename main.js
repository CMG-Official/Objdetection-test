img = "";
function preload(){
img = loadImage("dog_cat.jpg");
}
function setup(){
canvas = createCanvas(700,450);
canvas.center();
}
function draw(){
    image(img,0,0,700,450);
    fill(255,0,0);
    text("Dog",30,90);
    noFill();
    stroke(255,0,0)
    rect(27,77,400,490);
}
