let dice1 = 0;
let dice2 = 0;

let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let mainText = document.getElementById("main-txt");

function throwDice() {
  dice1 = Math.floor(Math.random() * 6) + 1;
  dice2 = Math.floor(Math.random() * 6) + 1;

  let path1 = "./images/dice" + dice1 + ".png";
  let path2 = "./images/dice" + dice2 + ".png";


  img1.setAttribute("src", `${path1}`);
  img2.setAttribute("src", `${path2}`);

  if (dice1 > dice2) {
    mainText.innerHTML = "🚩 Player 1 Wins!";
  } else if (dice1 < dice2) {
    mainText.innerHTML = "Player 2 Wins! 🚩";
  } else {
    mainText.innerHTML = "Draw!";
  }
}
