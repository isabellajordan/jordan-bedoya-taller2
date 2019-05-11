

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

  //agregar el producto
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


var carritoNum = document.querySelector('.carrito__num');

function actualizarCarrito(){
    console.log(listaProductos);
    carritoNum.innerHTML = listaProductos.length;
     
}

actualizarCarrito();
