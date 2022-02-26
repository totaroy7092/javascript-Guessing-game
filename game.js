let totalAttemps = 5;
let attemps = 0;
let totalwon = 0;
let totalLost = 0;

const form = document.querySelector("form");
const cardBody = document.querySelector(".cards__body");
const input = document.querySelector("#GuessingNumber");
const button = document.querySelector("#check__btn");
const resutlText = document.querySelector("#resultText");
const remainingText = document.querySelector("#remainingText")
const lostAndWon = document.createElement("p");

form.addEventListener("submit",function(event){
    event.preventDefault();
    checkResult(input.value);
    attemps++;
    if( attemps > 5 ){
        input.disabled = true;
        button.disabled = true;
    }else{
        checkResult(input.value);
        remainingText.textContent = `Remaining attemp ${totalAttemps-attemps}`
    }
    input.value = "";
});

function checkResult(number){
    let count = 0;
    const random = getRandomNumber(5);
    if( random == number ) {
        resutlText.textContent = `you have won`;
        totalwon++;
    }else{
        resutlText.textContent = `you have lost;random number was ${random}`;
        totalLost++;
    }

    lostAndWon.innerHTML = `Total lost:${totalLost} Totalwon:${totalwon}`;
    cardBody.appendChild(lostAndWon);
};

function getRandomNumber(limit){
    return Math.floor(Math.random() * limit) + 1;
};

