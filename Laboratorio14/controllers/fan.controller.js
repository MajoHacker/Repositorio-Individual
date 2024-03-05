const Fan = require('../models/fan.model')

exports.get_fans = (request, response, next) => {
    console.log('Ruta /fan');
    response.render('fan', {
      fans: Fan.fetchAll(),
      username: request.session.username || '',
    });
  };

exports.post_fans = (request, response, next) => {
    console.log(request.body);
    const fans = new Fan(request.body.nombre);
    fans.save();

    response.setHeader('Set-Cookie', 'ultimo_fan=' + request.body.nombre + '; HttpOnly');
    response.redirect('/');
  };

exports.get_root = (request, response, next) => {
    console.log('Ruta /');
    let ultimo_fan = request.get('Cookie')
    if (ultimo_fan){
      ultimo_fan = ultimo_fan.split('=')[1] || '';
    }
    else {
      ultimo_fan = '';
    }
    response.render('main' , {
      fans: Fan.fetchAll(),
      ultimo_fan: ultimo_fan,
      username: request.session.username || '',
    });
  };

