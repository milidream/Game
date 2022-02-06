let game = document.querySelector("#game");
let button = document.querySelector("#play");
let newDiv = document.createElement("div")

function start(){
    let firstDiv = document.createElement("div");
    let secondDiv = document.createElement("div");
    let thirdDiv = document.createElement("div");
    let firstCircle = document.createElement("div");
    let secondCircle = document.createElement("div");
    let thirdCircle = document.createElement("div");
    let fourthCircle = document.createElement("div");
    let chrono = document.createElement("h2")
    while(game.firstChild) {
        game.removeChild(game.firstChild);
    };
    game.append(firstDiv, secondDiv, thirdDiv);
    firstDiv.append(firstCircle, secondCircle);
    secondDiv.appendChild(chrono);
    thirdDiv.append(thirdCircle, fourthCircle);
}
button.addEventListener("click", start);