 window.onload = function(){
	var a1 = document.getElementById("slide1");
	a1.style.display = "block";
}
var thing;
var thinglength=1;
////소리관련 함수///
//구본무
var buttonSound;
$(document).ready(function()
    //모든 함수는 ready 안으로!
    {
        /*var BGM=document.getElementsByName('Sound');
        var playBGM;
        if(BGM[0].checked==true){
            var audio1 = new Audio("bgm1.mp3");
            audio1.play();
        }else if(BGM[1].checked==true){
            var audio2 = new Audio("bgm2.mp3");
            audio2.play();
        }*/
        // 라디오버튼 클릭시 이벤트 발생
        var audio1 = new Audio("bgm1.mp3");
        var audio2 = new Audio("bgm2.mp3");
        audio1.loop=true;
        audio2.loop=true;
        $("#gamestart").click(function(){
            audio1.play();
        })
        
        $("input:radio[name=BGM]").click(function() {
          if ($("input[name=BGM]:checked").val() == "1") {
            audio1.pause();
            audio2.pause();
            audio1.volume = 0.2;
            audio1.play();
                // radio 버튼의 value 값이 1이라면 활성화
              } else if ($("input[name=BGM]:checked").val() == "2") {
                audio1.pause();
                audio2.pause();
                audio2.volume = 0.2;
                audio2.play();
                // radio 버튼의 value 값이 1이라면 비활성화
              } else if ($("input[name=BGM]:checked").val() == "none") {
                audio1.pause();
                audio2.pause();
                // radio 버튼의 value 값이 1이라면 비활성화
              }
            });
        var sound1 = new Audio("button-11.mp3");
        var sound2 = new Audio("button-16.mp3");
        buttonSound=sound1;
        $("button").click(function() {
          buttonSound.play();
        });
        $("input:radio[name=Sound]").click(function() {
          if ($("input[name=Sound]:checked").val() == "1") {
            buttonSound = sound1;
            sound1.volume = 0.4;
            sound1.play();
                    // radio 버튼의 value 값이 1이라면 활성화
                  } else if ($("input[name=Sound]:checked").val() == "2") {
                    buttonSound = sound2;
                    sound2.volume = 0.4;
                    sound2.play();
                    // radio 버튼의 value 값이 1이라면 비활성화
                  } else if ($("input[name=Sound]:checked").val() == "none") {
                    sound1.volume = 0;
                    sound2.volume = 0;
                    // radio 버튼의 value 값이 1이라면 비활성화
                  }
                });
        
        
    });

function blockhit(){
    	buttonSound.play();
    }   
var paddlehitsound=new Audio("pop.mp3");
function paddlehit(){
	paddlehitsound.play();
}
var blockkillsound=new Audio("block.mp3");
function blockkill(){
	blockkillsound.play();
}
var bosshitsound=new Audio("bosskill.mp3");
function bosshit(){
	bosshitsound.play();
}
var potiondrinksound=new Audio("drink.mp3")
potiondrinksound.currentTime = 2;
function potiondrink(){
	potiondrinksound.play();
}
////소리관련 함수 끝///
function next1() {
    document.getElementById("slide1").style.display = "none";
    document.getElementById("slide21").style.display = "block";
}

function next21() {
    document.getElementById("slide21").style.display = "none";
    document.getElementById("slide22").style.display = "block";
    document.getElementById("atext").value = ""; //입력란 초기화
}

function next22() {
    document.getElementById("slide22").style.display = "none";
    document.getElementById("slide23").style.display = "block";
    document.getElementById("atext").value = ""; //입력란 초기화
}

function next23() {
    document.getElementById("slide23").style.display = "none";
    document.getElementById("slide3").style.display = "block";
    document.getElementById("atext").value = ""; //입력란 초기화
}

function next3() {
    thing = document.getElementById("atext").value;
    var leng = document.getElementById("atext").value.length;
    if (leng == 0) {
        alert("내용을 입력해주세요.");
        return false;
    }
    document.getElementById("slide3").style.display = "none";
    document.getElementById("slide4").style.display = "block";
    //document.getElementById("thing").size = thinglength;
    document.getElementById("thing").innerHTML = thing;
}
//구본무 끝
var choose1 = 0;

function next4(){
	document.getElementById("slide4").style.display = "none";
	document.getElementById("slide5").style.display = "block";
	var dlevel = ["#easy","#normal","#hard"];
	choose1 = 0;
	$(document).keydown(function(event) {
		event.preventDefault(); //방향키로 스크롤 금지
		event.stopPropagation(); //다른 이벤트에 영향 없음
		if (event.keyCode == '38') {
			//alert('위측 화살키를 누르셨습니다.');
			if(choose1==0){
				$(dlevel[choose1]).css({"background-color":"black","color":"white"});
				choose1=2;
				$(dlevel[choose1]).css({"background-color":"#F8EE9B","color":"black"});
			}
			else{
				$(dlevel[choose1]).css({"background-color":"black","color":"white"});
				choose1--;
				$(dlevel[choose1]).css({"background-color":"#F8EE9B","color":"black"});
			}
		}
		else if (event.keyCode == '40') {
		 // alert('아래측 화살키를 누르셨습니다.');
			if(choose1==2){
				$(dlevel[choose1]).css({"background-color":"black","color":"white"});
				choose1=0;
				$(dlevel[choose1]).css({"background-color":"#F8EE9B","color":"black"});
			}
			else{
				$(dlevel[choose1]).css({"background-color":"black","color":"white"});
				choose1++;
				$(dlevel[choose1]).css({"background-color":"#F8EE9B","color":"black"});
			}
		}
	});
}
var choose2 = 0;


