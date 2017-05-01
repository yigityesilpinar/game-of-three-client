/**
 * Created by YigitYesilpinar on 29.04.2017.
 *
 * Index js, entry point of the Client application, register socket client events
 *
 */

import io from 'socket.io-client';

import {registerEvents} from './events/socketEvents';

import './assets/style/index.css';
document.addEventListener("DOMContentLoaded", ()=>{
    // Server address, Elastic IP On Amazon
    let socket = io(`http://34.208.237.222/`);
    registerEvents(socket);
});




