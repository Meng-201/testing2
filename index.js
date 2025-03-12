
/*
const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum +1)) + minNum;

let attempt = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt(`Enter the number between ${minNum} -${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }else if(guess < minNum && guess > maxNum){
        window.alert("Please enter the number between 1-100");
    }else{
        attempt++;
        if(guess < answer){50

            window.alert("Too Low, try again!");
        }else if(guess > answer){
            window.alert("Too High, try again!");
        }else{
            window.alert(`Correct! The answer is ${answer}. You attempted ${attempt} attempts.`);
            running = false;
        }
    }
    
}
*/

const amount = document.getElementById("amount");
const rate = document.getElementById("rate");
const toDollar = document.getElementById("toDollar");
const toRiel = document.getElementById("toRiel");
const result = document.getElementById("result");
let exchangeAmount;

function convert(){
    if(toDollar.checked){
        exchangeAmount = Number(amount.value);
        exchangeAmount = exchangeAmount / Number(rate.value);
        result.textContent = exchangeAmount.toFixed(1) + "$";
    }
    else if(toRiel.checked){
        exchangeAmount = Number(amount.value);
        exchangeAmount = exchangeAmount * Number(rate.value);
        result.textContent = exchangeAmount.toFixed(1) + "៛";
    }else{
        result.textContent = "Select an exchange method";
    }
}