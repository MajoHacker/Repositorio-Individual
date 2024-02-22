setTimeout(() => {
    console.log("jojo.te hakie");
}, 7000);

const arreglo = [5000, 60, 20, 10, 7000, 340, 9000, 180];

for (let item of arreglo){
    setTimeout(() =>{
        console.log(item);
    }, item);
}

console.log("esto se imprime antes de los números");

// http es un módulo de node con todas las funciones de un servidor web
const http = require("http");

const server = http.createServer( (request, response) => {
    console.log(request.url);
    response.setHeader("Content-Type", "text/html");
    response.write(`
    <!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laboratorio 6</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
  </head>
  <body>
    <section class="section">
      <div class="container">
        <h1 class="title">
          Validador de contraseñas
        </h1>
        <form class="box">
          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input id="password" class="input" type="password" placeholder="********">
            </div>
          </div>
        
          <button id="boton_validar" class="button is-info">Validar</button>
          <br>
          <br>
          <h1 id="texto_validacion"></h1>
          <br>
          <img src="images/inicio.jpg" id ="imagen" width="224" height="48">

        </form>
        <!-- preguntas -->
        <h1 class="title">
          Preguntas laboratorio 6:
        </h1>
        <!-- 1 -->
        <article class="message">
          <div class="message-header">
            <p>¿Por qué es una buena práctica usar JavaScript para checar que sean válidos los inputs de las formas antes de enviar los datos al servidor?</p>
            <button class="delete" aria-label="delete"></button>
          </div>
          <div class="message-body">
            <strong>Mejora la experiencia del usuario</strong> ya que permite detectar errores antes de enviar los datos al servidor, lo que ayuda a los usuarios a corregirlos rápidamente sin necesidad de recargar la página, además se reduce la cantidad de solicitudes incorrectas por lo que mejora la eficiencia del procedimiento. También ayuda a prevenir ataques de seguridad, como la filtración de datos.
          </div>
        </article>
        <br>

        <!-- 2 -->
        <article class="message">
          <div class="message-header">
            <p>¿Cómo puedes saltarte la seguridad de validaciones hechas con JavaScript?</p>
            <button class="delete" aria-label="delete"></button>
          </div>
          <div class="message-body">
            Algunos usuarios podrían intentar manipular el DOM (Document Object Model) de la página web utilizando técnicas como <strong>inyección de código JavaScript </strong>para evitar las validaciones del lado del cliente.
          </div>
        </article>
        <br>

        <!-- 3 -->
        <article class="message">
          <div class="message-header">
            <p>Si te puedes saltar la seguridad de las validaciones de JavaScript, entonces ¿por qué la primera pregunta dice que es una buena práctica?</p>
            <button class="delete" aria-label="delete"></button>
          </div>
          <div class="message-body">
            Aunque se puede saltar estas validaciones, es una buena practica hacerlas ya que como dije anteriormente mejora la experiencia del usuario y trae muchos más beneficios, sin embargo es importante mencionar que esto <strong>no debe ser la unica medida de seguridad</strong> en una aplicación web.
          </div>
        </article>
        <br>

        <!-- referencias -->
        <h1 class="title">
          Referencias:
        </h1>
        <p>Validación de formularios de datos - Aprende desarrollo web | MDN. (2023, 1 septiembre). MDN Web Docs. https://developer.mozilla.org/es/docs/Learn/Forms/Form_validation</p>
        <p>Ada. (2020, 12 septiembre). Cómo saltarse la validación HTML5 de un formulario. https://didacticode.com/como-saltarse-validacion-html5-formulario/</p>
        <br>
        <footer class="footer">
          <div class="content has-text-centered">
            <p>
              <strong>Creado</strong> por <a href="https://github.com/MajoHacker/Repositorio-Individual/tree/main">María José Gaytán</a>. 
            </p>
          </div>
        </footer>
      </div>
    </section>
    <script>
    document.getElementById("boton_validar").addEventListener("click", function(event) {
        event.preventDefault();
        validatePassword();
      });
      
      function validatePassword() {
        var password = document.getElementById("password").value;
        var textoValidacion = document.getElementById("texto_validacion");
        var imagen = document.getElementById("imagen");
        var botonValidar = document.getElementById("boton_validar");
      
        // criterios de contraseña
        if (password.length < 8) {
          textoValidacion.innerHTML = "La contraseña debe tener al menos 8 caracteres";
          imagen.src = "images/triste.jpg";
        } else if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
          textoValidacion.innerHTML = "La contraseña debe contener al menos una letra mayúscula y una letra minúscula";
          imagen.src = "images/triste.jpg";
        } else if (!/\d/.test(password)) {
          textoValidacion.innerHTML = "La contraseña debe contener al menos un número";
          imagen.src = "images/triste.jpg";
        } else {
          textoValidacion.innerHTML = "La contraseña es válida";
          imagen.src = "images/messirve.jpg";
          botonValidar.innerHTML = "Validar otra contraseña";
          botonValidar.classList.remove("is-info");
          botonValidar.classList.add("is-success");
          // limpia la contraseña
          document.getElementById("password").value = "";
          // elimina el controlador de eventos anterior
          botonValidar.removeEventListener("click", validatePassword);
          // agrega un nuevo controlador de eventos para validar otra contraseña
          botonValidar.addEventListener("click", resetValidation);
        }
      }
      
      function resetValidation() {
        var textoValidacion = document.getElementById("texto_validacion");
        var imagen = document.getElementById("imagen");
        var botonValidar = document.getElementById("boton_validar");
      
        textoValidacion.innerHTML = "";
        imagen.src = "images/inicio.jpg";
        botonValidar.innerHTML = "Validar";
        botonValidar.classList.remove("is-success");
        botonValidar.classList.add("is-info");
        // elimina el controlador de eventos anterior
        botonValidar.removeEventListener("click", resetValidation);
        // agrega un nuevo controlador de eventos para validar contraseña
        botonValidar.addEventListener("click", validatePassword);
      }
    </script>
  </body>
</html>
    `);




    response.end();
});

server.listen(3000);