import * as express from 'express'; //Import Express Module

class App{
    public app: express.Application;

    constructor (){ //first method to initialize when request this class
        this.app = express();
        this.routes();
    }

    routes(){
        this.app.route('/').get((req, res) => res.status(200).json({"result": "hello world"})) //error function
    }
}

export default new App(); //Export instance class app