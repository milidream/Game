let game = document.querySelector("#game");
let button = document.querySelector("#play");
// let game = document.createElement("div");
// let firstDiv = document.createElement("div");
// let secondDiv = document.createElement("div");
// let thirdDiv = document.createElement("div");
// let firstCircle = document.createElement("div");
// let secondCircle = document.createElement("div");
// let thirdCircle = document.createElement("div");
// let fourthCircle = document.createElement("div");
// let chrono = document.createElement("h2");

function start(){
    game.removeAttribute("id", "game")
    game.setAttribute("id", "games")
    while(game.firstChild) {
        game.removeChild(game.firstChild);
    };
    for(let i=1;i<6;i++){
        let elementDiv = document.createElement("div");
        if(i==3){
            elementDiv.setAttribute("id", "chrono");
            game.append(elementDiv);
        }else{
            elementDiv.setAttribute("id", "circle" + i);
            elementDiv.setAttribute("class", "circle");
            game.append(elementDiv);
        };
    };
};
button.addEventListener("click", start);