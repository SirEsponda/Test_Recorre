const mongoose = require('mongoose');
const { Schema } = mongoose;

const  DocumentosSchema = new Schema ( {
    NoEmpleado: {type: String, require:true, unique:true},
    Date: { type: Date, default:Date.now }
    });

    module.exports = mongoose.model('Documentos', DocumentosSchema)