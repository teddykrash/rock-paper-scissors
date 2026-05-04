const choices = ["rock", "paper", "scissors"];
const score = {
    wins: 0,
    losses: 0,
    ties: 0
};

const getComputerChoice = () => {
    return choices[Math.floor(Math.random() * choices.length)];
};

const getResult = (player, computer) => {
    if (player === computer) {
        return "TIE";
    } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "WIN";
    } else {
        return "Computer Wins";
    }
};

const updateScore = (result) => {
    if (result === "TIE") {
        score.ties += 1;
    } else if (result === "WIN") {
        score.wins += 1;
    } else {
        score.losses += 1;
    }
};

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
const playerChoice = document.querySelector("#playerChoice");
const computerChoice = document.querySelector("#computerChoice");
const gameResult = document.querySelector("#result");
const winsDisplay = document.querySelector("#wins");
const lossesDisplay = document.querySelector("#losses");
const tiesDisplay = document.querySelector("#ties");

const playRound = (playerPick) => {
    playerChoice.innerText = playerPick;
    const computer = getComputerChoice();
    computerChoice.innerText = computer;
    const result = getResult(playerPick, computer);
    gameResult.innerText = result;

    gameResult.classList.remove("win", "lose", "tie");
    if (result === "WIN") {
        gameResult.classList.add("win");
    } else if (result === "Computer Wins") {
        gameResult.classList.add("lose");
    } else {
        gameResult.classList.add("tie");
    }

    updateScore(result);
    winsDisplay.innerText = score.wins;
    lossesDisplay.innerText = score.losses;
    tiesDisplay.innerText = score.ties;
};

rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));
