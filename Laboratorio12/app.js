const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

//Middleware
app.use((request, response, next) => {
  console.log('Middleware!');
  next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

const rutasFans = require('./routes/fan.routes');
app.use('/', rutasFans);

const rutasComentarios = require('./routes/comentarios.routes');
app.use('/', rutasComentarios);

app.use((request, response, next) => {
  response.status(404);
  response.sendFile(
    path.join(__dirname, 'views', '404.html')
  );
});

app.listen(3000);