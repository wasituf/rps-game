const choices = ["ROCK", "PAPER", "SCISSORS"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

// Create new audo element and lower volume
const bgMusic = new Audio("./song.mp3");
bgMusic.volume = 0.5;

/*
 * When user moved the mouse, check if the audio is playing.
 * If it is, then do nothing, if not, start playing the audio.
 */
document.addEventListener("mousemove", () => {
  if (bgMusic.paused) {
    bgMusic.play();
  }
});

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = "";

  if (playerChoice === computerChoice) {
    result = "DRAW!";
  } else {
    switch (playerChoice) {
      case "ROCK":
        result = computerChoice === "SCISSORS" ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "PAPER":
        result = computerChoice === "ROCK" ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "SCISSORS":
        result = computerChoice === "PAPER" ? "YOU WIN!" : "YOU LOSE!";
        break;
    }
  }

  playerDisplay.textContent = playerChoice;
  computerDisplay.textContent = computerChoice;
  resultDisplay.textContent = result;
  resultDisplay.style.color =
    result === "YOU LOSE!"
      ? "#DF1515"
      : result === "YOU WIN!"
        ? "#3FDF15"
        : "#DFDF15";
}
