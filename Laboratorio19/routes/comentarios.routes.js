const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth')
const comentariosController = require('../controllers/comentarios.controller');

router.get('/comentarios', isAuth, comentariosController.get_comentarios);
router.post('/comentarios', isAuth, comentariosController.post_comentarios);

router.get('/goles', isAuth, comentariosController.get_goles);

router.get('/majo', isAuth, comentariosController.get_majo);

router.get('/entrevista', isAuth, comentariosController.get_entrevista);

module.exports = router;
