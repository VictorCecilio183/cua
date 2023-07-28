noseX=0;
noseY=0;
diference=0;
rightWristX=0;
leftWristX=0;

function setup() {
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,500);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPases);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}


function gotPases(results)
{
    if(results.length >0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX="+noseX+"noseY="+noseY);

        rightWristX=results[0].pose.rightWrist.x;
        leftWristX=results[0].pose.leftWrist.x;
        diference=floor(leftWristX-rightWristX);

        console.log("leftWristX-"+leftWristX+"rigthWristX-"+"diference-"+diference);
    }
}

function draw() {
    background('grey');

    document.getElementById("square_side").innerHTML=
    "El auto y ancho del cuadrado sera:"+diference+"px";

    fill('green');
    stroke('black');
    square(noseX,noseY,diference);
}