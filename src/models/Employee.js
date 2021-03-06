const mongoose = require('mongoose');
const { Schema } = mongoose;

const EmployeeSchema = new Schema ( {
    NoEmpleado: {type: String, require:true, unique:true}, 
    Activo: {type: String, require: true}, 
    Nombre: {type: String, require: true},
    PrimerApellido: {type: String, require: true},
    SegundoApellido: {type: String, require: true},
    Email: {type: String, require: true},
    FechaEntrevista: {type: String, require: true},
    Direccion: {type: String, require: true},
    Colonia: {type: String, require: true},
    Municipio: {type: String, require: true},
    CP: {type: String, require: true},
    Estado: {type: String, require: true},
    Pais: {type: String, require: true},
    FechaNacimiento: {type: String, require: true},
    EstadoNacimiento: {type: String, require: true},
    Nacionalidad: {type: String, require: true},
    Genero:{type: String, require: true},
    EstadoCivil: {type: String, require: true},
    NivelEstudios: {type: String, require: true},
    CelularP: {type: String, require: true},
    IMEI: {type: String, require: true},
    CEDIS: {type: String, require: true},
    Puesto: {type: String, require: true},
    IMSS: {type: String, require: true},
    CURP: {type: String, require: true},
    RFC: {type: String, require: true},
    Constancias: {type: String, require: false},
    Retencion_Info: {type: String, require: false},
    Comprobante_Estudios: {type: String, require: false},
    Date: { type: Date, default:Date.now }},
    {
        timestamps: true
      }

    
);

module.exports = mongoose.model('Employee', EmployeeSchema)