const Fan = require('../models/fan.model')

exports.get_fans = (request, response, next) => {
    console.log('Ruta /fan');
    response.render('fan', {
      fans: Fan.fetchAll(),
    });
  };

exports.post_fans = (request, response, next) => {
    console.log(request.body);
    const fans = new Fan(request.body.nombre);
    fans.save();
    response.redirect('/');
  };

exports.get_root = (request, response, next) => {
    console.log('Ruta /');
    response.render('main' , {
      fans: Fan.fetchAll(),
    });
  };