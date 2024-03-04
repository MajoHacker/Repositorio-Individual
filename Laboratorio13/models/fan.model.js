const filesystem = require("fs");

const fans = [
    {
      nombre: "María José Gaytán",
    }
  ];

module.exports = class Fan {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_nombre) {
        this.nombre = mi_nombre;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        fans.push({
            nombre: this.nombre,
        }); // es lo mismo que fans.push(this);
        let fan_registrado = `${this.nombre}\n`
        filesystem.appendFileSync(`fans_registrados.text`, fan_registrado); // para crear el archivo
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return fans;
    }

}