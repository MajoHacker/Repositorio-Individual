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

const contenido = `<!-- titulo -->
<br>
<h3 class="text-center">
    ¿Por qué Messi es mejor que Cristiano Ronaldo?
</h3>
<div class="text-center">
  <img src="https://images.mediotiempo.com/ZUkP4hPQsz_fCRcm83Fd6lnL4N8=/958x596/uploads/media/2020/10/01/messi-vs-cristiano-ronaldo-historial.jpg" class="rounded" style="max-width: 55%;" alt="Imagen">
</div>
<br>
<!-- intro -->
<div class="container">
  <div class="row justify-content-center">
      <div class="col-lg-8">
          <h6 class="text-justify lh-base" style="color: #333131;">
              A lo largo de los años, el mundo del fútbol ha sido testigo de un debate apasionado que ha dividido a aficionados y expertos por igual.<br><br> Sin embargo, en medio de esta controversia, surge una verdad innegable: Lionel Messi sobresale como un jugador extraordinario, superando las expectativas y estableciendo nuevos estándares en el deporte rey.<br><br> En esta página, nos adentramos en el corazón de este debate, explorando por qué Lionel Messi es indiscutiblemente un jugador superior a Cristiano Ronaldo. A través de un análisis exhaustivo y la presentación de datos clave, revelaremos los aspectos esenciales que respaldan la afirmación de que Messi es el rey supremo en el mundo del fútbol.
          </h6>
      </div>
  </div>
</div>

<!-- estadisticas premios-->
<br>
<h3 class="text-center">
    Estadísticas (premios)
</h3>

<div class="container text-center">
  <div class="row justify-content-center">
      <div class="col-8">
          <table class="table">
              <thead>
                  <tr>
                      <th scope="col"></th>
                      <th scope="col">Premio</th>
                      <th scope="col">Messi</th>
                      <th scope="col">Cristiano</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <th scope="row">1</th>
                      <td>Mundial</td>
                      <td class="bg-info">1</td>
                      <td>0</td>
                  </tr>
                  <tr>
                      <th scope="row">2</th>
                      <td>Balón de Oro</td>
                      <td class="bg-info">8</td>
                      <td>5</td>
                  </tr>
                  <tr>
                      <th scope="row">3</th>
                      <td>The Best</td>
                      <td class="bg-info">3</td>
                      <td>2</td>
                  </tr>
                  <tr>
                      <th scope="row">4</th>
                      <td>Botas de Oro</td>
                      <td class="bg-info">6</td>
                      <td>4</td>
                  </tr>
                  <tr>
                      <th scope="row">5</th>
                      <td>Champions</td>
                      <td>4</td>
                      <td class="bg-info">5</td>
                  </tr>
                  <tr>
                      <th scope="row">6</th>
                      <td>Ligas</td>
                      <td class="bg-info">12</td>
                      <td>7</td>
                  </tr>
                  <tr>
                      <th scope="row">7</th>
                      <td>Copas</td>
                      <td class="bg-info">7</td>
                      <td>6</td>
                  </tr>
                  <tr>
                      <th scope="row">8</th>
                      <td>Super copas</td>
                      <td class="bg-info">9</td>
                      <td>7</td>
                  </tr>
              </tbody>
          </table>
      </div>
  </div>
</div>

<!-- cambio de seccion -->
<br>
<div class="text-center">
  <img src="https://phantom-marca-us.unidadeditorial.es/7a062dbb0179dca7864e4c0fc9932539/resize/660/f/webp/assets/multimedia/imagenes/2022/12/22/16716677011104.jpg" class="rounded" style="max-width: 55%;" alt="Imagen">
</div>
<br>
<div class="container">
  <div class="row justify-content-center">
      <div class="col-lg-8">
          <h6 class="text-justify lh-base" style="color: #333131;">
            Al analizar detenidamente las estadísticas de trofeos y premios, es evidente que Lionel Messi destaca sobre Cristiano Ronaldo en la mayoría de los casos. No obstante, si aún existen dudas al respecto, vale la pena examinar las estadísticas individuales del astro argentino.
          </h6>
      </div>
  </div>
</div>

<!-- estadisticas individuales-->
<br>
<h3 class="text-center">
  Estadísticas (individuales)
</h3>
<div class="container text-center">
  <div class="row justify-content-center">
      <div class="col-8">
          <table class="table">
              <thead>
                  <tr>
                      <th scope="col"></th>
                      <th scope="col"></th>
                      <th scope="col">Messi</th>
                      <th scope="col">Cristiano</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <th scope="row">1</th>
                      <td>Partidos</td>
                      <td>853</td>
                      <td class="bg-info">949</td>
                  </tr>
                  <tr>
                      <th scope="row">2</th>
                      <td>Goles</td>
                      <td class="bg-info">704</td>
                      <td>701</td>
                  </tr>
                  <tr>
                      <th scope="row">3</th>
                      <td>Asistencias</td>
                      <td class="bg-info">338</td>
                      <td>225</td>
                  </tr>
              </tbody>
          </table>
      </div>
  </div>
</div>

<!-- cambio de sección -->
<br>
<div class="text-center">
  <img src="https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2019%2F1223%2Fr645254_1296x729_16%2D9.jpg&w=570&format=jpg" class="rounded mx-auto d-block" style="max-width: 55%;">
</div>
<br>
<div class="container">
  <div class="row justify-content-center">
      <div class="col-lg-8">
          <h6 class="text-justify lh-base" style="color: #333131;">
            Si todavía no te he convencido, permíteme proporcionarte un dato relevante: en total, se han enfrentado en 37 ocasiones, con el argentino logrando la victoria en 17 ocasiones, el portugués en 11 ocasiones, y registrándose 9 empates entre ambos contendientes.
          </h6>
      </div>
  </div>
</div>

<!-- galeria de fotos -->
<br>
<h3 class="text-center">
  Galería de las mejores fotos
</h3>
<!-- parte 1 -->
<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-4">
      <div class="card mb-4">
        <img src="https://www.mundodeportivo.com/files/image_948_465/files/fp/uploads/2022/10/16/634bbbfabe3aa.r_d.1569-641-7050.jpeg" class="card-img-top" alt="Imagen 1">
        <div class="card-body">
          <h5 class="card-title">El comienzo</h5>
          <p class="card-text">Debut del GOAT. 16 de noviembre de 2003</p>
          <button class="btn btn-info">Like</button>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card mb-4">
        <img src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt0812319d08468bce/60df3c6321d15821fe7d9f1f/a0f6b0b809b959c29bba358626f7bbcfeaa46129.jpg?auto=webp&format=pjpg&width=1080&quality=60" class="card-img-top" alt="Imagen 2">
        <div class="card-body">
          <h5 class="card-title">Historia</h5>
          <p class="card-text">Gol de último minuto contra Real Madrid. 23 de Abril de 2017</p>
          <button class="btn btn-info">Like</button>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- parte 2 -->
<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-4">
      <div class="card mb-4">
        <img src="https://www.lavanguardia.com/files/image_948_465/uploads/2017/03/09/5fa3c8ee1f8e1.jpeg" class="card-img-top" alt="Imagen 1">
        <div class="card-body">
          <h5 class="card-title">Pasión</h5>
          <p class="card-text">Remontada 6-1 vs psg.</p>
          <button class="btn btn-info">Like</button>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card mb-4">
        <img src="https://estaticos-cdn.prensaiberica.es/clip/57f568a6-afe2-40fc-9013-c87134c2b2e5_media-libre-aspect-ratio_default_0.jpg" class="card-img-top" alt="Imagen 2">
        <div class="card-body">
          <h5 class="card-title">El final</h5>
          <p class="card-text">Por fin levanta el único trofeo que le faltaba. 18 de diciembre de 2022</p>
          <button class="btn btn-info">Like</button>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pregunta del lab -->
<br>
<h3 class="text-center">
    Pregunta lab 11: 
    <small class="text-body-secondary">Describe el archivo package.json.</small>
</h3>
<div class="container">
  <div class="row justify-content-center">
      <div class="col-lg-8">
          <h6 class="text-justify lh-base" style="color: #333131;">
          Es un archivo de metadatos utilizado principalmente en proyectos de Node.js para describir y gestionar las dependencias, configuraciones y scripts del proyecto.<br><br>
          Algunos campos comunes son: <br><br>
          <span class="highlight">nombre:</span> El nombre del proyecto.
          <br><br>
          <span class="highlight">versión:</span> La versión actual del paquete.
          <br><br>
          <span class="highlight">descripción:</span> Una breve descripción del proyecto.
          <br><br>
          <span class="highlight">scripts:</span> Un objeto que contiene comandos de shell utilizados para diversas tareas, como ejecutar pruebas.
          <br><br>
          <span class="highlight">autor:</span> La persona responsable del paquete.
          <br><br>
          <span class="highlight">repository:</span> La URL del repositorio de código fuente del paquete.
          <br>
          </h6>
      </div>
  </div>
</div> 

<!-- referencia -->
<br>
<h3 class="text-center">
    Referencias: 
</h3>
<div class="container">
  <div class="row justify-content-center">
      <div class="col-lg-8">
          <h6 class="text-justify lh-base" style="color: #333131;">
          El archivo package.json - Javascript en español. (s. f.). Lenguaje JS. https://lenguajejs.com/npm/administracion/package-json/#:~:text=Este%20archivo%20es%20un%20simple,y%20recuperar%20informaci%C3%B3n%20muy%20%C3%BAtil.
          </h6>
      </div>
  </div>
</div>
<br>
<br>
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

const fans = [
    {
      nombre: "María José Gaytán",
    }
  ];

router.get('/fan', (request, response, next) => {
    console.log(request.body);
    response.send(header + `
    <br><h3 class="title">Registrate como un fan de Messi:</h3>
    <form action="/fan" method="POST">
      <label class="label" for="nombre">Nombre</label>
      <input name="nombre" id="nombre" type="text" class="input"><br>
      <br><input class="btn btn-outline-info" type="submit" value="Registrarse"><br><br>
    </form>
    ` + footer); 
  });
  
router.post('/fan', (request, response, next)=>{
    console.log(request.body);
    fans.push(request.body);
    const nombre = request.body['nombre'];
    const fans_registrados = `${nombre}\n`;
    const filesystem = require("fs");
    filesystem.appendFileSync(`fans_registrados.text`, fans_registrados);
    response.redirect('/');
  });

router.get('/', (request, response, next) => {
    console.log('Ruta /');
    let tarjetas_fan = '';
      for(let fan of fans) {
        tarjetas_fan += `
        <!-- parte 1 -->
        <br>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-4">
              <div class="card mb-4">
                <div class="card-body">
                  <h5 class="card-title">${fan.nombre}</h5>
                </div>
              </div>
            </div>
        `};
    response.send(header + `<br><h3 class="text-center">Fans registrados:</h3>`+ tarjetas_fan + contenido + footer); 
});

module.exports = router;