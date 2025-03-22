"use strict";

let TNumber = Math.floor(Math.random() * 20) + 1;
let checkBtn = document.querySelector(".check");
let score = 20;
document.querySelector(".score").textContent = score;

checkBtn.addEventListener("click", function () {
  let guessField = document.querySelector(".guess");
  let guessedNum = Number(guessField.value) || 0;

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";

  console.log(TNumber);
  console.log(guessedNum);

  // when there is no input
  if (!guessedNum) {
    document.querySelector(".message").textContent = "No Answer";
    // When answer is too High
  } else if (TNumber < guessedNum) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High";
      score -= 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
      document.querySelector(".score").textContent = 0;
    }
    // when answer is too low
  } else if (TNumber > guessedNum) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low";
      score -= 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
      document.querySelector(".score").textContent = 0;
    }
    // when answer is right
  } else {
    document.querySelector(".message").textContent = "Right";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = TNumber;
  }
});

let againBtn = document.querySelector(".again");
againBtn.addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = null;
  document.querySelector(".message").textContent = "Start guessing...";
  score = 20;
  document.querySelector(".score").textContent = score;
  TNumber = Math.floor(Math.random() * 20) + 1;
  console.log(TNumber);
});
