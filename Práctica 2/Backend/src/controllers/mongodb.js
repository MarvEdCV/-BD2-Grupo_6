const Paciente = require('../models/paciente');
const LogActividad = require('../models/log_actividad');
const Habitacion = require('../models/habitacion');
const LogHabitacion = require('../models/log_habitacion');
module.exports = {

    index: async (req,res,next) => {
        res.status(200).json({success:'MongoDB API'});
    },

    newPaciente: async (req, res, next) => {
        const newPaciente = new Paciente(req.body);
        const paciente = await newPaciente.save();
        res.status(200).json(paciente);
    },
    /*
    getPaciente: async (req, res, next) => {
       const { pacienteId } = req.params;
       const paciente = await Paciente.findById(pacienteId);
       res.status(200).json(paciente);
    },
    //Para metodo PUT
    replacePaciente: async (req, res, next) => {
        const { pacienteId } = req.params;
        const newPaciente = req.body;
        const old = await Paciente.findByIdAndUpdate(pacienteId,newPaciente);
        res.status(200).json({success: true});
    },
    //PARA METODO PATCH
    updatePaciente: async (req, res, next) => {
        const { pacienteId } = req.params;
        const newPaciente = req.body;
        res.status(200).json({success: true});
    },

    deletePaciente: async (req, res, next) => {
        const { pacienteId } = req.params;
        await Paciente.findByIdAndDelete(pacienteId);
        res.status(200).json({success: true});
    },

    getPacienteLogActividades: async (req, res, next) => {
        const { pacienteId } = req.params;
        const paciente = await Paciente.findById(pacienteId).populate('log_actividad');
        res.status(200).json(paciente);
    },

    newPacienteLogActividad: async (req, res, next) => {
        const { pacienteId } = req.params;
        const newLogActividad = new LogActividad(req.body);
        const paciente = await Paciente.findById(pacienteId);
        newLogActividad.pacientex = paciente;
        await newLogActividad.save();
        paciente.log_actividades.push(newLogActividad);
        await paciente.save();
        res.status(201).json(newLogActividad);
    },
    */
    newHabitacion: async (req, res, next) => {
        const newHabitacion = new Habitacion(req.body);
        const habitacion = await newHabitacion.save();
        res.status(200).json(habitacion);
    },

    newHabitacionLogHabitacion: async (req, res, next) => {
        const { habitacionId } = req.params;
        const newLogHabitacion = new LogHabitacion(req.body);
        const habitacion = await Habitacion.findById(habitacionId);
        newLogHabitacion.habitacionx = habitacion;
        await newLogHabitacion.save();
        habitacion.log_habitaciones.push(newLogHabitacion);
        await habitacion.save();
        res.status(201).json(newLogHabitacion);
    },

    newLogActividad: async (req, res, next) => {
        const { pacienteId } = req.params;
        const { habitacionId } = req.params;
        const newLogActividad = new LogActividad(req.body);
        const paciente = await Paciente.findById(pacienteId);
        newLogActividad.pacientex = paciente;
        const habitacion = await Habitacion.findById(habitacionId);
        newLogActividad.habitacionx = habitacion;
        await newLogActividad.save();
        paciente.log_actividades.push(newLogActividad);
        habitacion.log_actividades.push(newLogActividad);
        await paciente.save();
        await habitacion.save();
        res.status(201).json(newLogActividad);
    },

    getLogsActividad: async (req,res,next) => {
        const LogsActividad = await LogActividad.find({});
        res.status(200).json(LogsActividad);
    },

    getLogsHabitacion: async (req,res,next) => {
        const LogsHabitacion = await LogHabitacion.find({});
        res.status(200).json(LogsHabitacion);
    },

    getHabitaciones: async (req,res,next) => {
        const Habitaciones = await Habitacion.find({});
        res.status(200).json(Habitaciones);
    },

    getPacientes: async (req,res,next) => {
        const pacientes = await Paciente.find({});
        res.status(200).json(pacientes);
    }

}