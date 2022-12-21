const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pacienteSchema = new Schema({
    _id: Number,
    edad: Number,
    genero: String,
    log_actividades: [{
        type: Schema.Types.ObjectId,
        ref: 'log_actividad'
    }]
});

module.exports = mongoose.model('paciente',pacienteSchema);
