/**
 * Created by Yigit Yesilpinar on 30.04.2017.
 *
 * register user events
 */

function userEventHandler(event, client) {
    let socket = this;

    event.preventDefault();
    let addValue = parseInt(event.target.getAttribute("data-value"));
    if(client && client.willPlay()){
        socket.emit("GAME_PLAY", { client: client.id, game: client.inGame , value:addValue});
    }
    else
    {
        console.log("YOU CANT PLAY");
    }
}
export function registerUserEvents(client) {
    let inputsDiv = document.getElementById("gameInputs");
    let socket = this;
    let new_element = inputsDiv.cloneNode(true);

    Array.prototype.forEach.call(new_element.children, function (inputA) {
        inputA.addEventListener("click", event => userEventHandler.call(socket, event, client), false);
    });
    inputsDiv.parentNode.replaceChild(new_element, inputsDiv);
}