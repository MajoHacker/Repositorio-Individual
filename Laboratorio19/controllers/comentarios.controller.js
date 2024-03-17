const Comentario = require('../models/comentarios.model')

exports.get_comentarios = (request, response, next) => {
    console.log('Ruta /comentarios');
    response.render('comentarios', {
        username: request.session.username || '',
        csrfToken: request.csrfToken(),
        permisos: request.session.permisos || [],
    })
};

exports.post_comentarios = (request, response, next) => {
    console.log(request.body);
    const comentarios = new Comentario(request.body.opinion);
    comentarios.save();
    response.redirect('/');
};

exports.get_goles = (request, response, next) => {
    console.log('Ruta /goles');
    response.render('goles', {
        username: request.session.username || '',
        permisos: request.session.permisos || [],
    })
};

exports.get_majo = (request, response, next) => {
    console.log('Ruta /majo');
    response.render('majo', {
        username: request.session.username || '',
        permisos: request.session.permisos || [],
    })
};

exports.get_entrevista = (request, response, next) => {
    console.log('Ruta /entrevistas');
    response.render('entrevistas', {
        username: request.session.username || '',
        permisos: request.session.permisos || [],
    })
};