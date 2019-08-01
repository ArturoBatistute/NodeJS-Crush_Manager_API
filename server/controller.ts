import model from './model';

class Controller {  //Functions to send/call data from mongoose
    constructor() {}
    
    getCrushs(){ //Get all Crushs from Model
        return model.find({}); //Using {} will return all
    }
    select(req, res) { //use the return of getCrushs
        this.getCrushs()
        .then(crushs => res.status(200).json({'result': crushs}))
        .catch(err => res.status(400).json({'result': err}));
    }
}
export default Controller;