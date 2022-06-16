// Buttons selector
const getStartedBtn = document.querySelector("#get-started-btn");
const player1Btn = document.querySelector("#player1-btn");
const player2Btn = document.querySelector("#player2-btn");
const resetBtn = document.querySelector("#reset-btn");

// Score selector
const luckyNum = document.getElementById("lucky-number");
const player1Num = document.getElementById("player1-number");
const player2Num = document.getElementById("player2-number");

// Default score
let finalNumber = "";
let player1Number = "";
let player2Number = "";

const generateRandNum = (num) => {
	return Math.floor(Math.random() * num) + 1;
};

const getWinner = (num, name) => {
	if (num === finalNumber) {
		alert(`Hurry! ${name} is winner!`);
		disableBtn(true, true);
	}
};

const disableBtn = (val1 = true, val2 = true) => {
	player1Btn.disabled = val1;
	player2Btn.disabled = val2;
};

getStartedBtn.addEventListener("click", () => {
	finalNumber = generateRandNum(10);
	luckyNum.textContent = finalNumber;

	disableBtn(false, false);
});

player1Btn.addEventListener("click", () => {
	player1Number = generateRandNum(10);
	player1Num.textContent = player1Number;

	disableBtn(true, false);

	getWinner(player1Number, "Player 1");
});

player2Btn.addEventListener("click", () => {
	player2Number = generateRandNum(10);
	player2Num.textContent = player2Number;

	disableBtn(false, true);

	getWinner(player2Number, "Player 2");
});

resetBtn.addEventListener("click", () => {
	location.reload();
});
