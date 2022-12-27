const router = require('express-promise-router')();

const cassandraControler = require("../controllers/cassandradb")

router.get("/", cassandraControler.init)
router.get("/consulta-1", cassandraControler.consulta1)
router.get("/consulta-2", cassandraControler.consulta2)
router.get("/consulta-3", cassandraControler.consulta3)
router.get("/consulta-4", cassandraControler.consulta4)
router.get("/consulta-5", cassandraControler.consulta5)
router.get("/consulta-6", cassandraControler.consulta6)
router.get("/consulta-7", cassandraControler.consulta7)
router.get("/consulta-8", cassandraControler.consulta8)
router.get("/consulta-9", cassandraControler.consulta9)
router.get("/consulta-10", cassandraControler.consulta10)

module.exports = router