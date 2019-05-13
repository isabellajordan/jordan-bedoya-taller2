
var prod = require('./products');

console.log(prod);

// importar el módulo express
//express es la librería para utilizarla en la app
var express = require('express');

// crear la variable app usando express
var app = express();

var motorRender= require('express-handlebars');

//mongo client
var MongoClient= require('mongodb').MongoClient;

//assert
//para verificar que no haya un null
var assert= require('assert');

//constante de URL para representar la conexión a la base de datos
const url = 'mongodb://localhost:27017';

//nombre de la base de datos creada en mongp
const dbName= 'store';

//crear un nuevo mongo client
const client= new MongoClient(url, { useNewUrlParser: true });

var db= null;

//conectarnos a la base de datos

client.connect(function(err) {
  //si error es diferente de nulo
  assert.equal(null, err);
  console.log("estamos conectados");
  
  //conectarnos a la db
  db = client.db(dbName);
  
  //client.close();
});


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
app.get('/store/:tipo?', function(request, response){
  
  //colección 
  const products= db.collection('products');
 
  var query = {};

  
  //solo si en params categoría hay algún valor entonces a query se le agrega el request params categoria. Si no tiene valor query está vacío
  if (request.params.tipo){
    query.tipo = request.params.tipo;
  }

  //XK QUERY
  /*
  //NO FUNCIONA EL FILTRO TIPO
  if (request.query.tipo){
    query.tipo = request.query.tipo;
  }
*/

  if (request.query.altura){
    query.altura = { $lte: parseInt(request.query.altura)};
  }

  console.log(request.query.tipo);
  
  //dentro de esta función tenemos los resultados de ir a buscar los productos
  products.find(query).toArray(function(err, docs){
    
    assert.equal(null,err);
    //nos muestra cuántos documentos tenemos
    console.log('encontramos los documentos', docs.length);
    
    
    var contexto = {
      productos: docs,
      valorAltura: request.query.altura|10,
      tipo: request.params.tipo,

      //esto ño
      esrosas: request.params.tipo == "rosas",
      esclaveles: request.params.tipo == "claveles",
      esorquideas: request.params.tipo == "orquideas",
      
    };
    console.log(contexto.productos, "ESTOS SON LOS PRODUCTOS QUE PASO AL HBS ----------- UNICRONIOS ROSA DE EL VLAOR DEL INFINITO MEINAHFBSF");
    response.render('store', contexto);
  });
  
});

// configurar la ruta product
app.get('/product/:nombre', function(request, response){

  
  //de nuevo base de datos porque se cmabia de link
  const products= db.collection('products');


  console.log(request.params.nombre);
  console.log(request.params.precio);

  var query ={};

  if(request.params.nombre){
query.nombre= request.params.nombre;
  }

  if(request.query.precio){
query.precio= { $lte:request.query.precio};
  }

  products.find(query).toArray(function(err, docs){
    
    assert.equal(null,err);
    console.log('encontramos los docs');
    
    //nos muestra cuántos documentos tenemos
    console.log(docs[0]);
    
    
    var contexto = {
      producto: docs[0],
    };
    
    
    response.render('product', contexto);
  });
});

// configurar la ruta bag
app.get('/bag', function(request, response){

  const products= db.collection('products');


  response.render('bag');
});

// configurar la ruta checkout
app.get('/checkout', function(request, response){
  response.render('checkout');
});

// iniciar el servidor en el puerto 3000
app.listen(3000, function() {
  console.log('Aplicación ejemplo, escuchando el puerto 3000!');
}); 