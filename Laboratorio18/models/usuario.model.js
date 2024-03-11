const db = require('../util/database');

module.exports = class Usuario {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_username, mi_password) {
        this.username = mi_username;
        this.password = mi_password;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute(
            'INSERT INTO usarios (username, password) VALUES (?, ?)', // le puse usarios a mi tabla en la base de datos
            [this.username, this.password]
        );
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchOne(username, password){
        return db.execute('SELECT * FROM usarios WHERE idfans=?',
            [idfans]);
    }

    static fetch(idfans){
        if(id){
            return this.fetchOne(idfans);
        }
        else{
            return this.fetchOne();
        }
    }

}