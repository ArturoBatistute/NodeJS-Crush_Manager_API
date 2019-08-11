import * as express from 'express'; //Import Express Module
import * as bodyparser from 'body-parser';
import database from './db';
import controller from './controller';

class App {
    public app: express.Application;
    private database: database;
    private controller: controller;

    constructor() { //first method to initialize when request this class
        this.app = express();
        this.middleware();
        this.database = new database(); //Instance the connection
        this.database.createConnection();
        this.controller = new controller();

        this.routes();
    }

    middleware (){
        this.app.use(bodyparser.json());
        this.app.use(bodyparser.urlencoded({extended: true}));
    }

    routes() {
        this.app.route('/').get( (req,res) => res.status(200).json({"result": "Hello World"}) );
        this.app.route('/api/crushs').get( (req,res) => this.controller.select(req, res));
        this.app.route('/api/crushs/:id').get( (req,res) => this.controller.selectOne(req, res)); //use : to show a content
        this.app.route('/api/crushs/:id').delete( (req,res) => this.controller.delete(req, res));
        this.app.route('/api/crushs/:id').put( (req,res) => this.controller.update(req, res));
    }
}

export default new App(); //Export instance class app