const game = document.querySelector("#game");
const button = document.querySelector("#play");
let score = 1;

class joueur{
    constructor(pseudo, score);
    pseudo = this.pseudo;
    score = this.score;
}

function start(){
    game.setAttribute("id", "games");
    while(game.firstChild){
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
    element.style.border = "0";
    element.dataset.correct = true;
};

function check(e){
    const timeOut = setTimeout(gameOver, 10000);
    const circle = document.querySelectorAll(".circle");
    let selected = e.target;
    let correct = selected.dataset.correct;
    if(correct){
        clearTimeout(timeOut);
        circle.forEach(button=>button.removeAttribute('style'));
        circle.forEach(button=>button.removeAttribute('data-correct'));
        setGreen();
        score++
    }else{
        score--;
    }
};game.addEventListener("click", check);

function gameOver(){
    game.setAttribute("id", "fin");
    while(game.firstChild){
        game.removeChild(game.firstChild);
    };
    let newh2 = document.createElement("h2");
    newh2.setAttribute("id", "score");
    let finalScore = document.createTextNode("SCORE : " + score);
    newh2.appendChild(finalScore);
    game.appendChild(newh2);
};