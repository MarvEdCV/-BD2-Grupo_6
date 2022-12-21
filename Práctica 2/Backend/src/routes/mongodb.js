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
    getPacientes
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


router.post('/save-paciente',newPaciente);
router.post('/save-habitacion',newHabitacion);
router.post('/:habitacionId/save-habitacion-log',newHabitacionLogHabitacion)
router.post('/:habitacionId/:pacienteId/save-actividad-log',newLogActividad)

module.exports = router;