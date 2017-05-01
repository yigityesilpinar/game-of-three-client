/**
 * Created by Yigit Yesilpinar on 29.04.2017.
 *
 * register socket client events
 *
 */

import {Client, CLIENT_TYPE} from '../models/index';
import {renderGame, renderClient, reRenderGame, reRenderClient, renderResult} from '../view/gameView';
import {registerUserEvents} from './userEvents';



function createClient(game, id) {
    if(game.clients[1] === id){
        return new Client({id: game.clients[1], isTurn: true, didPlay:false, clientType:CLIENT_TYPE.CLIENT_TWO , inGame: game._id});
    }
    else if(game.clients[0] === id ){
        return new Client({id: game.clients[0], inGame: game._id });
    }
    return false;

}
export function registerEvents(socket) {
    let client;
    socket.emit("REQUEST_GAME");

    socket.on("GAME_START",function (game) {
        client =  createClient(game, socket.io.engine.id);
        if(client && game.status === "BEGIN"){
            let clientIndex = game.clients.indexOf(client.id);
            // Client is in this GAME
            if(clientIndex!==null && clientIndex > -1){
                renderGame(game);
                renderClient(client);
                registerUserEvents.call(socket, client);
            }
        }
        else{

        }
    });

    socket.on("GAME_PLAYED",function (game) {
        let clientIndex = null;
        clientIndex = game.clients.indexOf(client.id);
        // Client is in this GAME
        if(clientIndex!==null && clientIndex > -1 && game.status === "BEGIN"){
            reRenderGame(game);
            if(clientIndex === game.turnIndex){
                client = Object.assign(client, { isTurn: true});
            }
            else{
                client = Object.assign(client, { isTurn: false});
            }
            registerUserEvents.call(socket, client);
            reRenderClient(client);
        }
    });

    socket.on("GAME_WON",function (game) {
        let clientIndex = null;
        clientIndex = game.clients.indexOf(client.id);
        // Client is in this GAME
        if(clientIndex!==null && clientIndex > -1){

            const didWin = game.lastOp.client === client.id;
            renderResult.call(socket, client, didWin);
        }
    });

    socket.on("GAME_DISCONNECT", function (game) {
        if(game && game.clients){
            let clientIndex = null;
            clientIndex = game.clients.indexOf(client.id);
            // Client is in this GAME
            if(clientIndex!==null && clientIndex > -1) {
             //   console.log( game);
            }
        }
        else{
           // console.log("DISCONNECT AND DELETE" + game);
        }
    });
}