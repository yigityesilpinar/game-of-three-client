/**
 * Created by Yigit Yesilpinar on 29.04.2017.
 *
 * create and/or render View
 */

export function renderGame(game) {
    let numberDiv = document.getElementById("currentNumDiv");
    let numberA = document.createElement("a");
    numberA.setAttribute("id","currentNum");
    numberA.innerHTML = game.currentNum;
    numberDiv.innerHTML = numberA.outerHTML;
}


export function reRenderGame(game) {
    let numberA = document.getElementById("currentNum");
    numberA.innerHTML = game.currentNum;
}

export function renderClient(client) {
    let turnDiv = document.getElementById("turnIndicator");

    if(client.willPlay()){
        addClass.call(turnDiv, "your-turn");
        turnDiv.innerHTML = "Is your turn! \n please select operation";
    }
    else{
        addClass.call(turnDiv,"not-your-turn");
        turnDiv.innerHTML = "Waiting for your opponent to play";
    }
}

function toggleClasses(_class1, _class2) {
    addClass.call(this, _class1);
    removeClass.call(this, _class2);
}

function addClass(_class) {
    if(!this.classList.contains(_class)){
        this.classList.add(_class);
    }
}
function removeClass(_class) {
    if(this.classList.contains(_class)){
        this.classList.remove(_class);
    }
}
export function reRenderClient(client) {
    let turnDiv = document.getElementById("turnIndicator");

    if(client.willPlay()){
        toggleClasses.call(turnDiv, "your-turn", "not-your-turn");
        turnDiv.innerHTML = "Is your turn! \n please select operation";
    }
    else{
       toggleClasses.call(turnDiv, "not-your-turn" , "your-turn");
        turnDiv.innerHTML = "Waiting for your opponent to play";
    }
}

export function renderResult(client, didWin) {
    const appMain = document.getElementById("appMain");

    let coverDiv = document.createElement("div");
    coverDiv.setAttribute("class","cover-div");

    let resultDiv = document.createElement("div");
    resultDiv.setAttribute("id","resultDiv");

    let displayText = didWin ? "Congratulations You Have Won!": "Oops seems like you have lost this time!";
    let displayClass = didWin ? "win" : "lost";

    let displayResult = document.createElement("div");
    displayResult.setAttribute("id","displayResult");
    displayResult.setAttribute("class", displayClass);
    displayResult.appendChild(document.createTextNode(displayText));

    let resultInputs = document.createElement("div");
    resultInputs.setAttribute("class", "resultInputs");
    let closeBtn = document.createElement("a");
    closeBtn.setAttribute("class", "closeBtn");
    closeBtn.appendChild(document.createTextNode("Leave the game!"));
    let rePlayBtn= document.createElement("a");
    rePlayBtn.appendChild(document.createTextNode("RePlay"));
    rePlayBtn.setAttribute("class", "rePlayBtn");
    resultInputs.appendChild(rePlayBtn);
    resultInputs.appendChild(closeBtn);

    resultDiv.appendChild(displayResult);
    resultDiv.appendChild(resultInputs);
    coverDiv.appendChild(resultDiv);
    appMain.appendChild(coverDiv);
    appMain.classList.add("blur");

    let socket = this;

    //events
    closeBtn.addEventListener("click",function (event) {
        event.preventDefault();
        // this works when the Browser tab is opened with Javascript, in the prototype version of game tab is not opened with JS so its not working
        // Actual game(client app) suppose to open its own tab, then it will work
        window.open('','_self').close();
    },false);


    rePlayBtn.addEventListener("click",function (event) {
        event.preventDefault();
        socket.emit("CLIENT_REJOIN", client);
        appMain.removeChild(coverDiv);
    },false);
}