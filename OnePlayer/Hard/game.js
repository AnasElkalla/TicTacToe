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
  // function alt() {
  //   e.code = 18;
  // }
  // setTimeout(alt,1000)
  // setInterval(alt, 30000);
});
exit.addEventListener("click", function (e) {
  window.location.href = window.location.href;
  window.close("", "_self", "");
});
newGame.addEventListener("click", function () {
  makeSound();
  const homePage = function () {
    window.location.href = "../../index.html";
  };
  setInterval(homePage, 1000);
});
home.addEventListener("click", function () {
  makeSound();
  const homePage = function () {
    window.location.href = "../../index.html";
  };
  setInterval(homePage, 1000);
});
const turn = document.querySelector(".turn");
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
function reload() {
  window.location.href = window.location.href;
}
function clear() {
  [
    cell1.textContent,
    cell2.textContent,
    cell3.textContent,
    cell4.textContent,
    cell5.textContent,
    cell6.textContent,
    cell7.textContent,
    cell8.textContent,
    cell9.textContent,
  ] = ["", "", "", "", "", "", "", "", ""];

  mark = ["", "", "", "", "", "", "", "", ""];
  results = [];
  message.textContent = "";
  makeSound();
  starter = Math.floor(Math.random() * 2);
  ended = false;
  clearGame.style.display = "inline-block";
}
const drawgame = function () {
  message.textContent = "DRAW";
  console.log("draw");
  let draw = new Audio("draw.mp3");
  document.body.appendChild(message);
  draw.play();
  setTimeout(reload, 3000);
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
      if (c === "X" && starter === 0) {
        ended = true;

        message.textContent = "You Win!";
        let win = new Audio("win.mp3");
        console.log("X");
        win.play();
        clearGame.style.display = "none";
        setTimeout(reload, 3000);
      } else if (c === "O" && starter === 0) {
        ended = true;

        message.textContent = "You Lose";
        let win = new Audio("draw.mp3");
        console.log("O");
        win.play();
        clearGame.style.display = "none";
        setTimeout(reload, 3000);
      } else if (c === "X" && starter === 1) {
        ended = true;

        message.textContent = "You Lose";
        let win = new Audio("draw.mp3");
        console.log("X");
        win.play();
        clearGame.style.display = "none";
        setTimeout(reload, 3000);
      } else if (c === "O" && starter === 1) {
        ended = true;

        message.textContent = "You Win";
        let win = new Audio("win.mp3");
        console.log("O");
        win.play();
        clearGame.style.display = "none";
        setTimeout(reload, 3000);
      }
    }
  }
  if (ended === true) {
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
  if (results.length === 9 && message.textContent === "") {
    clearGame.style.display = "none";
    setTimeout(drawgame, 3000);
  }
};

