// COIN FLIP SIMULATOR

//HTML Variables
let outputEl = document.getElementById("output");
let oneEl =  document.getElementById("1s-out");
let twoEl =  document.getElementById("2s-out");
let threeEl =  document.getElementById("3s-out");
let fourEl =  document.getElementById("4s-out");
let fiveEl =  document.getElementById("5s-out");
let sixEl =  document.getElementById("6s-out"); 

// Count Variables
let numOnes = 0;
let numTwos = 0;
let numThrees = 0;
let numFours = 0;
let numFives = 0;
let numSixs = 0;

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
    //Generate a Random Number
    let randNum = Math.floor(Math.random() * 6);
    console.log(randNum);

    // Simulate the Coin Flip
    if (randNum < 1) {
        outputEl.innerHTML = "<img src='img/1.png' />";
        numOnes = numOnes + 1;
        oneEl.innerHTML = numOnes;

    } else if (randNum < 2) {
        outputEl.innerHTML = "<img src='img/2.png' />";
        numTwos = numTwos + 1;
        twoEl.innerHTML = numTwos;

    } else if (randNum < 3) {
        outputEl.innerHTML = "<img src='img/3.png' />";
        numThrees = numThrees + 1;
        threeEl.innerHTML = numThrees;

    } else if (randNum < 4) {
        outputEl.innerHTML = "<img src='img/4.png' />";
        numFours = numFours + 1;
        fourEl.innerHTML = numFours;

    } else if (randNum < 5) {
        outputEl.innerHTML = "<img src='img/5.png' />";
        numFives = numFives + 1;
        fiveEl.innerHTML = numFives;
    } else {
        outputEl.innerHTML = "<img src='img/6.png' />";
        numSixs = numSixs + 1;
        sixEl.innerHTML = numSixs
    }
}