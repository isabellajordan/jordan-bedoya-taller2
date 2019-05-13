var listaProductos = [];

//localStorage.setItem('listaProductos', JSON.stringify(listaProductos));

if(localStorage.getItem('listaProductos') != null){
    listaProductos = JSON.parse(localStorage.getItem('listaProductos'));
}

var listaCarrito = document.querySelector('.carrito-desplegado__lista');
var carritoNum = document.querySelector('.carrito__num');


var botonesAgregar = document.querySelectorAll('.producto__agregar');
//console.log(botonesAgregar);

botonesAgregar.forEach(botonProducto =>{

    //imprime todos los productos de la tienda por su nombre
    //console.log(botonProducto.getAttribute('name'))
    botonProducto.addEventListener('click',function(event){
        event.preventDefault;

  //agregar el producto general
        var padre = this.parentNode;
        var nombre = padre.querySelector('.app__tienda__contProd__producto__nombre').innerText;
        var precio = padre.querySelector('.app__tienda__contProd__producto__precio').innerText;
        var imagen = padre.querySelector('.app__tienda__contProd__producto__imagen').src;
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






function actualizarCarrito(){

    console.log(listaProductos);

if(carritoNum != null){
    carritoNum.innerHTML = listaProductos.length;
}



    if (listaCarrito != null){
        listaCarrito.innerHTML = '';

        listaProductos.forEach(function(producto,index){
    
            listaCarrito.innerHTML += `            <ul>
            <div class="producto">
            <img class="producto__imagen" src="../${producto.imagen}" width="200px">
            <h3 class="producto__nombre">${producto.nombre}</h3>
            <p class="producto__precio">${producto.precio}</p>
            <p class="producto__tipo">${producto.tipo}</p>
         
        </div>
        </ul>
        
        `
        });

    }
 
      }

  





console.log(listaCarrito);
actualizarCarrito();
