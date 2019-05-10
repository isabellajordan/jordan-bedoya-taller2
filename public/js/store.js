var inAltura = document.querySelector('#inputAltura');
function buscarPorAltura(){
    location.href= '/store?altura=' + inAltura.value;
    console.log(inAltura.value);
}

if(inAltura){

    inAltura.addEventListener('change', buscarPorAltura);
}


//NO FUNCIONA
/*
var filtroTipo = document.querySelectorAll('#filtroTipo');
function buscarPorTipos(tipo){
    location.href= '/store?tipo=' + filtroTipo.value;
    console.log(filtroTipo.value);
}

if(filtroTipo){

    filtroTipo.addEventListener('change', buscarPorTipos);
}

filtroTipo.forEach(buscarPorTipos);

*/

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