if (ended === false) {
  starter = Math.floor(Math.random() * 2);
  console.log(starter);
  clearGame.addEventListener("click", reload);
  if (starter === 0) {
    clearGame.style.display = "inline-block";

    turn.textContent = "You Start";
    for (let i = 0; i < 9; i++) {
      document.addEventListener("click", function (e) {
        for (let i = 0; i < 9; i++) {
          if (
            e.target === table[i] &&
            !results.includes(e.target) &&
            active === true
          ) {
            table[i].textContent = "X";
            results.push(table[i]);
            mark[i] = "X";
            console.log("step1A");
            turn.textContent = "Computer";
            makeSound();
            statusGame();
            change();
            continue;
          }
        }
        const playerX = function () {
          for (let x = 0; x < 9; x++) {
            if (active === false && ended === false) {
              for (let a = 0; a < 8; a++) {
                const winningGame = winning[a];
                let first = mark[winningGame[0]];
                let second = mark[winningGame[1]];
                let third = mark[winningGame[2]];
                if (
                  first === second &&
                  second === "O" &&
                  mark[winningGame[2]] === "" &&
                  active === false
                ) {
                  console.log(winningGame[2]);
                  table[winningGame[2]].textContent = "O";
                  results.push(table[winningGame[2]]);
                  mark[winningGame[2]] = "O";
                  turn.textContent = "Your Turn";
                  console.log(mark);
                  makeSound();
                  statusGame();
                  change();
                  break;
                } else if (
                  first === third &&
                  third === "O" &&
                  mark[winningGame[1]] === "" &&
                  active === false
                ) {
                  console.log(winningGame[1]);
                  table[winningGame[1]].textContent = "O";
                  results.push(table[winningGame[1]]);
                  mark[winningGame[1]] = "O";
                  turn.textContent = "Your Turn";
                  console.log(mark);
                  makeSound();
                  statusGame();
                  change();
                  break;
                } else if (
                  second === third &&
                  third === "O" &&
                  mark[winningGame[0]] === "" &&
                  active === false
                ) {
                  console.log(winningGame[0]);
                  table[winningGame[0]].textContent = "O";
                  results.push(table[winningGame[1]]);
                  mark[winningGame[0]] = "O";
                  turn.textContent = "Your Turn";
                  console.log(mark);
                  makeSound();
                  statusGame();
                  change();
                  break;
                } else if (
                  first === second &&
                  second === "X" &&
                  mark[winningGame[2]] === "" &&
                  active === false
                ) {
                  console.log(winningGame[2]);
                  table[winningGame[2]].textContent = "O";
                  results.push(table[winningGame[2]]);
                  mark[winningGame[2]] = "O";
                  turn.textContent = "Your Turn";
                  console.log(mark);
                  makeSound();
                  statusGame();
                  change();
                  break;
                } else if (
                  first === third &&
                  third === "X" &&
                  mark[winningGame[1]] === "" &&
                  active === false
                ) {
                  console.log(winningGame[1]);
                  table[winningGame[1]].textContent = "O";
                  results.push(table[winningGame[1]]);
                  mark[winningGame[1]] = "O";
                  turn.textContent = "Your Turn";
                  console.log(mark);
                  makeSound();
                  statusGame();
                  change();
                  break;
                } else if (
                  second === third &&
                  third === "X" &&
                  mark[winningGame[0]] === "" &&
                  active === false
                ) {
                  console.log(winningGame[0]);
                  table[winningGame[0]].textContent = "O";
                  results.push(table[winningGame[1]]);
                  mark[winningGame[0]] = "O";
                  turn.textContent = "Your Turn";
                  console.log(mark);
                  makeSound();
                  statusGame();
                  change();
                  break;
                }
              }
            }
            let roll = Math.floor(Math.random() * 9);
            if (mark[roll] === "" && active === false && ended === false) {
              table[roll].textContent = "O";
              results.push(table[roll]);
              mark[roll] = "O";
              console.log("step1B");
              turn.textContent = "Your Turn";
              makeSound();
              statusGame();
              change();
              break;
            }
          }
        };
        setTimeout(playerX, 2000);
      });
    }
  }

  if (starter === 1) {
    const clicker = function () {
      let click = new Audio("click.mp3");
      click.play();
      active = false;
    };
    let start = Math.floor(Math.random() * 9);
    table[start].textContent = "X";
    results.push(table[start]);
    mark[start] = "X";
    console.log("step2A");
    clicker();
    statusGame();
    change();
    turn.textContent = "Your Turn";

    for (let i = 0; i < 9; i++) {
      document.addEventListener("click", function (e) {
        for (let i = 0; i < 9; i++) {
          if (
            e.target === table[i] &&
            !results.includes(e.target) &&
            active === true
          ) {
            table[i].textContent = "O";
            results.push(table[i]);
            mark[i] = "O";
            turn.textContent = "Computer";

            console.log("step2B");
            clicker();
            statusGame();
            active = false;
          }
          continue;
        }

        const playerO = function () {
          for (let x = 0; x < 9; x++) {
            if (active === false && ended === false) {
              for (let a = 0; a < 8; a++) {
                const winningGame = winning[a];
                let first = mark[winningGame[0]];
                let second = mark[winningGame[1]];
                let third = mark[winningGame[2]];
                if (
                  first === second &&
                  second === "X" &&
                  mark[winningGame[2]] === "" &&
                  active === false
                ) {
                  console.log(winningGame[2]);
                  table[winningGame[2]].textContent = "X";
                  results.push(table[winningGame[2]]);
                  mark[winningGame[2]] = "X";
                  turn.textContent = "Your Turn";
                  console.log(mark);
                  clicker();
                  statusGame();
                  change();
                  break;
                } else if (
                  first === third &&
                  third === "X" &&
                  mark[winningGame[1]] === "" &&
                  active === false
                ) {
                  console.log(winningGame[1]);
                  table[winningGame[1]].textContent = "X";
                  results.push(table[winningGame[1]]);
                  mark[winningGame[1]] = "X";
                  turn.textContent = "Your Turn";
                  console.log(mark);
                  clicker();
                  statusGame();
                  change();
                  break;
                } else if (
                  second === third &&
                  second === "X" &&
                  mark[winningGame[0]] === "" &&
                  active === false
                ) {
                  console.log(winningGame[0]);
                  table[winningGame[0]].textContent = "X";
                  results.push(table[winningGame[1]]);
                  mark[winningGame[0]] = "X";
                  turn.textContent = "Your Turn";
                  console.log(mark);
                  clicker();
                  statusGame();
                  change();
                  break;
                } else if (
                  first === second &&
                  second === "O" &&
                  mark[winningGame[2]] === "" &&
                  active === false
                ) {
                  console.log(winningGame[2]);
                  table[winningGame[2]].textContent = "X";
                  results.push(table[winningGame[2]]);
                  mark[winningGame[2]] = "X";
                  turn.textContent = "Your Turn";
                  console.log(mark);
                  clicker();
                  statusGame();
                  change();
                  break;
                } else if (
                  first === third &&
                  third === "O" &&
                  mark[winningGame[1]] === "" &&
                  active === false
                ) {
                  console.log(winningGame[1]);
                  table[winningGame[1]].textContent = "X";
                  results.push(table[winningGame[1]]);
                  mark[winningGame[1]] = "X";
                  turn.textContent = "Your Turn";
                  console.log(mark);
                  clicker();
                  statusGame();
                  change();
                  break;
                } else if (
                  second === third &&
                  second === "O" &&
                  mark[winningGame[0]] === "" &&
                  active === false
                ) {
                  console.log(winningGame[0]);
                  table[winningGame[0]].textContent = "X";
                  results.push(table[winningGame[1]]);
                  mark[winningGame[0]] = "X";
                  turn.textContent = "Your Turn";
                  console.log(mark);
                  clicker();
                  statusGame();
                  change();
                  break;
                }
              }
            }

            if (
              active === false &&
              results[results.length - 1].textContent === "O" &&
              ended === false
            ) {
              let roll = Math.floor(Math.random() * 9);
              if (mark[roll] === "") {
                table[roll].textContent = "X";
                results.push(table[roll]);
                mark[roll] = "X";
                turn.textContent = "Your Turn";

                console.log("step1B");

                clicker();
                statusGame();
                change();
              }
            }
          }
        };
        setTimeout(playerO, 2000);
      });
    }
  }
}
// twoPlayers.addEventListener("click", function (e) {
//   makeSound();
//   twoPlayers.classList.add("mode");
//   const removeTwo = function () {
//     twoPlayers.style.display = "none";
//     twoPlayers.classList.remove("mode");
//   };
//   setTimeout(removeTwo, 2000);
//   onePlayer.style.display = "none";
//   leaf.style.display = "none";
//   branch.style.display = "none";

