var canvas;
var form;
var database;
var allCards, shuffledCards;
var gameState = 0;
var playerCount;
var allPlayers;
var player;
var game;
var chatCp, chatNcp;



function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight - 30);
  database = firebase.database();
  game = new Game();
  game.start();
  Card.getCardInfo();
  chatCp = new ChatBoxCp();
  chatncp = new ChatBoxNcp();




}

function draw() {
  background(255, 255, 255);
  if (playerCount === 2) {
    game.update(1);
  }
  if (gameState === 1) {
    clear();
    game.play();
    
  }
  var arrplayer1 = [];
  var arrplayer2 = [];
  /*for (var i = 1; i <= 20; i++) {
    if (i === 0 || i % 2 === 0) {
      arrplayer1.push(allCards[i]);


    }
    else {
      arrplayer2.push(allCards[i]);
    }
  }*/

  if (allCards !== undefined) {

    var shuffledCards = shuffle(allCards);

    //console.log(allCards[9].cardContent);
    //console.log(allCards[10]);


  }

  drawSprites();
}