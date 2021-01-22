var background_img
var maincharacter
var symbol
var count=0;


function preload() {
 background_img=loadImage("images/blackDeath.jpg")
 symbol=loadImage("images/blackDeathSymbo.png") 
 maincharacter=loadImage("images/QueenSurvivor/1.gif","images/QueenSurvivor/2.gif","images/QueenSurvivor/3.gif","images/QueenSurvivor/4.gif","images/QueenSurvivor/5.gif",
 "images/QueenSurvivor/6.gif","images/QueenSurvivor/7.gif","images/QueenSurvivor/8.gif","images/QueenSurvivor/9.gif",
 "images/QueenSurvivor/10.gif","images/QueenSurvivor/11.gif","images/QueenSurvivor/12.gif","images/QueenSurvivor/13.gif",
 "images/QueenSurvivor/14.gif","images/QueenSurvivor/15.gif")


}

function setup() {
    createCanvas(1000,600)
    background=createSprite(200,200);
    background.addImage(background_img)
    background.velocityX=-2;
    background.x=background.width/2

    queen=createSprite(100,300,10,10)
    queen.addAnimation(maincharacter)
    queen.scale=0.1;
}
function draw(){
    background(background_img)
   drawSprites();
    fill("black");
   text("SCORE:"+count, 340, 15) 
}