function spotion(){
	hideGame();
	// document.getElementById("slide1").style.display = "none";
	document.getElementById("slide5").style.display = "none";
	document.getElementById("slidepotion").style.display = "block";
	var dpotion = ["#lives", "#damage", "#count"];
	choose2 = 0;
	$(document).keydown(function(event) {
		event.preventDefault();
		event.stopPropagation();
		if (event.keyCode == '37') {
			// alert('좌측 화살키를 누르셨습니다.');
			
			if(choose2==0){
				$(dpotion[choose2]).css("border","none");
				choose2=2;
				$(dpotion[choose2]).css("border","1px solid #b70404");
			}
			else{
				$(dpotion[choose2]).css("border","none");
				choose2 = choose2 - 1;
				$(dpotion[choose2]).css("border","1px solid #b70404");
			}

		}
		else if (event.keyCode == '39') {
			// alert('우측 화살키를 누르셨습니다.');

			if(choose2==2){
				$(dpotion[choose2]).css("border","none");
				choose2=0;
				$(dpotion[choose2]).css("border","1px solid #b70404");
			}
			else{
				$(dpotion[choose2]).css("border","none");
				choose2 = choose2 + 1;
				$(dpotion[choose2]).css("border","1px solid #b70404");
			}
		}
	});
}

function changePotion1(){
	lives= lives+1;
	potiondrink();
	if(stageCount < 3){
		bossX = 1730;
		bossY = 1730;
	} else if(stageCount == 3){
		bossX = canvas.width / 2- 30;
		bossY = canvas.height / 2- 30;
	}
	if(ballCount == 1){
		x2 = 730;
		y2 = 730;
		x3 = 730;
		y3 = 730;
		x4 = 730;
		y4 = 730;

	} else if(ballCount == 2){
		x3 = 730;
		y3 = 730;
		x4 = 730;
		y4 = 730;

	} else if(ballCount == 3){
		x4 = 730;
		y4 = 730;
	}		
}

function changePotion2(){
	dmg = startDmg;
	dmg= dmg+1;
	startDmg = dmg;	
	potiondrink();
	if(stageCount < 3){
		bossX = 1730;
		bossY = 1730;
	} else if(stageCount == 3){
		bossX = canvas.width / 2- 30;
		bossY = canvas.height / 2- 30;
	}
	if(ballCount == 1){
		x2 = 730;
		y2 = 730;
		x3 = 730;
		y3 = 730;
		x4 = 730;
		y4 = 730;

	} else if(ballCount == 2){
		x3 = 730;
		y3 = 730;
		x4 = 730;
		y4 = 730;

	} else if(ballCount == 3){
		x4 = 730;
		y4 = 730;
	}		
}

function changePotion3(){
	ballCount=ballCount+1;
	potiondrink();
	if(stageCount < 3){
		bossX = 1730;
		bossY = 1730;
	} else if(stageCount == 3){
		bossX = canvas.width / 2- 30;
		bossY = canvas.height / 2- 30;
	}
	if(ballCount == 1){
		x2 = 730;
		y2 = 730;
		x3 = 730;
		y3 = 730;
		x4 = 730;
		y4 = 730;

	} else if(ballCount == 2){
		x3 = 730;
		y3 = 730;
		x4 = 730;
		y4 = 730;

	} else if(ballCount == 3){
		x4 = 730;
		y4 = 730;
	}		
	//보스좌표 초기화

}

function initPaddle1(){
	paddleWidth=400;
	paddleX= (canvas.width - paddleWidth) / 2;
}

function initPaddle2(){
	paddleWidth=300;
	paddleX= (canvas.width - paddleWidth) / 2;
}

function initPaddle3(){
	paddleWidth=200;
	paddleX= (canvas.width - paddleWidth) / 2;
}

function finalpage(){
	hideGame();
	document.getElementById("slidepotion").style.display = "none";
	document.getElementById("finalslide").style.display = "block";
	document.getElementById("fthing").innerHTML = thing;
	
}
function startpage(){
	document.location.reload();
	
}

function hideSlide(){

	document.getElementById("slidepotion").style.display = "none";
	//initPaddle();
}

function showSlide(){
	hideGame();
	document.getElementById("slidepotion").style.display = "block";

}
/*-----------------------------------------------------------*/
/*-----------------------------------------------------------*/
/*-----------------------------------------------------------*/
/*-----------------------------------------------------------*/
/*-----------------------------------------------------------*/
/*-----------------------------------------------------------*/
/*-----------------------------------------------------------*/
/*-----------------------------------------------------------*/
/*-----------------------------------------------------------*/
/*-----------------------------------------------------------*/
/*-----------------------------------------------------------*/
/*-----------------------------------------------------------*/
/*-----------------------------------------------------------*/
/*-----------------------------------------------------------*/
/*-----------------------------------------------------------*/
/*-----------------------------------------------------------*/
/*-----------------------------------------------------------*/
/*-----------------------------------------------------------*/
/*-----------------------------------------------------------*/

//캔버스
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//공의 좌표
var x = canvas.width / 2;
var y = canvas.height - 300;
//공2
var x2 = canvas.width / 2  + 30;
var y2 = canvas.height - 300;
//공3
var x3 = canvas.width / 2 + 60;
var y3 = canvas.height - 300;
//공4
var x4 = canvas.width / 2 + 90;
var y4 = canvas.height - 300;
//공의 속도와 방향
var dx = 4;
var dy = -4;

var dx2 = 4;
var dy2 = -4;

var dx3 = 4;
var dy3 = -4;

var dx4 = 4;
var dy4 = -4;

//status
var bStatus1 =0;
var bStatus2 =0;
var bStatus3 =0;
var bStatus4 =0;

//공의 반지름
var ballRadius = 12;

//패들 높이, 너비, 좌표
var paddleHeight = 50;
var paddleWidth = 400;
var paddleX = (canvas.width - paddleWidth) / 2;
//키보드 방향키 감지
var rightPressed = false;
var leftPressed = false;

