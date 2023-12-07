var isO = false;
var isEnded = false;

var X = [];
var O = [];
let one = 0,two = 0,three = 0;
let win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]; //winning positions

var won = document.getElementById("won");

function add(index) {
  // checking if there is space or is it a tie 
  if(one===6||two===6||three===6){
    tie();
    return;
  }

  //To check the column it is in
  let column = Math.ceil(index % 3);
  // For the index it should go to
  let finalIndex = column;
  switch (column) {
    case 0:
      finalIndex += one * 3;
      one += 1;
      break;
    case 1:
      finalIndex += two * 3;
      two++;
      break;
    case 2:
      finalIndex += three * 3;
      three++;
      break;
  }
  isO == false ? X.push(finalIndex) : O.push(finalIndex);

  //adding the img of box in the index
  let box = document.getElementById(finalIndex);
  box.innerHTML = `<img src="./${isO ? "O" : "X"}.jpg">`;
  let img = box.getElementsByTagName("img");
  img[0].style.top = `-${img[0].getBoundingClientRect().top}px`;

  //changing turn and checking for win
  isO = !isO;
  ended = checkWin(isO ? X : O);
  if (ended) congratulate();

  //changing player number
  document.getElementById("player").innerText = `Player: ${isO ? "2" : "1"}`;
}

function congratulate() {
  won.style.display = "inline-block";
  document.getElementById("wonMsgTwo").innerText = `Player ${
    isO ? "1" : "2"
  } wins!`;
  document.getElementById("board").style.display = "none";
  document.getElementById("player").style.display = "none";  
}

function tie() {
  won.style.display = "inline-block";
  document.getElementById("wonMsgTwo").innerText = `It's a tie!`;
  document.getElementById("board").style.display = "none";
  document.getElementById("player").style.display = "none";
  
}

function checkWin(val) {
  for (let rwin of win) {
    //row 1 to 3
    if (
      val.includes(rwin[0]) &&
      val.includes(rwin[1]) &&
      val.includes(rwin[2])
    ) {
      return true;
    }
    //row 2 to 4
    if (
      val.includes(rwin[0] + 3) &&
      val.includes(rwin[1] + 3) &&
      val.includes(rwin[2] + 3)
    ) {
      return true;
    }
    // row 3 to 5
    if (
      val.includes(rwin[0] + 6) &&
      val.includes(rwin[1] + 6) &&
      val.includes(rwin[2] + 6)
    ) {
      return true;
    }
    //row 4 to 6
    if (
      val.includes(rwin[0] + 9) &&
      val.includes(rwin[1] + 9) &&
      val.includes(rwin[2] + 9)
    ) {
      return true;
    }
  }
  return false;
}
//to reset and restart the game
function restart() {
  // for removing the congratulations message
  won.style.display = "none";

  //resetting the values
  isO = false;
  isEnded = false;

  X = [];
  O = [];
  (one = 0), (two = 0), (three = 0);
  let boxes = document.getElementsByClassName("box");
  for (box of boxes) {
    box.innerHTML = "";
  }

  // displaying player turn and board
  document.getElementById("player").style.display = "block";
  document.getElementById("player").innerText = "Player 1";
  document.getElementById("board").style.display = "inline-block";
}
