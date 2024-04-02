const db = require('../util/database');

module.exports = class Fan {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_nombre) {
        this.nombre = mi_nombre;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute(
            'INSERT INTO fans (nombre, username) VALUES (?, "Majo")',
            [this.nombre]
        );
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
       return db.execute('SELECT * FROM fans');
    }

    static fetchOne(idfans){
        return db.execute('SELECT * FROM fans WHERE idfans=?',
            [idfans]);
    }

    static fetch(idfans){
        if(idfans){
            return this.fetchOne(idfans);
        }
        else{
            return this.fetchAll();
        }
    }

}