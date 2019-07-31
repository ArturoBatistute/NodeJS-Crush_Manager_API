import * as mongoose from 'mongoose';
import { Logger } from 'mongodb';
import { url } from 'inspector';

class Database {

    private dburl = 'mongodb://127.0.0.1/masterpieceDB'; //if the Database doesnt exist, mongoose will auto create
    private dbconnection;

    constructor(){}

    createConnection(){ //Method used to created our connection
        mongoose.connect(this.dburl);
    }

    logger(url){ //Add answers for url
        this.dbconnection = mongoose.connection;
        this.dbconnection.on('connected', () => console.log('mongoose connected'));
        this.
    }
}

