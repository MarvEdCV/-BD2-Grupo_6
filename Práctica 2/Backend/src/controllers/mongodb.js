const Paciente = require('../models/paciente');
const LogActividad = require('../models/log_actividad')
module.exports = {

    index: async (req,res,next) => {
        const pacientes = await Paciente.find({});
        res.status(200).json(pacientes);
    },

    newPaciente: async (req, res, next) => {
        const newPaciente = new Paciente(req.body);
        const paciente = await newPaciente.save();
        res.status(200).json(paciente);
    },

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
    }
}