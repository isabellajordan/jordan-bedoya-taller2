
var prod = require('./products');

console.log(prod);

// importar el módulo express
//express es la librería para utilizarla en la app
var express = require('express');

// crear la variable app usando express
var app = express();

var motorRender= require('express-handlebars');

// configurar la carpeta public como "pública"
app.use(express.static('public'));

//Configurar handlebars que es el motor de render
app.engine('handlebars',motorRender());
app.set('view engine', 'handlebars');


// configurar la ruta inicial HOME
app.get('/', function(req, res) {
  res.render('home');
});

// configurar la ruta store
app.get('/store', function(request, response){
    response.render('store', {productos: prod});
});

// configurar la ruta product
app.get('/product', function(request, response){
    response.send('product');
});

// configurar la ruta bag
app.get('/bag', function(request, response){
    response.send('bag');
});

// configurar la ruta checkout
app.get('/checkout', function(request, response){
  response.send('checkout');
});

// iniciar el servidor en el puerto 3000
app.listen(3000, function() {
  console.log('Aplicación ejemplo, escuchando el puerto 3000!');
}); 