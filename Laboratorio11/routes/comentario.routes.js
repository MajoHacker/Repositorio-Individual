const header = `<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laboratorio 11</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <style>
      .custom-bg {
        background-color: #e5edf4; 
      }
    </style>
    <style>
      .highlight {
        background-color: rgb(173, 229, 244);
        font-weight: bold;
      }
    </style>
  </head>
<body class="custom-bg">
<!-- Aquí empieza (barra navegadora) -->
<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">
            <img src="https://i.pinimg.com/originals/a9/b0/18/a9b01823301e96fb593458fd3713f2fe.png" alt="Messi" width="60" height="40">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/goles">Goles</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/fan">Registrate</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/comentarios">Comenta</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/majo">Jugadas Majo</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/entrevista">Entrevista</a>
                </li>
            </ul>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-info" type="submit">Buscar</button>
            </form>
        </div>
    </div>
</nav>
`;

const footer = `<!-- parte final  -->
<footer class="footer mt-auto py-3 bg-light">
  <div class="container text-center">
    <span class="text-muted">Creado por María José Gaytán Gil</span>
  </div>
</footer>

</body>
</html>
`;

const express = require('express');
const router = express.Router();

router.get('/comentarios', (request, response, next) => {
    console.log('Ruta /comentarios');
    response.send(header + `
    <br><h3> Deja un comentario:</h3>
    <div class="mb-3">
    <input type="text" class="form-control" id="comentario" placeholder="Escribe aqui tu comentario">
    </div>
    <button type="submit" class="btn btn-outline-info" id="btnEnviar">Enviar</button>
    <br><br>
    `+ footer); 
  });

module.exports = router;