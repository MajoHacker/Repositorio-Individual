const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth')
const canView = require('../util/can-view');
const comentariosController = require('../controllers/comentarios.controller');

router.get('/comentarios', isAuth, canView, comentariosController.get_comentarios);
router.post('/comentarios', isAuth, canView, comentariosController.post_comentarios);

router.get('/goles', isAuth, canView, comentariosController.get_goles);

router.get('/majo', isAuth, canView, comentariosController.get_majo);

router.get('/entrevista', isAuth, canView, comentariosController.get_entrevista);

module.exports = router;