//벽돌 행,열 개수, 벽돌 너비,높이,패딩, 벽돌 위치
var brickRowCount = 1;
var brickColumnCount = 3;
var brickWidth = 75;
var brickHeight = 75;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 237.5;
//벽돌 체력 
var bricksLife = 3;
//벽돌 총 개수 (맵 구현시 수정)
var bricksCount = brickRowCount * brickColumnCount;

//보스
var bossWidth = 200;
var bossHeight = 200;
//보스 벽돌의 가로세로
var bossLife = 20;
//보스 벽돌 체력 
var bossX = canvas.width / 2- 30;
var bossY = canvas.height / 2- 30;
//보스 벽돌 x, y 좌표
var ddx = 1;
var ddy = 1;
//보스 벽돌 속도

//1. 여기까지
//------------------------------------------
//------------------------------------------
//------------------------------------------
//점수
var score = 0;
//콤보
var combo = 0;
//목숨
var lives = 2;
//데미지
var dmg = 1;
//메인화면 난이도 버튼에 따라 데미지 변수 증가 구현하기
var startDmg = 1;
// 시작 데미지 

//유저 선택
// var userDmg = 1;
// var userLives = 1;
// var userBall = 1;

//공 개수
var ballCount = 1;

//스테이지
var stageCount = 1;


//난이도
// var difficulty = 1;

//벽돌 배열 
var bricks = [];
for (var c = 0; c < brickColumnCount; c++) {
	bricks[c] = [];
	for (var r = 0; r < brickRowCount; r++) {
		bricks[c][r] = { x: 0, y: 0, status: bricksLife }; 
		//bricks의 x좌표, y좌표, status==체력
	}
}

//스테이지 완료시 맵 재설정
//유저 선택에 따른 변수 재설정
function reload(){
	x = canvas.width / 2;
	y = canvas.height - 300;

	x2 = canvas.width / 2 + 30;
	y2 = canvas.height - 300;

	x3 = canvas.width / 2 + 60;
	y3 = canvas.height - 300;

	x4 = canvas.width / 2 + 90;
	y4 = canvas.height - 300;

	//공의 속도와 방향
	dx = 4;
	dy = -4;

	dx2 = 4;
	dy2 = -4;

	dx3 = 4;
	dy3 = -4;

	dx4 = 4;
	dy4 = -4;

	if(stageCount==1){
		brickRowCount = 1;
		brickColumnCount = 5;
		bricksLife = 5;
		brickOffsetLeft = 152.5;
		bricksCount = brickRowCount * brickColumnCount;
		for (var c = 0; c < brickColumnCount; c++) {
			bricks[c] = [];
			for (var r = 0; r < brickRowCount; r++) {
				bricks[c][r] = { x: 0, y: 0, status: bricksLife }; 
		//bricks의 x좌표, y좌표, status==체력
			}
		}

	} else if(stageCount==2){
		brickRowCount = 0;
		brickColumnCount = 0;
	}
}
// function drawBricks() {
// 	for (var c = 0; c < brickColumnCount; c++) {
// 		for (var r = 0; r < brickRowCount; r++) {
// 			if (bricks[c][r].status >= 1) {//체력변수에맞게
// 				var brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
// 				var brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
// 				bricks[c][r].x = brickX;
// 				bricks[c][r].y = brickY;
// 				ctx.beginPath();
// 				ctx.rect(brickX, brickY, brickWidth, brickHeight);
// 				ctx.fillStyle = "#0095DD";
// 				ctx.fill();
// 				ctx.closePath();
// 			}
// 		}
// 	}
// }

// //블록 체력 표시하는 함수
// function drawBricksLife() {
// 	for (var c = 0; c < brickColumnCount; c++) {
// 		for (var r = 0; r < brickRowCount; r++) {
// 			if (bricks[c][r].status >= 1) {
// 				var brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
// 				var brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
// 				ctx.beginPath();
// 				ctx.fillStyle = "white";
// 				ctx.fillText(bricks[c][r].status, brickX+33, brickY+15);  //인자 bricks[c][r].status ?
// 			}
// 		}
// 	}
// }
//키보드 EventListener() 에 관한 부분
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

//When the keydown is fired the keyDownHandler() function will be executed
function keyDownHandler(e) {
	if (e.key == "Right" || e.key == "ArrowRight") {
		rightPressed = true;
	} else if (e.key == "Left" || e.key == "ArrowLeft") {
		leftPressed = true;
	}
}

//When the keyup is fired the keyDownHandler() function will be executed
function keyUpHandler(e) {
	if (e.key == "Right" || e.key == "ArrowRight") {
		rightPressed = false;
	} else if (e.key == "Left" || e.key == "ArrowLeft") {
		leftPressed = false;
	}
}

//마우스 x좌표에 따른 패들좌표 설정
function mouseMoveHandler(e) {
	var relativeX = e.clientX - canvas.offsetLeft;
	if (relativeX > 0 && relativeX < canvas.width) {
		paddleX = relativeX - paddleWidth / 2;
	}
}

// function collisionDetection() {
// 	for (var c = 0; c < brickColumnCount; c++) {//각각의 모든 블록에 대해
// 		for (var r = 0; r < brickRowCount; r++) {
// 			var b = bricks[c][r];
			
// 			if (b.status > 0) {//블록 체력이 1이상일때
// 				if (//공 중심좌표가 블록 모서리 내부에 들어가게 되는 경우
// 					x + ballRadius >= b.x && 
// 					x - ballRadius <= b.x + brickWidth && 
// 					y + ballRadius >= b.y && 
// 					y - ballRadius <= b.y + brickHeight

// 					){
// 					if (y < b.y || y > b.y + brickHeight){//세로면에 충돌한 경우
// 						dy = -dy;
// 					}
// 					else {//가로면에 충돌한 경우
// 						dx = -dx;
// 					}
// 						b.status=b.status-dmg; // 블록 체력 데미지만큼 감소; 
						
