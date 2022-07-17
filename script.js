"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let yourScore = 10;

let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".guessing").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector("#input").value);

  // ⤵️ when there is no input from user.
  if (!guess) {
    displayMessage("🚫 Enter Number!");
  }

  // ⤵️ when player wins the game and sets highscore
  else if (secretNumber === guess) {
    displayMessage("🎉 Correct Number!");

    document.querySelector("body").style.backgroundColor =
      "#60b347"; /*green color for winning*/

    document.querySelector("body").style.transition = "all 1s";

    document.querySelector("#input").style.backgroundColor = "#60b347";

    document.querySelector("#input").style.transition = "all 1s";

    document.querySelector(".numberBox").textContent = secretNumber;

    document.querySelector(".check").disabled = true;

    document.querySelector(".check") = function (){
        this.disabled   = true;
    }

    if (yourScore > highscore) {
      highscore = yourScore;
      document.querySelector(".highscore").textContent = yourScore;
    }
  }

  // ⤵️ when guess != secretNumber and when guess is greater or smaller than secretNumber
  else if (guess !== secretNumber) {
    if (yourScore > 1) {
      displayMessage(guess > secretNumber ? "📈 Too High" : "📉 Too Low");
      yourScore--;
      document.querySelector(".score").textContent = yourScore;
    } else {
      displayMessage(`👎 You're eliminated`);

      document.querySelector(".score").textContent = 0;

      document.querySelector("body").style.backgroundColor = "crimson";

      document.querySelector("#input").style.backgroundColor = "crimson";

      document.querySelector("body").style.transition = "all 1s";

      document.querySelector("#input").style.transition = "all 1s";

      document.querySelector(".numberBox").textContent = secretNumber;

      document.querySelector(".check").disabled = true;

      document.querySelector(".check") = function (){
        this.disabled   = true;
    }
    }
  }
});

// ⤵️ adding eventListener on again button
document.querySelector(".again").addEventListener("click", function () {
  yourScore = 10;

  document.querySelector(".score").textContent = yourScore;

  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector("#input").style.backgroundColor = "#222";

  document.querySelector(".numberBox").textContent = "?";

  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");

  document.querySelector('[name="Guessed Number"]').value = "";

  document.querySelector(".check").disabled = false;

  document.querySelector(".check").style.cursor = "pointer";
});

// ⤵️ when user tries to input value greater than 20 or less than 1
function convert() {
  let x = document.querySelector("#input");
  if (x.value > 20) {
    x.value = 20;
  } else if (x.value < 1 && x.value != "") {
    x.value = 1;
  } else if (x.value == "") {
    x.value = Number;
  }
}
var input = document.querySelector("#input");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.querySelector(".check").click();
  }
});
