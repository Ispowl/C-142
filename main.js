function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console')
	poseNet = ml5.poseNet(video,modelLoaded);
	poseNet.on('pose',gotPoses);
	instializeInSetup(mario);
}

function draw() {
	game();
	if (noseX < 300){
		marioX = marioX - 1;
	}
	if (noseX > 300){
		marioX = marioX + 1;
	}
	if (noseY < 150){
		marioY = marioY - 1;
	}
	image(img,marioX,marioY,40,70);
}

function modelLoaded(){
	console.log("Model loading!");
}
function gotPoses(results){
	if (results.length > 0){
		console.log(results);
		noseX =results[0].pose.nose.x;
		noseY =results[0].pose.nose.y;
	
	}
}






