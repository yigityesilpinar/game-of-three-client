/**
 * Created by Yigit Yesilpinar on 29.04.2017.
 */
export const CLIENT_TYPE = {
    CLIENT_ONE:"CLIENT_ONE",
    CLIENT_TWO:"CLIENT_TWO"
};

export class Client {


    constructor(data) {
        this.id = data.id;
        this.clientType = data.clientType || CLIENT_TYPE.CLIENT_ONE;
        this.isTurn  = data.isTurn || false;
        this.didPlay = data.didPlay || false;
        this.inGame = data.inGame || null;
    }

    willPlay(){
        return this.isTurn && !this.didPlay;
    }
}