// 						//블록체력이 0이하일때
// 						if(b.status<=0){score=score+bricksLife;}
// 						//블록에 공이 1회 맞았을때 콤보 증가
// 						combo++;
// 						//콤보 3회시 다음 5회동안 데미지 두배 옵션
// 						if(combo==3){
// 							dmg=dmg*2;

// 						}
// 						if(combo>8){
// 							combo=0;//콤보 0 초기화 
// 							dmg=startDmg;//데미지 원래대로
// 						}


// 						if (score == brickRowCount * brickColumnCount * bricksLife) { 
// 						// 여기서 메인화면으로 돌아가게 
// 						// 스테이지별 난이도, 볼 속도 , 각 변수 수정후
// 						// 다음 스테이지

// 						alert("YOU WIN!");
// 						cancelAnimationFrame(draw);
// 						/* document.location.reload(); */
// 							// canvas reload때 다음 스테이지 변수가 변경되있어야 
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}


//공 그리는 함수 (매 프레임마다 공을 그림)
function drawBall() {
	ctx.beginPath();
	ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
	if(combo==3){
		let balleffect = new Image(); 
		balleffect.src = "ballef.png";
		ctx.drawImage(balleffect,x-25,y-25,ballRadius*4,ballRadius*4)
		}
	let ballimg = new Image(); 
		ballimg.src = "ballimg.png";
		ctx.drawImage(ballimg,x-10,y-10,ballRadius*2,ballRadius*2)
// 	if(dmg==1){ctx.fillStyle = "#0095DD";}
// 	else if (dmg==2){ctx.fillStyle = "orange";}
// 	else if (dmg==3){ctx.fillStyle = "yellow";}
// 	else if (dmg==4){ctx.fillStyle = "DarkKhaki";}
// 	else if (dmg==5){ctx.fillStyle = "violet";}
// 	else if (dmg==6){ctx.fillStyle = "crimson";}
// 	else if (dmg==7){ctx.fillStyle = "purple";}
// 	else if (dmg==8){ctx.fillStyle = "green";}
// 	else{ctx.fillStyle = "white";}


// ctx.fill();
ctx.closePath();
}

function drawBall2() {
	ctx.beginPath();
	ctx.arc(x2, y2, ballRadius, 0, Math.PI * 2);
	if(combo==3){
		let balleffect = new Image(); 
		balleffect.src = "ballef.png";
		ctx.drawImage(balleffect,x2-25,y2-25,ballRadius*4,ballRadius*4)
		}
	let ballimg = new Image(); 
	ballimg.src = "ballimg.png";
	ctx.drawImage(ballimg,x2-10,y2-10,ballRadius*2,ballRadius*2)

// 	if(dmg==1){ctx.fillStyle = "#0095DD";}
// 	else if (dmg==2){ctx.fillStyle = "orange";}
// 	else if (dmg==3){ctx.fillStyle = "yellow";}
// 	else if (dmg==4){ctx.fillStyle = "DarkKhaki";}
// 	else if (dmg==5){ctx.fillStyle = "violet";}
// 	else if (dmg==6){ctx.fillStyle = "crimson";}
// 	else if (dmg==7){ctx.fillStyle = "purple";}
// 	else if (dmg==8){ctx.fillStyle = "green";}
// 	else{ctx.fillStyle = "white";}

// ctx.fill();
ctx.closePath();
}

function drawBall3() {
	ctx.beginPath();
	ctx.arc(x3, y3, ballRadius, 0, Math.PI * 2);
	if(combo==3){
		let balleffect = new Image(); 
		balleffect.src = "ballef.png";
		ctx.drawImage(balleffect,x3-25,y3-25,ballRadius*4,ballRadius*4)
		}
	let ballimg = new Image(); 
	ballimg.src = "ballimg.png";
	ctx.drawImage(ballimg,x3-10,y3-10,ballRadius*2,ballRadius*2)
// 	if(dmg==1){ctx.fillStyle = "#0095DD";}
// 	else if (dmg==2){ctx.fillStyle = "orange";}
// 	else if (dmg==3){ctx.fillStyle = "yellow";}
// 	else if (dmg==4){ctx.fillStyle = "DarkKhaki";}
// 	else if (dmg==5){ctx.fillStyle = "violet";}
// 	else if (dmg==6){ctx.fillStyle = "crimson";}
// 	else if (dmg==7){ctx.fillStyle = "purple";}
// 	else if (dmg==8){ctx.fillStyle = "green";}
// 	else{ctx.fillStyle = "white";}

// ctx.fill();
ctx.closePath();
}

function drawBall4() {
	ctx.beginPath();
	ctx.arc(x4, y4, ballRadius, 0, Math.PI * 2);
	if(combo==3){
		let balleffect = new Image(); 
		balleffect.src = "ballef.png";
		ctx.drawImage(balleffect,x4-25,y4-25,ballRadius*4,ballRadius*4)
		}
	let ballimg = new Image(); 
	ballimg.src = "ballimg.png";
	ctx.drawImage(ballimg,x4-10,y4-10,ballRadius*2,ballRadius*2)
// 	if(dmg==1){ctx.fillStyle = "#0095DD";}
// 	else if (dmg==2){ctx.fillStyle = "orange";}
// 	else if (dmg==3){ctx.fillStyle = "yellow";}
// 	else if (dmg==4){ctx.fillStyle = "DarkKhaki";}
// 	else if (dmg==5){ctx.fillStyle = "violet";}
// 	else if (dmg==6){ctx.fillStyle = "crimson";}
// 	else if (dmg==7){ctx.fillStyle = "purple";}
// 	else if (dmg==8){ctx.fillStyle = "green";}
// 	else{ctx.fillStyle = "white";}

// ctx.fill();
ctx.closePath();
}

