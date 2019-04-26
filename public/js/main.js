var swiper = new Swiper('.swiper-container', {
  slidesPerView: 5,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },
});

function paginaCargada() {

  var imgBotones = document.querySelectorAll('.ofertas__contenedor__lista__flor');
  var secciones = document.querySelectorAll('.ofertas__contenedor__contenido__flor');

  function recorrerBotones(imgBoton, index) {

    if(index == 0){
      mostrarSeccion();
    }

    function mostrarSeccion(event) {

      secciones.forEach(function (seccion) {
        seccion.style.display = 'none';
      });

      secciones[index].style.display = 'flex';
    }

    imgBoton.addEventListener('click', mostrarSeccion);
  }
  imgBotones.forEach(recorrerBotones);
}

window.addEventListener('load', paginaCargada);