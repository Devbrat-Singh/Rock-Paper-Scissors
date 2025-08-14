let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

let userScoreDisplay = document.querySelector("#user-score");
let computerScoreDisplay = document.querySelector("#computer-score");

let resetBtn = document.querySelector("#reset-btn");

let userMsg = document.querySelector("#user-msg");
let comMsg = document.querySelector("#com-msg");

//Step 7
const ResetScoreMsg = () => {
    userMsg.innerText = "You";
    comMsg.innerText = "Com";
};

//Step 6
resetBtn.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    userScoreDisplay.innerText = userScore;
    computerScoreDisplay.innerText = compScore;
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#081631";
    ResetScoreMsg();
});

//Step 5
const showWinner = (userWin) => {
    if (userWin) {
        console.log("User Win..");
        msg.innerText = "You Won..!";
        userScore++;
        userScoreDisplay.innerText = userScore;
        msg.style.backgroundColor = "green";
    } else {
        console.log("Computer Win..");
        msg.innerText = "You Lose..!";
        compScore++;
        computerScoreDisplay.innerText = compScore;
        msg.style.backgroundColor = "red";
    }
};

//Step 4
const gameDraw = () => {
    console.log("Game Draw...");
    msg.innerText = "Game Draw...";
    msg.style.backgroundColor = "#081631";
};

//Step 3
const genComChoice = () => {
    let choice = ["rock", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return choice[randomIdx];
};

// Step 2
const playGame = (userChoice) => {
    console.log("User choice is: ", userChoice);

    // Set latest user choice
    userMsg.innerText = "You: " + userChoice;

    const comChoice = genComChoice();
    console.log("Computer choice is: ", comChoice);

    // Set latest computer choice
    comMsg.innerText = "Com: " + comChoice;

    if (userChoice === comChoice) {
        gameDraw();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = comChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = comChoice === "scissor" ? false : true;
        } else {
            userWin = comChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

// Step 1
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
