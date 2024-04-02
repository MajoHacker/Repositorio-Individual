const Fan = require('../models/fan.model')

exports.get_fans = (request, response, next) => {
    console.log('Ruta /fan');
    response.render('fan', {
      username: request.session.username || '',
      csrfToken: request.csrfToken(),
      permisos: request.session.permisos || [],
    });
  };

exports.post_fans = (request, response, next) => {
    console.log(request.body);
    console.log(request.file);
    const fans = new Fan(request.file.filename);
    
    
    fans.save()
    .then(([rows, fieldData]) => {
      response.setHeader('Set-Cookie', 'ultimo_fan=' + request.body.nombre + '; HttpOnly');
      // request.cookies.ultimo_fan = request.body.nombre;
      response.redirect('/');
    })
    .catch((error) => {console.log(error)});

  
  };

exports.get_root = (request, response, next) => {
    console.log('Ruta /');
    let ultimo_fan = request.get('Cookie')
    // if (ultimo_fan){
    //   ultimo_fan = ultimo_fan.split('=')[1] || '';
    // }
    // else {
    //   ultimo_fan = '';
    // }
    request.cookies.ultimo_fan

    //Nuevo
    Fan.fetch(request.params.idfans).then(([rows, fieldData]) => {
      console.log(fieldData);
      console.log(rows);
      return response.render("main" , {
        fans: rows,
        ultimo_fan: ultimo_fan,
        username: request.session.username || '',
        permisos: request.session.permisos || [],
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

exports.get_buscar = (request, response, next) => {
  Fan.search(request.params.valor_busqueda)
      .then(([fans, fieldData]) => {
          return response.status(200).json({fans: fans});
      })
      .catch((error) => {console.log(error)});
};

 