//공 start
function startBall(){
	if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
		// 벽돌 부딛혔을 때
		blockhit();bStatus1 = 0;
		dx = -dx;
	}
	if (y + dy < ballRadius) {
		// 벽돌 부딛혔을 때
		blockhit();bStatus1 = 0;
		dy = -dy;
	}
	//공이 패들에 튀기는 설정
	else if (y + dy > canvas.height - (paddleHeight)) {
		if (x > paddleX && x < paddleX + paddleWidth) {
			// 벽돌 부딛혔을 때
			paddlehit();bStatus1 = 0;
			dx = -((paddleX + (paddleWidth/2) - x)/(paddleWidth)) * 10;//미세한 각도에 따라 공변화
			dy = -dy;
		} 
		else {
			lives--;
			if (!lives) {
				alert("Game Over"); 
				document.location.reload(); //재시작
			} else {
				x = canvas.width / 2;
				y = canvas.height - 300; //초기화
				/*dx = 3;
				dy = -3; */
				paddleX = (canvas.width - paddleWidth) / 2;
			}
		}
	}
	x += dx;
	y += dy;	
}
function startBall2(){
	if (x2 + dx2 > canvas.width - ballRadius || x2 + dx2 < ballRadius) {
		blockhit();dx2 = -dx2;
		// 벽돌 부딛혔을 때
			bStatus2 = 0;
	}
	if (y2 + dy2 < ballRadius) {
		blockhit();dy2 = -dy2;
		// 벽돌 부딛혔을 때
			bStatus2 = 0;
	}
	//ball2 패들
	else if (y2 + dy2 > canvas.height - (paddleHeight)) {
		if (x2 > paddleX && x2 < paddleX + paddleWidth) {
			// 벽돌 부딛혔을 때
			paddlehit();bStatus2 = 0;
			dx2 = -((paddleX + (paddleWidth/2) - x2)/(paddleWidth)) * 10;//미세한 각도에 따라 공변화
			dy2 = -dy2;
		} else {
			lives--;
			if (!lives) {
				alert("Game Over"); 
				document.location.reload(); //재시작
			} 
			else {
				x2 = canvas.width / 2 + 30;
				y2 = canvas.height - 300; //초기화
				/*dx = 3;
				dy = -3; */
				paddleX = (canvas.width - paddleWidth) / 2;
			}
		}
	}
	
	x2 += dx2;
	y2 += dy2;
}

function startBall3(){
	if (x3 + dx3 > canvas.width - ballRadius || x3 + dx3 < ballRadius) {
		blockhit();dx3 = -dx3;
		// 벽돌 부딛혔을 때
			bStatus3 = 0;
	}
	if (y3 + dy3 < ballRadius) {
		blockhit();dy3 = -dy3;
		// 벽돌 부딛혔을 때
			bStatus3 = 0;
	}
	//ball2 패들
	else if (y3 + dy3 > canvas.height - (paddleHeight)) {
		if (x3 > paddleX && x3 < paddleX + paddleWidth) {
			// 벽돌 부딛혔을 때
			paddlehit();bStatus3 = 0;
			dx3 = -((paddleX + (paddleWidth/2) - x3)/(paddleWidth)) * 10;//미세한 각도에 따라 공변화
			dy3 = -dy3;
		} else {
			lives--;
			if (!lives) {
				alert("Game Over"); 
				document.location.reload(); //재시작
			} else {
				x3 = canvas.width / 2 + 30;
				y3 = canvas.height - 300; //초기화
				/*dx = 3;
				dy = -3; */
				paddleX = (canvas.width - paddleWidth) / 2;
			}
		}
	}
	
	x3 += dx3;
	y3 += dy3;		
}

function startBall4(){
	if (x4 + dx4 > canvas.width - ballRadius || x4 + dx4 < ballRadius) {
		blockhit();dx4 = -dx4;
		// 벽돌 부딛혔을 때
			bStatus4 = 0;
	}
	if (y4 + dy4 < ballRadius) {
		blockhit();dy4 = -dy4;
		// 벽돌 부딛혔을 때
			bStatus4 = 0;
	}
	//ball2 패들
	else if (y4 + dy4 > canvas.height - paddleHeight) {
		if (x4 > paddleX && x4 < paddleX + paddleWidth) {
			// 벽돌 부딛혔을 때
			paddlehit();bStatus4 = 0;
			dx4 = -((paddleX + (paddleWidth/2) - x4)/(paddleWidth)) * 10;//미세한 각도에 따라 공변화
			dy4 = -dy4;
		} else {
			lives--;
			if (!lives) {
				alert("Game Over"); 
				document.location.reload(); //재시작
			} else {
				x4 = canvas.width / 2 + 30;
				y4 = canvas.height - 300; //초기화
				/*dx = 3;
				dy = -3; */
				paddleX = (canvas.width - paddleWidth) / 2;
			}
		}
	}
	
	x4 += dx4;
	y4 += dy4;
}
//패들 그리는 함수 
function drawPaddle() {
	ctx.beginPath();
	ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
	ctx.fillStyle = "#0095DD";
	let paddleimg = new Image(); 
	paddleimg.src = "bar.png";
	ctx.drawImage(paddleimg,paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight)
	//ctx.fill();
	ctx.closePath();
}

//배열 검사해 블록 그리는 함수
function drawBricks() {
	for (var c = 0; c < brickColumnCount; c++) {
		for (var r = 0; r < brickRowCount; r++) {
			if (bricks[c][r].status >= 1) {//체력변수에맞게
				var brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
				var brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
				bricks[c][r].x = brickX;
				bricks[c][r].y = brickY;
				ctx.beginPath();
				ctx.rect(brickX, brickY, brickWidth, brickHeight);
				if(stageCount==1){ctx.fillStyle = "#6B8E23";}
				else{ctx.fillStyle = "#FFD700";}
				ctx.fill();
				let monster = new Image(); 
				monster.src = "monster.png";
				ctx.drawImage(monster,brickX, brickY, brickWidth, brickHeight);
				ctx.closePath();
			}
		}
	}
}

