import * as mongoose from 'mongoose';

const CrushSchema = new mongoose.Schema( { //Schema is used by Mongoose to create a collection(table).(must be in {})
    nome: {type: String, required: true},
    apelido: {type: String, required: true, unique: true},
    whatsapp: {type: String, required: true, unique: true},
    createAt: {type: Date, default: Date.now} //Standard field to store creation date/time
}); 

export default mongoose.model('Crush', CrushSchema); //Crush is the table name and CrushSchema is our structure