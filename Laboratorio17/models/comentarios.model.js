const filesystem = require("fs");

const comentarios = [
    {
      opinion: "Buena página",
    }
  ];

  module.exports = class Comentario {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_opinion) {
        this.opinion = mi_opinion;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        comentarios.push({
            opinion: this.opinion,
        }); // es lo mismo que fans.push(this);
        let coment = `${this.opinion}\n`
        filesystem.appendFileSync(`Comentarios_registrados.text`, coment); // para crear el archivo
        
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return comentarios;
    }

}