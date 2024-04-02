module.exports = (request, response, next) => {
    let can_registrar = false;
    for (let permiso of request.session.permisos) {
        if(permiso.funcion == 'registrar') {
            can_registrar = true;
        }
    }
    if (can_registrar) {
        next();
        
    } else {
        return response.redirect('/users/logout');
    }
    
}