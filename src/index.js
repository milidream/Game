const game = document.querySelector("#game");
const games = document.querySelector("#games");
const button = document.querySelector("#play");
let score = 0;

function start(){
    game.removeAttribute("id", "game")
    game.setAttribute("id", "games")
    while(game.firstChild) {
        game.removeChild(game.firstChild);
    };
    for(let i=1;i<5;i++){
        const elementDiv = document.createElement("div");
            elementDiv.setAttribute("id", "circle" + i);
            elementDiv.setAttribute("class", "circle");
            game.append(elementDiv);
    };
    setGreen();
};button.addEventListener("click", start);

function setGreen(){
    let nb = Math.floor((Math.random() * 4) + 1);
    let element = document.querySelector("#circle" + nb);
    element.style.backgroundColor = "#3DCD6E";
    element.dataset.correct = true;
};

function check(e){
    const timeOut = setTimeout(gameOver, 3200);
    const circle = document.querySelectorAll(".circle");
    let selected = e.target;
    let correct = selected.dataset.correct;
    if(correct){
        clearTimeout(timeOut);
        circle.forEach(button=>button.removeAttribute('style'));
        circle.forEach(button=>button.removeAttribute('data-correct'));
        setGreen();
        score++
        console.log(score);
    }else{
        console.log("pd");
    }
};game.addEventListener("click", check);

function gameOver() {
    while(game.firstChild) {
        game.removeChild(game.firstChild);
    };
};