const router = require('express-promise-router')();

const {
    index,
    newPaciente,
    getPaciente,
    replacePaciente,
    deletePaciente,
    getPacienteLogActividades,
    newPacienteLogActividad,
    //reales
    newHabitacion,
    newHabitacionLogHabitacion,
    newLogActividad,
    getLogsActividad,
    getLogsHabitacion,
    getHabitaciones,
    getPacientes,
    consulta1,
    consulta2,
    consulta3,
    consulta4,
    consulta5,
    consulta6,
    consulta7,
    consulta8,
    consulta9,
    consulta10
} = require('../controllers/mongodb')

//Rutas de ejemplo!
/*router.get('/',index);
router.post('/',newPaciente);
router.get('/:pacienteId',getPaciente);
router.put('/:pacienteId',replacePaciente);
router.delete('/:pacienteId',deletePaciente);
router.get('/:pacienteId/log-actividades',getPacienteLogActividades)
router.post('/:pacienteId/log-actividades',newPacienteLogActividad)*/

//Rutas reales
//Rutas para guardar
router.get('/',index);
router.get('/get-logs-actividad',getLogsActividad);
router.get('/get-logs-habitacion',getLogsHabitacion);
router.get('/get-pacientes',getPacientes);
router.get('/get-habitaciones',getHabitaciones);
router.get('/consulta-1',consulta1),
router.get('/consulta-2',consulta2),
router.get('/consulta-3',consulta3),
router.get('/consulta-4',consulta4),
router.get('/consulta-5',consulta5),
router.get('/consulta-6',consulta6),
router.get('/consulta-7',consulta7),
router.get('/consulta-8',consulta8),
router.get('/consulta-9',consulta9),
router.get('/consulta-10',consulta9)




router.post('/save-paciente',newPaciente);
router.post('/save-habitacion',newHabitacion);
router.post('/:habitacionId/save-habitacion-log',newHabitacionLogHabitacion)
router.post('/:habitacionId/:pacienteId/save-actividad-log',newLogActividad)

module.exports = router;