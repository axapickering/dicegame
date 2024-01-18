"use strict";

const scoreContainer = document.querySelector("#score-container");
const rollTrackerContainer = document.querySelector("#roll-tracker-container");
const diceBoardContainer = document.querySelector("#dice-board-container");

function rollDie() {
  console.log("die rolled.")
}

diceBoardContainer.addEventListener("click",evt => {
  evt.preventDefault();
  rollDie();
})