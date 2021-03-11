const mongoose = require('mongoose');
const { Schema } = mongoose;

const FiltroSchema = new Schema ( {
    NoEmpleado: {type: String, require:true, unique:true}, 
    PruebaManejo: {type: String, require:true},
    Antidoping:{type: String, require:true},
    BBuroLaboral: {type: String, require:true},
    RBuroLaboral: {type: String, require:true},
    Blacktrust: {type: String, require:true},
    EstudioSocioEcnomico:{type: String, require:true},
    Date: { type: Date, default:Date.now }},
  {
     timestamps: true
    }

    
);

module.exports = mongoose.model('Filtros', FiltroSchema)