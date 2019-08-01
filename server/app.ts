import * as express from 'express'; //Import Express Module
import database from './db';

class App{
    public app: express.Application;
    private database: database;

    constructor (){ //first method to initialize when request this class
        this.app = express();
        this.database = new database(); //Instance the connection
        this.database.createConnection();

        this.routes();
    }

    routes(){
        this.app.route('/').get( (req,res) => res.status(200).json({"result": "Hello World"}) );
    }
}

export default new App(); //Export instance class app