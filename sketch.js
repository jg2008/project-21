var canvas;
var music;
var box;
var ball;
var block1;
var block2;
var block3;
var block4;



function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
block1 = createSprite(0,580,360,30);
block1.shapeColor = "blue";

block2 = createSprite(295,580,200,30);
block2.shapeColor = "orange";

block3 = createSprite(515,580,200,30);
block3.shapeColor = "red";

block4 = createSprite(740,580,220,30);
block4.shapeColor = "green";


    //create box sprite and give velocity
    ball = createSprite(300,100,40,40);
    ball.shapeColor = "white"; 
    ball.velocityX = 4;
    ball.velocityY = 9;
}

function draw() {
    background("white");
    //create edgeSprite
    edges = createEdgeSprites();
    ball.bounceOff(edges);

    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        //change color here
        ball.shapeColor = "blue";
        }



    //add condition to check if box touching surface and make it box
    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        ball.velocityX = 0;
        ball.velocityY = 0;
       // music.stop();
        }
        if(block3.isTouching(ball) && ball.bounceOff(block3)){
            //change color here
            ball.shapeColor = "red";
            }

            if(block4.isTouching(ball) && ball.bounceOff(block4)){
                //change color here
                ball.shapeColor = "green";
                }
        drawSprites();
}
