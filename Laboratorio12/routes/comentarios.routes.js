const express = require('express');
const router = express.Router();

router.get('/comentarios', (request, response, next) => {
    console.log('Ruta /comentarios');
  response.render('comentarios')
});

router.get('/goles', (request, response, next) => {
    console.log('Ruta /goles');
  response.render('goles')
});

router.get('/majo', (request, response, next) => {
    console.log('Ruta /majo');
  response.render('majo')
});

router.get('/entrevista', (request, response, next) => {
    console.log('Ruta /entrevistas');
  response.render('entrevistas')
});

module.exports = router;
