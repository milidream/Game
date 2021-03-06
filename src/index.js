const game = document.querySelector("#game");
const button = document.querySelector("#play");

class Joueur{ //class permettant l'affichage du pseudo du joueur et son score.
    constructor(pseudo, score){
        this.pseudo = pseudo;
        this.score = score;
    };
};

let pseudo =  prompt("Entrez votre pseudo");
let score = 1;
let joueur = new Joueur (pseudo, score);

function start(){
    game.setAttribute("id", "games");
    while(game.firstChild){ //boucle permettant de supprimer tous les éléments du main menu
        game.removeChild(game.firstChild);
    };
    for(let i=1;i<5;i++){ //boucle permettant la creation des 4 cercles.
        const elementDiv = document.createElement("div");
            elementDiv.setAttribute("id", "circle" + i);
            elementDiv.setAttribute("class", "circle");
            game.append(elementDiv);
    };
    setGreen();
};button.addEventListener("click", start);

function setGreen(){ //fonction qui génère automatiquement le cercle vert.
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
    if(correct){ //condition vérifiant si l'éléments cliqué est le cercle vert avec son attribut "data-correct".
        clearTimeout(timeOut);
        circle.forEach(button=>button.removeAttribute('style'));
        circle.forEach(button=>button.removeAttribute('data-correct'));
        setGreen();
        score++
    }else{
        score--;
    }
};game.addEventListener("click", check);

function gameOver(){ //affiche le score finale.
    game.setAttribute("id", "fin");
    while(game.firstChild){
        game.removeChild(game.firstChild);
    };
    let newh2 = document.createElement("h2");
    newh2.setAttribute("id", "score");
    let finalScore = document.createTextNode(pseudo + "VOTRE SCORE EST DE: " + score);
    newh2.appendChild(finalScore);
    game.appendChild(newh2);
};