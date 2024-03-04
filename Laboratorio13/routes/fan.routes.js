const express = require('express');
const router = express.Router();

const fans = [
  {
    nombre: "María José Gaytán",
  }
];

router.get('/', (request, response, next) => {
  console.log('Ruta /');
  response.render('main' , {
    fans: fans,
  });
});

router.get('/fan', (request, response, next) => {
  console.log('Ruta /fan');
  response.render('fan', {
      fans: fans,
  });
});

router.post('/fan', (request, response, next)=>{
  console.log(request.body);
  fans.push(request.body);
  const nombre = request.body['nombre'];
  const fans_registrados = `${nombre}\n`;
  const filesystem = require("fs");
  filesystem.appendFileSync(`fans_registrados.text`, fans_registrados);
  response.redirect('/');
});

module.exports = router;
