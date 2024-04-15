const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class Usuario {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_username, mi_password) {
        this.username = mi_username;
        this.password = mi_password;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return bcrypt.hash(this.password, 12).then((password_cifrado) => {
            return db.execute(
                'INSERT INTO usarios (username, password) VALUES (?, ?)',
                [this.username, password_cifrado]
                );
            })
            .catch((error) => {
                console.log(error);
                throw Error('Nombre de usuario duplicado: Ya existe un usuario con ese nombre');
            }); 
    }

    static fetchOne(username, password) {
        return db.execute(
            'SELECT * FROM usarios WHERE username=?',  // asi lo tengo en mi DB
            [username]);
    }

    static getPermisos(username) {
        return db.execute(
            `SELECT funcion 
            FROM usarios u, asigna a, rol r, posee p, permiso per
            WHERE u.username = ? AND u.username = a.username
            AND a.idrol = r.idrol AND r.idrol = p.idrol 
            AND p.idpermiso = per.idpermiso`, 
            [username]);
    }

}