var inAltura = document.querySelector('#inputAltura');
function buscarPorAltura(){
    location.href= '/store?altura=' + inAltura.value;
    console.log(inAltura.value);
}


if(inAltura){

    inAltura.addEventListener('change', buscarPorAltura);
}

/*
var filtroTipos = document.querySelectorAll('.filtroTipo');

filtroTipos.forEach(filtroTipo =>{

    //imprime todos los productos de la tienda por su nombre
    //console.log(botonProducto.getAttribute('name'))
    filtroTipo.addEventListener('click',function(event){
        event.preventDefault;



    })
});
*/