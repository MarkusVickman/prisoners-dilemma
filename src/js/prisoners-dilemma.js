
let newGame = document.getElementById("game");
let newBotGame = document.getElementById("botgame");
let stopGame = document.getElementById("gamestop");
let friendlyBtn = document.getElementById("friendly");
let aggressiveBtn = document.getElementById("aggressive");

let triangle1 = document.getElementById("triangle1");
let triangle3 = document.getElementById("triangle3");
let triangle5 = document.getElementById("triangle5");
let triangle7 = document.getElementById("triangle7");

let triangle2 = document.getElementById("triangle2");
let triangle4 = document.getElementById("triangle4");
let triangle6 = document.getElementById("triangle6");
let triangle8 = document.getElementById("triangle8");

let scoreP1 = document.getElementById("scorep1");
let scoreP2 = document.getElementById("scorep2");
let highScore = document.getElementById("highscore");

let greenP1 = document.getElementById("green-p1");
let redP1 = document.getElementById("red-p1");
let greenP2 = document.getElementById("green-p2");
let redP2 = document.getElementById("red-p2");

let turnP1 = document.getElementById("turnp1");
let turnP2 = document.getElementById("turnp2");

let whosTurn = 1;

let playerOneChoice;
let playerTwoChoice;

let playerOneScore = 0;
let playerTwoScore = 0;
let bot;

newBotGame.addEventListener("click", function (e) {
  bot = 1;
  botArray = ["friendly", "friendly", "aggressive", "friendly", "friendly"];
  startNewGame();
})

newGame.addEventListener("click", function (e) {
  bot = 0;
  startNewGame();
});

function startNewGame() {
  friendlyBtn.style.display = "block";
  aggressiveBtn.style.display = "block";
  friendlyBtn.style.display = "block";
  turnP1.style.display = "block";
  turnP2.style.display = "none";
  newGame.style.display = "none";
  newBotGame.style.display = "none";
  stopGame.style.display = "block";
  highScore.innerHTML = "";
  playerOneScore = 0;
  playerTwoScore = 0;
  scoreP1.innerHTML = playerOneScore;
  scoreP2.innerHTML = playerTwoScore;
  whosTurn = 1;
  startAnimation();
}

stopGame.addEventListener("click", function (e) {
  friendlyBtn.style.display = "none";
  aggressiveBtn.style.display = "none";
  friendlyBtn.style.display = "none";
  turnP1.style.display = "none";
  newGame.style.display = "block";
  stopGame.style.display = "none";
  newBotGame.style.display = "block";

  if (playerOneScore < playerTwoScore) {
    highScore.innerHTML = "Spelare 2 vann på " + playerTwoScore + " poäng!";
  }

  else if (playerOneScore > playerTwoScore) {
    highScore.innerHTML = "Spelare 1 vann på " + playerOneScore + " poäng!";
  }
  startAnimation();
})



friendlyBtn.addEventListener("click", function (e) {
  if (whosTurn === 1) {
    playerOneChoice = 1;
    whosTurn = 2;
    turnP1.style.display = "none";
    turnP2.style.display = "block";
    greenP1.style.backgroundColor = "greenyellow";
    triangle1.style.backgroundColor = "#7073B4";
    setTimeout(function () {
      triangle1.style.backgroundColor = "#30325b";
      greenP1.style.backgroundColor = "green";
    }, 1000);
    if(bot === 1){
      botArray.shift(); 
      botArray.push("friendly");
      botTurn();
    }
  }
  else if (whosTurn === 2 && bot === 0) {
    playerTwoChoice = 1;
    whosTurn = 1;
    turnP1.style.display = "block";
    turnP2.style.display = "none";
    greenP2.style.backgroundColor = "greenyellow";
    triangle2.style.backgroundColor = "#C78DC7";
    setTimeout(function () {
      triangle2.style.backgroundColor = "#8F468F";
      greenP1.style.backgroundColor = "green";
    }, 1000);
    whoWon();
  }
})



aggressiveBtn.addEventListener("click", function (e) {
  if (whosTurn === 1) {
    playerOneChoice = 2;
    whosTurn = 2;
    turnP1.style.display = "none";
    turnP2.style.display = "block";
    redP1.style.backgroundColor = "red";
    triangle3.style.backgroundColor = "#7073B4";
    triangle7.style.backgroundColor = "#7073B4";
    setTimeout(function () {
      redP1.style.backgroundColor = "darkred";
      triangle3.style.backgroundColor = "#30325b";
      triangle7.style.backgroundColor = "#30325b";
    }, 1000);
    if(bot === 1){
      botArray.shift(); 
      botArray.push("aggressive");
      botTurn();
    }
  }
  else if (whosTurn === 2 && bot === 0) {
    playerTwoChoice = 2;
    whosTurn = 1;
    turnP1.style.display = "block";
    turnP2.style.display = "none";
    redP2.style.backgroundColor = "red";
    triangle6.style.backgroundColor = "#C78DC7";
    triangle8.style.backgroundColor = "#C78DC7";
    setTimeout(function () {
      redP2.style.backgroundColor = "darkred";
      triangle6.style.backgroundColor = "#8F468F";
      triangle8.style.backgroundColor = "#8F468F";
    }, 1000);
    whoWon();
  }
})