//   clearGame.style.display = "inline-block";
//   const showGrid = function () {
//     container.style.display = "grid";
//   };
//   setTimeout(showGrid, 2000);
//   makeSound();
//   clearGame.addEventListener("click", reload);

//   document.addEventListener("click", function (e) {
//     clearGame.addEventListener("click", reload);

//     turn.textContent = "Player One";

//     console.log(e);
//     for (let i = 0; i <= 8; i++) {
//       if (
//         e.target === table[i] &&
//         active === true &&
//         !results.includes(table[i])
//       ) {
//         table[i].textContent = "X";
//         results.push(table[i]);
//         mark[i] = "X";
//         turn.textContent = "Player Two";

//         let click = new Audio("click.mp3");
//         click.play();
//         statusGame();

//         change();
//       } else if (
//         e.target === table[i] &&
//         active === false &&
//         !results.includes(table[i] && results[results.length - 1] === "X")
//       ) {
//         table[i].textContent = "O";
//         results.push(table[i]);
//         mark[i] = "O";
//         turn.textContent = "Player One";

//         let click = new Audio("click.mp3");
//         click.play();
//         statusGame();

//         change();
//       }
//     }
//   });
//   clearGame.addEventListener("click", clear);
// });
// const oneplayerGame = function () {
//   if (starter === 0) {
//     turn.textContent = "You Start";

