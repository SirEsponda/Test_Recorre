const mongoose = require('mongoose');
const { Schema } = mongoose;

const UnidadesSchema = new Schema ( {
    NoUnidad: {type: String, require:true, unique:true} ,
    Placas: {type: String, require:true, unique:true},
    NoCircula: {type: String, require:true},
    Verificacion: {type: String, require:true},
    ValorFactura: {type: String, require:true},
    Serie: {type: String, require:true},
    Marca: {type: String, require:true},
    SubMarca: {type: String, require:true},
    Modelo: {type: String, require:true},
    NoMotor: {type: String, require:true, unique:true},
    Poliza: {type: String, require:true},
    Seguro: {type: String, require:true},
    Vigencia: {type: String, require:true},
    Beneficiario: {type: String, require:true},
    Prestamo:{type: String, require:true},
    Credito: {type: String, require:true},
    Mensualidad: {type: String, require:true},
    Plazo: {type: String, require:true},
    Contrato: {type: String, require:true},
    FormaPag: {type: String, require:true},
    OBD2: {type: String, require:true},
    Date: { type: Date, default:Date.now }

});

module.exports = mongoose.model('Unidades', UnidadesSchema)