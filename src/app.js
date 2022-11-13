/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let suite = ["♦", "♥", "♠", "♣"];

  function shuffle(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  let count = shuffle(number);
  let symbol = shuffle(suite);

  let result = count;
  document.getElementById("logic").innerHTML = result;

  let newresult = symbol;
  document.getElementById("suitesymbol").innerHTML = newresult;

  console.log("Random number");
};