//     document.addEventListener("click", function (e) {
//       const clicker = function () {
//         let click = new Audio("click.mp3");
//         click.play();
//       };
//       for (let i = 0; i < 9; i++) {
//         if (
//           results.length === 0 ||
//           results[results.length - 1].textContent === "O"
//         ) {
//           if (e.target === table[i] && !results.includes(e.target)) {
//             table[i].textContent = "X";
//             results.push(table[i]);
//             mark[i] = "X";
//             console.log("step1A");
//             turn.textContent = "Computer";
//             clicker();
//             statusGame();
//             change();
//           }
//         }
//       }
//       const playerX = function () {
//         for (let x = 0; x < 9; x++) {
//           if (active === false) {
//             let roll = Math.floor(Math.random() * 9);
//             if (mark[roll] === "") {
//               table[roll].textContent = "O";
//               results.push(table[roll]);
//               mark[roll] = "O";
//               console.log("step1B");
//               turn.textContent = "Your Turn";

//               clicker();
//               statusGame();
//               change();
//             }
//           }
//         }
//       };
//       setTimeout(playerX, 2000);
//     });
//   }

//   if (starter === 1) {
//     turn.textContent = "Computer";

//     const clicker = function () {
//       let click = new Audio("click.mp3");
//       click.play();
//       active = false;
//     };
//     let start = Math.floor(Math.random() * 9);
//     table[start].textContent = "X";
//     results.push(table[start]);
//     mark[start] = "X";
//     console.log("step2A");
//     clicker();
//     statusGame();
//     change();
//     turn.textContent = "Your Turn";

//     for (let i = 0; i < 9; i++) {
//       document.addEventListener("click", function (e) {
//         if (
//           e.target === table[i] &&
//           !results.includes(e.target) &&
//           active === true
//         ) {
//           table[i].textContent = "O";
//           results.push(table[i]);
//           mark[i] = "O";
//           turn.textContent = "Computer";

//           console.log("step2B");
//           clicker();
//           statusGame();
//           active = false;
//         }
//         console.log(active);
//         const playerO = function () {
//           if (
//             active === false &&
//             results[results.length - 1].textContent === "O"
//           ) {
//             let roll = Math.floor(Math.random() * 9);
//             if (mark[roll] === "") {
//               table[roll].textContent = "X";
//               results.push(table[roll]);
//               mark[roll] = "X";
//               turn.textContent = "Your Turn";

//               console.log("step1B");

//               clicker();
//               change();
//             }
//           }
//         };
//         setTimeout(playerO, 2000);
//       });
//     }
//   }
// };

// } else if (starter === 1) {
//   const clicker = function () {
//     let click = new Audio("click.mp3");
//     click.play();
//   };
//   active = false;

//   for (let x = 0; x < 9; x++) {
//     if (mark.length - 1 === x && active === false) {
//       let start = Math.floor(Math.random() * 9);
//       table[start].textContent = "X";
//       results.push(table[start]);
//       mark[start] = "X";
//       console.log("step2A");
//       clicker();
//       statusGame();
//       change();
//     }
//   }
//   for (let i = 0; i < 9; i++) {
//     document.addEventListener("click", function (e) {
//       if (
//         e.target === table[i] &&
//         !results.includes(e.target) &&
//         active === true
//       ) {
//         table[i].textContent = "O";
//         results.push(table[i]);
//         mark[i] = "O";
//         console.log("step2B");
//         clicker();
//         statusGame();
//         change();
//       }
//     });
//   }
// }
