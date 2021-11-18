"use strict";
const container = document.querySelector(".container");
const clearGame = document.querySelector("#clear");
const leaf = document.querySelector(".leaf");
const branch = document.querySelector(".branch");
const onePlayer = document.querySelector("#onePlayer");
const twoPlayers = document.querySelector("#twoPlayers");
const cell1 = document.querySelector(".cell1");
const cell2 = document.querySelector(".cell2");
const cell3 = document.querySelector(".cell3");
const cell4 = document.querySelector(".cell4");
const cell5 = document.querySelector(".cell5");
const cell6 = document.querySelector(".cell6");
const cell7 = document.querySelector(".cell7");
const cell8 = document.querySelector(".cell8");
const cell9 = document.querySelector(".cell9");
const message = document.querySelector("#message");
const sliderContainer = document.querySelector(".slide");
const levelNumber = document.querySelector(".levelNumber");
const slider = document.querySelector("#level");
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
const selectLevel = document.querySelector(".selectLevel");
const home = document.querySelector(".fa-home");
const body = document.querySelector("body");
const popUp = document.querySelector(".popUp");
const menu = document.querySelector(".fa-bars");

const newGame = document.querySelector(".newGame");
const scores = document.querySelector(".HighScores");
const exit = document.querySelector(".exitGame");
const buttons = document.querySelectorAll("button");
let activeMenu = false;
const makeSound = function () {
  let click = new Audio("click.mp3");
  click.play();
};
menu.addEventListener("click", function () {
  makeSound();
  if (activeMenu === false) {
    popUp.style.display = "flex";
    activeMenu = true;
  } else {
    popUp.style.display = "none";
    activeMenu = false;
  }
});
exit.addEventListener("click", function (e) {
  window.location.href = window.location.href;
  window.close("", "_self", "");
});
newGame.addEventListener("click", function () {
  makeSound();
  const homePage = function () {
    window.location.href = "../index.html";
  };
  setInterval(homePage, 1000);
});
home.addEventListener("click", function () {
  makeSound();
  const homePage = function () {
    window.location.href = "../index.html";
  };
  setInterval(homePage, 1000);
});
const turn = document.querySelector(".turn");
turn.textContent = "Player One";
let order = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
let results = [];
let table = [cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9];
let mark = ["", "", "", "", "", "", "", "", ""];
let rollOrder = [];
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let winning = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let active = true;
let player;
let starter;
let gameMode;
let ended = false;
const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const change = function () {
  if (active) {
    active = false;
  } else {
    active = true;
  }
};
const x = window.matchMedia("(min-width: 600px)");

const drawgame = function () {
  message.textContent = "DRAW";
  console.log("draw");
  let draw = new Audio("draw.mp3");
  document.body.appendChild(message);
  draw.play();
  setTimeout(reload, 5000);
  ended = true;
  active = true;
};
const statusGame = function () {
  for (let i = 0; i < winning.length; i++) {
    const winCondition = winning[i];

    let a = mark[winCondition[0]];
    let b = mark[winCondition[1]];
    let c = mark[winCondition[2]];
    if (a === b && b === c) {
      if (c === "X") {
        ended = true;

        message.textContent = "Player one Wins";
        let win = new Audio("win.mp3");
        console.log("X");
        win.play();
        clearGame.style.display = "none";
        setTimeout(reload, 3000);
      } else if (c === "O") {
        ended = true;

        message.textContent = "Player two Wins";
        let win = new Audio("win.mp3");
        console.log("O");
        win.play();
        clearGame.style.display = "none";
        setTimeout(reload, 3000);
      }
    }
  }
  if (results.length === 9 && message.textContent === "") {
    clearGame.style.display = "none";
    setTimeout(drawgame, 1000);
  }
};

function reload() {
  gameMode = "Two Players";
  window.location.href = window.location.href;
  turn.textContent = "Player One";
}

makeSound();
clearGame.addEventListener("click", reload);

document.addEventListener("click", function (e) {
  clearGame.addEventListener("click", reload);

  turn.textContent = "Player One";
  if (ended === false) {
    console.log(e);
    for (let i = 0; i <= 8; i++) {
      if (e.target.textContent === "") {
        if (
          e.target === table[i] &&
          active === true &&
          !results.includes(table[i])
        ) {
          table[i].textContent = "X";
          results.push(table[i]);
          mark[i] = "X";
          turn.textContent = "Player Two";

          let click = new Audio("click.mp3");
          click.play();
          statusGame();

          change();
        } else if (
          e.target === table[i] &&
          active === false &&
          !results.includes(table[i])
        ) {
          table[i].textContent = "O";
          results.push(table[i]);
          mark[i] = "O";
          turn.textContent = "Player One";

          let click = new Audio("click.mp3");
          click.play();
          statusGame();

          change();
        }
      }
    }
  } else if (ended === true) {
    for (let i = 0; i < 9; i++) {
      if (e.target.textContent === "X") {
        e.target.textContent = "X";
      } else if (e.target.textContent === "O") {
        e.target.textContent = "O";
      } else if (e.target.textContent === "") {
        e.target.textContent = "";
      }
    }
  }
});
