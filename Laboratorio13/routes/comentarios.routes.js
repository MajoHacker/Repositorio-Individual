const express = require('express');
const router = express.Router();
const comentariosController = require('../controllers/comentarios.controller');

router.get('/comentarios', comentariosController.get_comentarios);
router.post('/comentarios', comentariosController.post_comentarios);

router.get('/goles', comentariosController.get_goles);

router.get('/majo', comentariosController.get_majo);

router.get('/entrevista', comentariosController.get_entrevista);

module.exports = router;
