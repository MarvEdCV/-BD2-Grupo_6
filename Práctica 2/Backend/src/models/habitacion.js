const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const habitacionSchema = new Schema({
    _id: Number,
    habitacion: String,
    log_habitaciones: [{
        type: Schema.Types.String,
        ref: 'log_habitacion'
    }],
    log_actividades: [{
        type: Schema.Types.ObjectId,
        ref: 'log_actividad'
    }]
});

module.exports = mongoose.model('habitacion',habitacionSchema);