//블록 체력 표시하는 함수
function drawBricksLife() {
	for (var c = 0; c < brickColumnCount; c++) {
		for (var r = 0; r < brickRowCount; r++) {
			if (bricks[c][r].status >= 1) {
				var brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
				var brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
				ctx.beginPath();
				let hpp = new Image(); 
				hpp.src = "heart.png";
				ctx.drawImage(hpp,brickX+15, brickY-17, 15, 15);
				ctx.fillStyle = "white";
				ctx.font = "bold 25px NeoDunggeunmo";
				ctx.fillText(bricks[c][r].status, brickX+38, brickY);  //인자 bricks[c][r].status ?
			}
		}
	}
}

function drawBoss() {
	if (bossLife >= 1) {
		ctx.beginPath();
		ctx.rect(bossX, bossY, bossWidth, bossHeight);
			let boss = new Image(); 
			boss.src = "devil.jpg";
			ctx.drawImage(boss,bossX, bossY, bossWidth, bossHeight);
		ctx.closePath();
	}
}

function drawBossLife() {
  if (bossLife >= 1) {
    ctx.beginPath();
	let hpp = new Image(); 
		hpp.src = "heart.png";
		ctx.drawImage(hpp,bossX+80, bossY-17, 15, 15);
    ctx.fillStyle = "white";
	ctx.font = "bold 25px NeoDunggeunmo";
    ctx.fillText(bossLife, bossX+bossWidth/2-5, bossY-3);  
  }
}

//공이 보스벽돌에 부딪쳤는지 판단
function bossCollisionDetection() {
	if (bossLife > 0) {//블록 체력이 1이상일때
  		if (x + ballRadius >= bossX &&
  			x - ballRadius <= bossX + bossWidth && 
     		y + ballRadius >= bossY &&
     		y - ballRadius <= bossY + bossHeight &&
     		bStatus1 == 0){
  			bStatus1 = 1;
  			// alert("ball1 dx : "+ dx + "dy : "+ dy +" /n x:"+ x +" y:" + y);
				if (y < bossY || y > bossY + bossHeight){//세로면에 충돌한 경우
					bosshit();dy = -dy;
				}
				else if(x < bossX || x > bossX + bossWidth){//가로면에 충돌한 경우
					bosshit();dx = -dx;
				}
		    bossLife-=dmg; // 블록 체력 데미지만큼 감소; 
		    //블록체력이 0이하일때
		    if(bossLife>=0){score+=dmg;}
		    //if(bossLife<=0){score=score+bossLife;}
		    //블록에 공이 1회 맞았을때 콤보 증가
		    combo++;
		    //콤보 3회시 다음 1회동안 데미지 두배 옵션
		    if(combo==3){
		    dmg=dmg*2;
		    }
		    if(combo>3){
		    combo=0;//콤보 0 초기화 
		    dmg=startDmg;//데미지 원래대로
		    }
	    }
  		if (x2 + ballRadius >= bossX &&
  			x2 - ballRadius <= bossX + bossWidth && 
     		y2 + ballRadius >= bossY &&
     		y2 - ballRadius <= bossY + bossHeight &&
     		bStatus2 == 0){
  			// 벽돌 부딛혔을 때
			bStatus2 = 1;
  			// alert("ball2 dx2 : "+ dx2 + "dy2 : "+ dy2 +" /n x:"+ x2 +" y:" + y2);

				if (y2 < bossY || y2 > bossY + bossHeight){//세로면에 충돌한 경우
					bosshit();dy2 = -dy2;
				}
				else if(x2 < bossX || x2 > bossX + bossWidth){//가로면에 충돌한 경우
					bosshit();dx2 = -dx2;
				}
		    bossLife-=dmg; // 블록 체력 데미지만큼 감소; 
		    //블록체력이 0이하일때
		    if(bossLife>=0){score+=dmg;}
		    //if(bossLife<=0){score=score+bossLife;}
		    //블록에 공이 1회 맞았을때 콤보 증가
		    combo++;
		    //콤보 3회시 다음 1회동안 데미지 두배 옵션
		    if(combo==3){
		    dmg=dmg*2;
		    }
		    if(combo>3){
		    combo=0;//콤보 0 초기화 
		    dmg=startDmg;//데미지 원래대로
		    }
	    }
  		if (x3 + ballRadius >= bossX &&
  			x3 - ballRadius <= bossX + bossWidth && 
     		y3 + ballRadius >= bossY &&
     		y3 - ballRadius <= bossY + bossHeight &&
     		bStatus3 ==0){
  			bStatus3 = 1;
  			// alert("ball3 dx3 : "+ dx3 + "dy3 : "+ dy3 +" /n x:"+ x3 +" y:" + y3);

				if (y3 < bossY || y3 > bossY + bossHeight){//세로면에 충돌한 경우
					bosshit();dy3 = -dy3;
				}
				else if(x3 < bossX || x3 > bossX + bossWidth){//가로면에 충돌한 경우
					bosshit();dx3 = -dx3;
				}
		    bossLife-=dmg; // 블록 체력 데미지만큼 감소; 
		    //블록체력이 0이하일때
		    if(bossLife>=0){score+=dmg;}
		    //if(bossLife<=0){score=score+bossLife;}
		    //블록에 공이 1회 맞았을때 콤보 증가
		    combo++;
		    //콤보 3회시 다음 1회동안 데미지 두배 옵션
		    if(combo==3){
		    dmg=dmg*2;
		    }
		    if(combo>3){
		    combo=0;//콤보 0 초기화 
		    dmg=startDmg;//데미지 원래대로
		    }
	    }
  		if (x4 + ballRadius >= bossX &&
  			x4 - ballRadius <= bossX + bossWidth && 
     		y4 + ballRadius >= bossY &&
     		y4 - ballRadius <= bossY + bossHeight &&
     		bStatus4 == 0){
  			bStatus4 = 1;
  			// alert("ball4 dx4 : "+ dx4 + "dy4 : "+ dy4 +" /n x:"+ x4 +" y:" + y4);
				if (y4 < bossY || y4 > bossY + bossHeight){//세로면에 충돌한 경우
					bosshit();dy4 = -dy4;
				}
				else if(x4 < bossX || x4 > bossX + bossWidth){//가로면에 충돌한 경우
					bosshit();dx4 = -dx4;
				}
		    bossLife-=dmg; // 블록 체력 데미지만큼 감소; 
		    //블록체력이 0이하일때
		    if(bossLife>=0){score+=dmg;}
		    //if(bossLife<=0){score=score+bossLife;}
		    //블록에 공이 1회 맞았을때 콤보 증가
		    combo++;
		    //콤보 3회시 다음 1회동안 데미지 두배 옵션
		    if(combo==3){
		    dmg=dmg*2;
		    }
		    if(combo>3){
		    combo=0;//콤보 0 초기화 
		    dmg=startDmg;//데미지 원래대로
		    }
	    }

    }
}


