import * as mongoose from 'mongoose';
import { Logger } from 'mongodb';
import { url } from 'inspector';

class Database {

    private dburl = 'mongodb://localhost/masterpieceDB'; //if the Database doesnt exist, mongoose will auto create
    private dbconnection;

    constructor(){}

    createConnection(){ //Method used to created our connection
        //mongoose.connect(this.dburl);
        mongoose.connect(this.dburl, {useNewUrlParser: true});
        this.logger(this.dburl);
    }

    logger(url) { //Add answers for url
        this.dbconnection = mongoose.connection;
        this.dbconnection.on('connected', () => console.log('mongoose connected'));
        this.dbconnection.on('error', error  => console.error.bind(console, "erro na conexão: " + error)); //Output the error for the user

    }
}

export default Database;