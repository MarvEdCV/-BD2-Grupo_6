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
    },

    consulta1: async (req,res,next) => {
        const menores = await Paciente.count({
            edad:{$lt:18}
        });
        const medianaEdad = await Paciente.count({
            $and:[
                {edad:{$lte:64}},
                {edad:{$gte:18}}
            ]
        });
        const mayores = await Paciente.count({
            edad:{$gt:64}
        });
        datos = {
            group: 6,
            query: 1,
            data: {
                pediatricos:menores,
                "mediana edad": medianaEdad,
                geriatrico: mayores
            }
        }
        res.status(200).json(datos);
    },

    consulta2: async (req,res,next) => {
        const consulta = await LogActividad.aggregate(
            [
                {
                    $group:{
                        _id:{numero_habitacion:'$habitacionx'},
                        num_pacientes:{$sum:1}
                    }
                },
                {
                    $sort: {_id: 1}
                }
            ]);
        datos = {
            group: 6,
            query: 2,
            data: consulta
        }
        res.status(200).json(datos);
    },
    consulta3: async (req,res,next) => {
        const consulta = await Paciente.aggregate([
            {
                $group:{
                    _id:{genero:'$genero'},
                    cantidad_pacientes:{$sum:1}
                }
            },
            {
                $sort:{cantidad_pacientes:1}
            }
        ]);
        datos = {
            group: 6,
            query: 3,
            data: consulta
        }
        res.status(200).json(datos);
    },
    consulta4: async (req,res,next) => {
        const consulta = await Paciente.aggregate([
            {
                $group:{
                    _id:{edad:'$edad'},
                    cantidad_pacientes:{$sum:1}
                }
            },
            {
                $sort:{cantidad_pacientes:-1}
            },
            {
                $limit : 5
            }
        ])
        datos = {
            group: 6,
            query: 4,
            data: consulta
        }
        res.status(200).json(datos);
    },
    consulta5: async (req,res,next) => {
        const consulta = await Paciente.aggregate([
            {
                $group:{
                    _id:{edad:'$edad'},
                    cantidad_pacientes:{$sum:1}
                }
            },
            {
                $sort:{cantidad_pacientes:1}
            },
            {
                $limit : 5
            }
        ])
        datos = {
            group: 6,
            query: 5,
            data: consulta
        }
        res.status(200).json(datos);
    },
    consulta6: async (req,res,next) => {
        const consulta = await LogActividad.aggregate([
            {
                $group:{
                    _id:{habitacion:'$habitacionx'},
                    cantidad_usos:{$sum:1}
                }
            },
            {
                $sort:{cantidad_usos:-1}
            },
            {
                $limit : 5
            }
        ])
        datos = {
            group: 6,
            query: 6,
            data: consulta
        }
        res.status(200).json(datos);
    },
    consulta7: async (req,res,next) => {
        const consulta = await LogActividad.aggregate([
            {
                $group:{
                    _id:{habitacion:'$habitacionx'},
                    cantidad_usos:{$sum:1}
                }
            },
            {
                $sort:{cantidad_usos:1}
            },
            {
                $limit : 5
            }
        ])
        datos = {
            group: 6,
            query: 7,
            data: consulta
        }
        res.status(200).json(datos);
    },
    consulta8: async (req,res,next) => {
        const consulta = await LogHabitacion.aggregate([
            {$match:{statusx:'Inicia limpieza.'}},
            {
                $group:{
                    _id:{habitacion:'$habitacionx'},
                    cantidad_limpieza:{$sum:1}
                }
            },
            {
                $sort:{cantidad_limpieza:-1}
            },
            {$limit : 5}
        ])
        datos = {
            group: 6,
            query: 8,
            data: consulta
        }
        res.status(200).json(datos);
    },
    consulta9: async (req,res,next) => {
        const consulta = await LogHabitacion.aggregate([
            {$match:{statusx:'Inicia limpieza.'}},
            {
                $group:{
                    _id:{habitacion:'$habitacionx'},
                    cantidad_limpieza:{$sum:1}
                }
            },
            {
                $sort:{cantidad_limpieza:1}
            },
            {$limit : 5}
        ])
        datos = {
            group: 6,
            query: 9,
            data: consulta
        }
        res.status(200).json(datos);
    },
    consulta10: async (req,res,next) => {
        const consulta = await LogActividad.aggregate([
            {
                $group:{
                    _id:{$dayOfMonth:'$timestampx',$month:'$timestampx',$year:'$timestampx'},
                    cantidad_pacientes:{$sum:'$pacientex'}
                }
            },
            {
                $sort:{cantidad_pacientes:-1}
            },
            {$limit : 1}
        ])
        datos = {
            group: 6,
            query: 10,
            data: consulta
        }
        res.status(200).json(datos);
    }
}