//점수 그리는 함수
function drawScore() {
	ctx.font = "bold 30px NeoDunggeunmo";
	ctx.fillStyle ="#fff";
	ctx.fillText("SCORE "+score, canvas.width-120,30);
}

//콤보 그리는 함수
function drawCombo() {
	ctx.font = "bold 30px NeoDunggeunmo";
	ctx.fillStyle ="#fff";
	if(combo==3){
	ctx.fillStyle ="#DB7093";
	ctx.fillText("FEVER TIME", canvas.width-160,60);
	}
	else{
	ctx.fillStyle ="#fff";
	ctx.fillText("COMBO "+combo, canvas.width-120,60);
	}
}

//데미지 그리는 함수
function drawDmg() {
	ctx.font = "bold 30px NeoDunggeunmo";
	ctx.fillStyle = "#fff";
	ctx.fillText(dmg+"DMG", canvas.width-70, 60);
}

//목숨 그리는 함수
function drawLives() {
	let livesimg = new Image(); 
		livesimg.src = "heart.png";
		for(var i=0;i<lives;i++){
		ctx.drawImage(livesimg,10+50*i,10,40,40)
		}
}
// dx,dy
// function drawdxdy() {
// 	ctx.font = "16px Arial";
// 	ctx.fillStyle = "#0095DD";
// 	ctx.fillText("dx/dy: " + dx +" "+ dy, 240, 20);
// }

function drawStageCount() {
	ctx.font = "bold 30px NeoDunggeunmo";
	ctx.fillStyle = "#fff";
	if(stageCount==3){
		ctx.fillText("BOSSSTAGE", 10,75);
	}
	else{
	ctx.fillText(stageCount+" STAGE", 10,75);
	}
}
//배경 그리기
function drawBackground(){
	if(stageCount==2){
		let background1 = new Image(); 
		background1.src = "desert.jpg";
		ctx.drawImage(background1,0,0,canvas.width,canvas.height)
	}
	else if(stageCount==3){
		let background1 = new Image(); 
		background1.src = "sunset.jpg";
		ctx.drawImage(background1,0,0,canvas.width,canvas.height)
	}
	else{
		let background1 = new Image(); 
		background1.src = "forest.png";
		ctx.drawImage(background1,0,0,canvas.width,canvas.height)
	
	}
}

