

var listaProductos = [];

//localStorage.setItem('listaProductos', JSON.stringify(listaProductos));

if(localStorage.getItem('listaProductos') != null){
    listaProductos = JSON.parse(localStorage.getItem('listaProductos'));
}


var botonesAgregar = document.querySelectorAll('.agregar');
//console.log(botonesAgregar);

botonesAgregar.forEach(botonProducto =>{

    //imprime todos los productos de la tienda por su nombre
    //console.log(botonProducto.getAttribute('name'))
    botonProducto.addEventListener('click',function(event){
        event.preventDefault;

  //agregar el producto general
        var padre = this.parentNode;
        var nombre = padre.querySelector('.producto__nombre').innerText;
        var precio = padre.querySelector('.producto__precio').innerText;
        var imagen = padre.querySelector('.producto__imagen').src;
        var producto = {
            nombre: nombre,
            precio: precio,
            imagen: imagen,
        };
        
        listaProductos.push(producto);
        actualizarCarrito();
        localStorage.setItem('listaProductos', JSON.stringify(listaProductos));


      
        //this porque es el botón en sí mismo
 console.log(this.getAttribute('name'));

    })
});


//carrito producto específico

var botonesAgregarProducto = document.querySelectorAll('.agregarProducto');
//console.log(botonesAgregar);

botonesAgregarProducto.forEach(botonProducto =>{

    //imprime todos los productos de la tienda por su nombre
    //console.log(botonProducto.getAttribute('name'))
    botonProducto.addEventListener('click',function(event){
        event.preventDefault;

  //agregar el producto
        var nombre = document.querySelector('.producto__nombre').innerText;
        var precio = document.querySelector('.producto__precio').innerText;
        var imagen = document.querySelector('.producto__imagen').src;
        var producto = {
            nombre: nombre,
            precio: precio,
            imagen: imagen,
        };
        
        listaProductos.push(producto);
        actualizarCarrito();
        localStorage.setItem('listaProductos', JSON.stringify(listaProductos));


      
        //this porque es el botón en sí mismo
 console.log(this.getAttribute('name'));

    })
});


var carritoNum = document.querySelector('.carrito__num');
var listaCarrito = document.querySelector('.carrito-desplegado__lista');

function actualizarCarrito(){
    console.log(listaProductos);
    carritoNum.innerHTML = listaProductos.length;
    listaCarrito.innerHTML = '';


    listaProductos.forEach(function(producto,index){


        listaCarrito.innerHTML += `<div class="carrito">
        <p>Carrito</p>
        <span class="carrito__num"></span>
    </div>




    <div class="carrito-desplegado">
        <h3>Carrito</h3>
        <ul class="carrito-desplegado__lista">

<div class="producto">
        <img class="producto__imagen" src="../{{imagen.[0]}}" width="200px">
        <h3 class="producto__nombre">{{nombre}}</h3>
        <p class="producto__precio">{{precio}}</p>
        <p class="producto__tipo">{{tipo}}</p>
     
    </div>

        </ul>
        <button class="carrito-desplegado__limpiar">Limpiar carrito</button>

    </div>`

    });
  
     
}

actualizarCarrito();
console.log(listaCarrito);