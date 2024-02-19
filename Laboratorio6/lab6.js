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
      imagen.src="images/triste.jpg";
    } else if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
      textoValidacion.innerHTML = "La contraseña debe contener al menos una letra mayúscula y una letra minúscula";
      imagen.src="images/triste.jpg";
    } else if (!/\d/.test(password)) {
      textoValidacion.innerHTML = "La contraseña debe contener al menos un número";
      imagen.src="images/triste.jpg";
    } else {
      textoValidacion.innerHTML = "La contraseña es válida";
      imagen.src="images/messirve.jpg";
      botonValidar.innerHTML = "Validar otra contraseña";
      botonValidar.className = "button is-success";
      // limpia la contraseña
      document.getElementById("password").value = "";
      // elimina el controlador de eventos anterior
      botonValidar.removeEventListener("click", validatePassword);
      // agrega un nuevo controlador de eventos para validar otra contraseña
      botonValidar.addEventListener("click", nuevaPassword);
    }
  }
  
  // validar otra contraseña
  const nuevaPassword = () => {
    var botonValidar = document.getElementById("boton_validar");
    botonValidar.innerHTML = "Validar";
    botonValidar.className = "button is-info";
    // elimina el controlador de eventos anterior
    botonValidar.removeEventListener("click", nuevaPassword);
    // agregar el controlador de eventos original
    botonValidar.addEventListener("click", function(event) {
      event.preventDefault();
      validatePassword();
    });
  }
  