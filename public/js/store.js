var inAltura = document.querySelector('#inputAltura');
function buscarPorAltura(){
    location.href= '/store?altura=' + inAltura.value;
    console.log(inAltura.value);
}


if(inAltura){

    inAltura.addEventListener('change', buscarPorAltura);

}