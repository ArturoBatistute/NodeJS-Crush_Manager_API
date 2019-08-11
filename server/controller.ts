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

    //SelectOne for get content
    getCrushesByID(id){
        return model.find(id);
    }
    selectOne(req, res) { //get the return of getCrushs
        const id = { _id: req.params.id}

        this.getCrushesByID(id)
            .then(crushs => res.status(200).json({'result': crushs}))
            .catch(err => res.status(400).json({'result': err}));
    }

    //Delete a content
    deleteByID(id){
        return model.deleteOne(id);
    }
    delete(req, res) { 
        const id = { _id: req.params.id}

        this.deleteByID(id)
            .then(crushs => res.status(200).json({'result': "ID deleted"}))
            .catch(err => res.status(400).json({'result': err}));
    }

    //Update a content
    updateCrush(id, data){
        return model.findOneAndUpdate(id, data);
    }
    update(req, res) { 
        const id = { _id: req.params.id}
        const crush = req.body; //search for a content inside the body

        this.updateCrush(id, crush)
            .then(crushs => res.status(200).json({'result': "ID deleted"}))
            .catch(err => res.status(400).json({'result': err}));
    }
}
export default Controller;