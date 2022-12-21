const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const logHabitacionSchema = new Schema({
    _id: String,
    statusx: String,
    habitacionx: {
        type: Schema.Types.Number,
        ref: 'habitacion'
    }
});

module.exports = mongoose.model('log_habitacion',logHabitacionSchema);