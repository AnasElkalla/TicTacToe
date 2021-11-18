"use strict";
const leaf = document.querySelector(".leaf");
const branch = document.querySelector(".branch");
const onePlayer = document.querySelector("#onePlayer");
const twoPlayers = document.querySelector("#twoPlayers");
const sliderContainer = document.querySelector(".slide");
const levelNumber = document.querySelector(".levelNumber");
const slider = document.querySelector("#level");
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
const selectLevel = document.querySelector(".selectLevel");
const home = document.querySelector(".fa-home");
const turn = document.querySelector(".turn");
const body = document.querySelector("body");
const popUp = document.querySelector(".popUp");
const menu = document.querySelector(".fa-bars");
const newGame = document.querySelector(".newGame");
const scores = document.querySelector(".HighScores");
const exit = document.querySelector(".exitGame");
const buttons = document.querySelectorAll("button");
function reload() {
  window.location.href = window.location.href;
}
slider.style.display = "none";
previous.style.display = "none";
next.style.display = "none";
selectLevel.style.display = "none";
const y = window.matchMedia("(max-width: 600px)");
function myFunction(y) {
  if (!y.matches) {
    previous.style.display = "inline-block";
    next.style.display = "inline-block";
  }
  if (y.matches) {
    previous.style.display = "none";
    next.style.display = "none";
  }
}

onePlayer.addEventListener("click", function () {
  makeSound();

  slider.style.display = "block";
  myFunction(y);
  selectLevel.style.display = "inline-block";
  slider.value = 1;
  levelNumber.textContent = "Easy";
});
slider.addEventListener("change", function () {
  if (slider.value == 1) {
    levelNumber.textContent = "Easy";
  } else if (slider.value == 2) {
    levelNumber.textContent = "Medium";
  } else if (slider.value == 3) {
    levelNumber.textContent = "Hard";
  }
});
selectLevel.addEventListener("click", function () {
  makeSound();
  if (slider.value == 1) {
    window.open("One Player/Easy/index.html");
  } else if (slider.value == 2) {
    window.location.href = "One Player/Medium/index.html";
  } else if (slider.value == 3) {
    window.location.href = "One Player/Hard/index.html";
  }
});

twoPlayers.addEventListener("click", function () {
  makeSound();
  window.open("Two Players/index.html");
});
let activeMenu = false;

menu.addEventListener("click", function (e) {
  makeSound();
  if (activeMenu === false) {
    popUp.style.display = "flex";
    leaf.style.display = "none";
    branch.style.display = "none";
    onePlayer.style.display = "none";
    twoPlayers.style.display = "none";
    activeMenu = true;
  } else {
    popUp.style.display = "none";
    leaf.style.display = "block";
    branch.style.display = "block";
    onePlayer.style.display = "inline-block";
    twoPlayers.style.display = "inline-block";
    activeMenu = false;
  }
});

exit.addEventListener("click", function (e) {
  window.close("", "_parent", "");
});
home.addEventListener("click", function () {
  makeSound();
  const homePage = function () {
    window.location.href = "index.html";
  };
  setInterval(homePage, 1000);
});
newGame.addEventListener("click", function () {
  makeSound();
  const homePage = function () {
    window.location.href = "index.html";
  };
  setInterval(homePage, 1000);
});

let active = true;
let player;
let starter;
let gameMode;
let ended = false;
let game;

const levels = ["Easy", "Medium", "Hard"];
slider.addEventListener("input", function (e) {
  levelNumber.innerHTML = this.value;
});
previous.addEventListener("click", function (e) {
  slider.value--;
  if (slider.value < 2) {
    levelNumber.textContent = "Easy";
  } else if (slider.value == 2) {
    levelNumber.textContent = "Medium";
  }
});
next.addEventListener("click", function (e) {
  slider.value++;
  if (slider.value > 2) {
    levelNumber.textContent = "Hard";
  } else if (slider.value == 2) {
    levelNumber.textContent = "Medium";
  }
});
const makeSound = function () {
  let click = new Audio("click.mp3");
  click.play();
};

// const change = function () {
//   if (active) {
//     active = false;
//   } else {
//     active = true;
//   }
// };
// function reload() {
//   switch (gameMode) {
//     case "Two Players":
//       gameMode = "Two Players";

//       window.location.href = "/index2.html";
//       twoPlayerGame();
//       break;
//     case "One Player":
//       gameMode = "One Player";

//       window.location.href = "/index2.html";
//       break;
//   }
// }

// const twoPlayerGame = function () {
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
//   active = true;

//   document.addEventListener("click", function (e) {
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
//         !results.includes(table[i])
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
//   statusGame();
//   clearGame.addEventListener("click", clear);
// };
// twoPlayers.addEventListener("click", twoPlayerGame);

// onePlayer.addEventListener("click", function (e) {
//   gameMode = "One Player";

//   makeSound();
//   onePlayer.classList.add("mode");
//   levelNumber.textContent = 1;
//   slider.style.display = "inline-block";
//   if (x.matches) {
//     previous.style.display = "inline-block";
//     next.style.display = "inline-block";
//   }
//   twoPlayers.style.display = "none";
//   leaf.style.display = "none";
//   branch.style.display = "none";
//   selectLevel.style.display = "inline-block";
//   selectLevel.addEventListener("click", function (e) {
//     clearGame.style.display = "inline-block";
//     slider.style.display = "none";
//     previous.style.display = "none";
//     next.style.display = "none";
//     levelNumber.textContent = "";
//     selectLevel.style.display = "none";
//     onePlayer.style.display = "none";
//     container.style.display = "grid";
//     makeSound();
//     clearGame.addEventListener("click", reload);
//     window.location.href = "/index2.html";

// starter = Math.floor(Math.random() * 2);
// console.log(starter);

// if (slider.value == 1) {
//   starter = Math.floor(Math.random() * 2);
//   console.log(starter);
//   clearGame.addEventListener("click", reload);
//   if (starter === 0) {
//     console.log(mark, results);
//     turn.textContent = "You Start";

//     document.addEventListener("click", function (e) {
//       const clicker = function () {
//         let click = new Audio("click.mp3");
//         click.play();
//       };
//       if (
//         results.length === 0 ||
//         results[results.length - 1].textContent === "O"
//       ) {
//         for (let i = 0; i < 9; i++) {
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

//           const playerX = function () {
//             for (let x = 0; x < 9; x++) {
//               if (active === false) {
//                 let roll = Math.floor(Math.random() * 9);
//                 if (mark[roll] === "" && ended === false) {
//                   table[roll].textContent = "O";
//                   results.push(table[roll]);
//                   mark[roll] = "O";
//                   console.log("step1B");
//                   turn.textContent = "Your Turn";

//                   clicker();
//                   statusGame();
//                   change();
//                 }
//               }
//             }
//           };
//           setTimeout(playerX, 2000);
//         }
//       }
//     });
//   }

//   if (starter === 1) {
//     console.log(mark, results);
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
//     document.addEventListener("click", function (e) {
//       for (let i = 0; i < 9; i++) {
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
//           change();
//         }
//       }
//       console.log(active);
//       const playerO = function () {
//         if (
//           active === false &&
//           results[results.length - 1].textContent === "O"
//         ) {
//           let roll = Math.floor(Math.random() * 9);
//           if (mark[roll] === "") {
//             table[roll].textContent = "X";
//             results.push(table[roll]);
//             mark[roll] = "X";
//             turn.textContent = "Your Turn";

//             console.log("step1B");

//             clicker();
//             statusGame();

//             change();
//           }
//         }
//       };
//       setTimeout(playerO, 2000);
//     });
//   }
// }
