const mongoose = require('mongoose');
const { Schema } = mongoose;

const CapacitacionSchema = new Schema ( {
    NoEmpleado: {type: String, require:true, unique:true} , 
    Calificacion: {type: Number, require:true} , 
    VideoBienvenida: {type: String, require:true} , 
    Video5Bases: {type: String, require:true} , 
    VideoEcosistema: {type: String, require:true}, 
    Onboarding: {type: String, require:true} , 
    FechaCapacitacionCliente: {type: String, require:true} , 
    FechaCapacitacionSupervisor: {type: String, require:true} , 
    FechaTerminoCapacitacion: {type: String, require:true},
    Date: { type: Date, default:Date.now }
});

module.exports = mongoose.model('Capacitacion', CapacitacionSchema)