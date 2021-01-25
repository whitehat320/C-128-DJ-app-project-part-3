song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload(){
    song1 = loadSound("Doraemon.mp3");
    song2 = loadSound("Shinchan.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 150,200,500, 500);
}

function play_song1(){
    song1.play();
    song1.setVolume(1);
    song1.rate(1);
}

function play_song2(){
    song2.play();
    song2.setVolume(1);
    song2.rate(1);
}


function modelLoaded(){
    console.log('PoseNet is Initialized');
 
 }
 
 function gotPoses(results){
     if(results.length>0){
         console.log(results);
         leftWristX = results[0].pose.leftWrist.x;
         leftWristY = results[0].pose.leftWrist.y;
         console.log("leftWristX = " + leftWristX + " leftWristY = " + leftWristY)
     
         rightWristX = results[0].pose.rightWrist.x;
         rightWristY = results[0].pose.rightWrist.y;
         console.log("rightWristX = " + rightWristX + " rightWristY = " + rightWristY)
     
     }
 }
 