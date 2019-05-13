var listaProductos = [];

var suma = 0;

//localStorage.setItem('listaProductos', JSON.stringify(listaProductos));

if (localStorage.getItem('listaProductos') != null) {
    listaProductos = JSON.parse(localStorage.getItem('listaProductos'));
}

var listaCarrito = document.querySelector('.carrito-desplegado__lista');
var carritoNum = document.querySelector('.carrito__num');


var botonesAgregar = document.querySelectorAll('.producto__agregar');
//console.log(botonesAgregar);

botonesAgregar.forEach(botonProducto => {

    //imprime todos los productos de la tienda por su nombre
    //console.log(botonProducto.getAttribute('name'))
    botonProducto.addEventListener('click', function (event) {
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
        console.log(precio);
        listaProductos.push(producto);
        actualizarCarrito();
        localStorage.setItem('listaProductos', JSON.stringify(listaProductos));



        //this porque es el botón en sí mismo
        console.log(this.getAttribute('name'));

    })
});


//carrito producto específico

var botonesAgregarProducto = document.querySelectorAll('.app__vista__vistaProducto__info__agregar');
//console.log(botonesAgregar);

botonesAgregarProducto.forEach(botonProducto => {

    //imprime todos los productos de la tienda por su nombre
    //console.log(botonProducto.getAttribute('name'))
    botonProducto.addEventListener('click', function (event) {
        event.preventDefault;

        //agregar el producto
        var nombre = document.querySelector('.app__vista__vistaProducto__info__nombre').innerText;
        var precio = document.querySelector('.app__vista__vistaProducto__info__precio').innerText;
        var imagen = document.querySelector('.app__vista__vistaProducto__visual__imgGrande__img').src;
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


var total = document.querySelector('.total-producto');
var subtotal = document.querySelector('.subtotal-producto');





function actualizarCarrito() {

  //  console.log(listaProductos);

    if (carritoNum != null) {
        carritoNum.innerHTML = listaProductos.length;
    }



    if (listaCarrito != null) {
        listaCarrito.innerHTML = '';

        listaProductos.forEach(function (producto, index) {

            listaCarrito.innerHTML += `            <ul>
            <div class="producto">
            <img class="producto__imagen" src="${producto.imagen}" width="200px">
            <h3 class="producto__nombre">${producto.nombre}</h3>
            <p class="producto__precio">${producto.precio}</p>
            <p class="producto__tipo">${producto.tipo}</p>
            <button class= "producto__eliminar">Eliminar</button>
         
        </div>
        </ul>
        
        `;

            console.log(producto.precio);

            var temporal = new String();
            for (let i = 1; i < producto.precio.length; i++) {
                temporal += producto.precio[i];

             console.log("sii"+parseInt(temporal));
            }


            suma += parseInt(temporal);
           

            if (subtotal != null) {
                subtotal.innerHTML = "$" + suma;
            }


            var btnEliminar= document.querySelectorAll('.producto__eliminar');

           for (let i = 0; i < btnEliminar.length; i++) {
              btnEliminar[i].addEventListener('click', (function btnEliminar(){
                 
                listaProductos.splice(i,1);

                window.location.reload(true);

                localStorage.setItem('listaProductos', JSON.stringify(listaProductos));

              }));
               
           }


        });

    }

}



console.log(listaCarrito);
actualizarCarrito();