let botArray;

function botTurn() {
  let x = Math.floor(Math.random() * (5 - 1 + 1));
  if(botArray[x] === "friendly"){
    playerTwoChoice = 1;
    whosTurn = 1;
    turnP1.style.display = "block";
    turnP2.style.display = "none";
    greenP2.style.backgroundColor = "greenyellow";
    triangle2.style.backgroundColor = "#C78DC7";
    setTimeout(function () {
      greenP2.style.backgroundColor = "green";
      triangle2.style.backgroundColor = "#8F468F";
    }, 1000);
    whoWon();
  
  }

  else if (botArray[x] === "aggressive"){
    playerTwoChoice = 2;
    whosTurn = 1;
    turnP1.style.display = "block";
    turnP2.style.display = "none";
    redP2.style.backgroundColor = "red";
    triangle6.style.backgroundColor = "#C78DC7";
    triangle8.style.backgroundColor = "#C78DC7";
    setTimeout(function () {
      redP2.style.backgroundColor = "darkred";
      triangle6.style.backgroundColor = "#8F468F";
      triangle8.style.backgroundColor = "#8F468F";
    }, 1000);
    whoWon();
  }
  console.log(x);
  //array längd 5? slumpa från 5 senaste
}

function whoWon() {
  if (playerOneChoice === 1 && playerTwoChoice === 1) {
    playerOneScore = playerOneScore + 3;
    playerTwoScore = playerTwoScore + 3;
  }
  else if (playerOneChoice === 1 && playerTwoChoice === 2) {
    playerTwoScore = playerTwoScore + 5;
  }
  else if (playerOneChoice === 2 && playerTwoChoice === 2) {
    playerOneScore = playerOneScore + 1;
    playerTwoScore = playerTwoScore + 1;
  }
  else if (playerOneChoice === 2 && playerTwoChoice === 1) {
    playerOneScore = playerOneScore + 5;
  }
  scoreP1.innerHTML = playerOneScore;
  scoreP2.innerHTML = playerTwoScore;
  scoreP1.style.display = "block";
  scoreP2.style.display = "block";

}


function startAnimation() {
  triangle1.style.backgroundColor = "#7073B4";
  triangle3.style.backgroundColor = "#7073B4";
  triangle5.style.backgroundColor = "#7073B4";
  triangle7.style.backgroundColor = "#7073B4";
  triangle2.style.backgroundColor = "#C78DC7";
  triangle4.style.backgroundColor = "#C78DC7";
  triangle6.style.backgroundColor = "#C78DC7";
  triangle8.style.backgroundColor = "#C78DC7";
  setTimeout(function () {
    triangle2.style.backgroundColor = "#8F468F";
  }, 300);
  setTimeout(function () {
    triangle5.style.backgroundColor = "#30325b";
  }, 600);
  setTimeout(function () {
    triangle6.style.backgroundColor = "#8F468F";
  }, 900);
  setTimeout(function () {
    triangle8.style.backgroundColor = "#8F468F";
  }, 1200);
  setTimeout(function () {
    triangle7.style.backgroundColor = "#30325b";
  }, 1500);
  setTimeout(function () {
    triangle4.style.backgroundColor = "#8F468F";
  }, 1800);
  setTimeout(function () {
    triangle3.style.backgroundColor = "#30325b";
  }, 2100);
  setTimeout(function () {
    triangle1.style.backgroundColor = "#30325b";
  }, 2400);

  greenP1.style.backgroundColor = "greenyellow";
  greenP2.style.backgroundColor = "greenyellow";
  redP1.style.backgroundColor = "red";
  redP2.style.backgroundColor = "red";
  setTimeout(function () {
    greenP1.style.backgroundColor = "green";
    greenP2.style.backgroundColor = "green";
    redP1.style.backgroundColor = "darkred";
    redP2.style.backgroundColor = "darkred";
  }, 2700);
  setTimeout(function () {
    greenP1.style.backgroundColor = "greenyellow";
    greenP2.style.backgroundColor = "greenyellow";
    redP1.style.backgroundColor = "red";
    redP2.style.backgroundColor = "red";
  }, 3000);
  setTimeout(function () {
    greenP1.style.backgroundColor = "green";
    greenP2.style.backgroundColor = "green";
    redP1.style.backgroundColor = "darkred";
    redP2.style.backgroundColor = "darkred";
  }, 3300);
  setTimeout(function () {
    greenP1.style.backgroundColor = "greenyellow";
    greenP2.style.backgroundColor = "greenyellow";
    redP1.style.backgroundColor = "red";
    redP2.style.backgroundColor = "red";
  }, 3600);
  setTimeout(function () {
    greenP1.style.backgroundColor = "green";
    greenP2.style.backgroundColor = "green";
    redP1.style.backgroundColor = "darkred";
    redP2.style.backgroundColor = "darkred";
  }, 3900);
}