//10ms마다 업데이트
function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height); //매 프레임마다 공 지우고 canvas 초기화
	drawBackground();
	if(stageCount!=3){
		drawBricks();
		drawBricksLife();
	}
	bossCollisionDetection();	
	drawBall();	
	startBall();
	if(ballCount==2){drawBall2(); startBall2();}
	if(ballCount==3){drawBall2(); startBall2(); drawBall3(); startBall3();}
	if(ballCount==4){drawBall2(); startBall2(); drawBall3(); startBall3(); drawBall4(); startBall4();}		
	drawPaddle();
	drawScore();
	drawLives();
	drawCombo();
	//drawDmg();
	// collisionDetection();
	//drawdxdy();
	drawStageCount();


	//보스전
	if(stageCount ==3){
		drawBoss();
		drawBossLife();
		
		//보스벽돌이 벽에 튀기는 설정
		if (bossX + dx > canvas.width - bossWidth || bossX + dx < 0) {
			ddx = -ddx;
		}
		//if (bossY + dy < 0 || bossY + dy  > canvas.height - paddleHeight) {
		// if (brickY + dy < 0 || brickY+brickWidth/2+dy > canvas.height - paddleHeight) {
	  	if (bossY + dy < 0 || bossY + bossWidth/2 + dy + 120 > canvas.height - paddleHeight) { 
	  		ddy = -ddy;
	  	}	
	  	bossX += ddx;
	  	bossY += ddy;

		if (bossLife<=0) { 
			alert("YOU WIN!");
			score=0;
			combo=0;
			finalpage();
			return;
		}
					  
  	}

	//공이 벽에 튀기는 설정

	for (var c = 0; c < brickColumnCount; c++) {//각각의 모든 블록에 대해
		for (var r = 0; r < brickRowCount; r++) {
			var b = bricks[c][r];
			
			if (b.status > 0) {//블록 체력이 1이상일때
				if (//공 중심좌표가 블록 모서리 내부에 들어가게 되는 경우
					x + ballRadius >= b.x && 
					x - ballRadius <= b.x + brickWidth && 
					y + ballRadius >= b.y && 
					y - ballRadius <= b.y + brickHeight

					){
						// 벽돌 부딛혔을 때
						bStatus1 = 0;

						if (y < b.y || y > b.y + brickHeight){//세로면에 충돌한 경우
							blockkill();dy = -dy;
						}
						else {//가로면에 충돌한 경우
							blockkill();dx = -dx;
						}
						b.status=b.status-dmg; // 블록 체력 데미지만큼 감소; 
						
						//블록체력이 0이하일때
						if(b.status<=0){
							score=score+bricksLife;
							bricksCount = bricksCount -1;
						}
						//블록에 공이 1회 맞았을때 콤보 증가
						combo++;
						//콤보 3회시 다음 1회동안 데미지 두배 옵션
						if(combo==3){
							dmg=dmg*2;

						}
						if(combo>3){
							combo=0;//콤보 0 초기화 
							dmg=startDmg;//데미지 원래대로
						}		
					}

				//ball2 코드(똑같음)
				// if(ballCount==2){
					if (//공 중심좌표가 블록 모서리 내부에 들어가게 되는 경우
						x2 + ballRadius >= b.x && 
						x2 - ballRadius <= b.x + brickWidth && 
						y2 + ballRadius >= b.y && 
						y2 - ballRadius <= b.y + brickHeight &&
						b.status > 0)
						{
							// 벽돌 부딛혔을 때
							bStatus2 = 0;
							if (y2 < b.y || y2 > b.y + brickHeight){//세로면에 충돌한 경우
								blockkill();dy2 = -dy2;
							}
							else {//가로면에 충돌한 경우
								blockkill();dx2 = -dx2;
							}
								b.status=b.status-dmg; // 블록 체력 데미지만큼 감소; 
								
								//블록체력이 0이하일때
								if(b.status<=0){
									score=score+bricksLife;
									bricksCount = bricksCount -1;
								}
								//블록에 공이 1회 맞았을때 콤보 증가
								combo++;
								//콤보 3회시 다음 1회동안 데미지 두배 옵션
								if(combo==3){
									dmg=dmg*2;

								}
								if(combo>3){
									combo=0;//콤보 0 초기화 
									dmg=startDmg;//데미지 원래대로
								}

								
						}
					// }
				//공3
				// if(ballCount==3){
					if (//공 중심좌표가 블록 모서리 내부에 들어가게 되는 경우
						x3 + ballRadius >= b.x && 
						x3 - ballRadius <= b.x + brickWidth && 
						y3 + ballRadius >= b.y && 
						y3 - ballRadius <= b.y + brickHeight &&
						b.status > 0)
						{
							// 벽돌 부딛혔을 때
							bStatus3 = 0;
							if (y3 < b.y || y3 > b.y + brickHeight){//세로면에 충돌한 경우
								blockkill();dy3 = -dy3;
							}
							else {//가로면에 충돌한 경우
								blockkill();dx3 = -dx3;
							}
								b.status=b.status-dmg; // 블록 체력 데미지만큼 감소; 
								
								//블록체력이 0이하일때
								if(b.status<=0){
									score=score+bricksLife;
									bricksCount = bricksCount -1;
								}
								//블록에 공이 1회 맞았을때 콤보 증가
								combo++;
								//콤보 3회시 다음 1회동안 데미지 두배 옵션
								if(combo==3){
									dmg=dmg*2;

								}
								if(combo>3){
									combo=0;//콤보 0 초기화 
									dmg=startDmg;//데미지 원래대로
								}


						}  
					// }
				//공4
				// if(ballCount==4){
					if (//공 중심좌표가 블록 모서리 내부에 들어가게 되는 경우
						x4 + ballRadius >= b.x && 
						x4 - ballRadius <= b.x + brickWidth && 
						y4 + ballRadius >= b.y && 
						y4 - ballRadius <= b.y + brickHeight &&
						b.status > 0)
						{
							// 벽돌 부딛혔을 때
							bStatus4 = 0;
							if (y4 < b.y || y4 > b.y + brickHeight){//세로면에 충돌한 경우
								blockkill();dy4 = -dy4;
							}
							else {//가로면에 충돌한 경우
								blockkill();dx4 = -dx4;
							}
								b.status=b.status-dmg; // 블록 체력 데미지만큼 감소; 
								
								//블록체력이 0이하일때
								if(b.status<=0){
									score=score+bricksLife;
									bricksCount = bricksCount -1;
								}
								//블록에 공이 1회 맞았을때 콤보 증가
								combo++;
								//콤보 3회시 다음 1회동안 데미지 두배 옵션
								if(combo==3){
									dmg=dmg*2;

								}
								if(combo>3){
									combo=0;//콤보 0 초기화 
									dmg=startDmg;//데미지 원래대로
								}

								
						}  
					// }
				
				//You Win		

				if (stageCount!=3 && bricksCount <= 0) { 
					
					
					alert("STAGE CLEAR");
					bricksCount = brickRowCount * brickColumnCount;

					for (var c = 0; c < brickColumnCount; c++) {
						for (var r = 0; r < brickRowCount; r++) {
							bricks[c][r] = { x: 0, y: 0, status: bricksLife }; 
						}
					}
					score=0;
					combo=0;
					dmg=startDmg;//데미지 원래대로

					reload();
					stageCount=stageCount+1;
						
					if(stageCount==4){
				  		  finalpage();
				  	}
				    else{
				  		  showSlide();
				  	}
				  	return;  
				  	         
				}			
			}	
		}
	}

	//키보드 입력 패들 이동속도
	if (rightPressed && paddleX < canvas.width - paddleWidth) {
		paddleX += 7;
	} else if (leftPressed && paddleX > 0) {
		paddleX -= 7;
	}



	requestAnimationFrame(draw);



}

function hideGame(){
	canvas.style.display="none";
}


function showGame(){
	canvas.style.display="block";
}

/*hideGame();*/

//실행
/*draw();*/
