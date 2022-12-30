const router = require('express-promise-router')();

const {
    consulta1,
    consulta2,
    consulta3,
    consulta4,
    consulta5,
    consulta6,
    consulta7,
    consulta8,
    consulta9
} = require('../controllers/mysql')

router.get('/consulta-1',consulta1);
router.get('/consulta-2',consulta2),
router.get('/consulta-3',consulta3),
router.get('/consulta-4',consulta4),
router.get('/consulta-5',consulta5),
router.get('/consulta-6',consulta6),
router.get('/consulta-7',consulta7),
router.get('/consulta-8',consulta8),
router.get('/consulta-9',consulta9),

module.exports = router;