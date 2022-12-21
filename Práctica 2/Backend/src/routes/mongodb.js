const router = require('express-promise-router')();

const {
    index,
    newPaciente,
    getPaciente,
    replacePaciente,
    deletePaciente,
    getPacienteLogActividades,
    newPacienteLogActividad
} = require('../controllers/paciente')

router.get('/',index);
router.post('/',newPaciente);
router.get('/:pacienteId',getPaciente);
router.put('/:pacienteId',replacePaciente);
router.delete('/:pacienteId',deletePaciente);

router.get('/:pacienteId/log-actividades',getPacienteLogActividades)
router.post('/:pacienteId/log-actividades',newPacienteLogActividad)
module.exports = router;