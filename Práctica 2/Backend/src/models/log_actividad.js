const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const logActividadSchema = new Schema({
    timestamx: String,
    actividad: String,
    pacientex: {
        type: Schema.Types.Number,
        ref: 'paciente'
    },
    habitacionx: {
        type: Schema.Types.Number,
        ref: 'habitacion'
    }
});

module.exports = mongoose.model('log_actividad',logActividadSchema);