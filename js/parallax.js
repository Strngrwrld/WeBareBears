(function () {

    var propParallax = {
        seccion: document.querySelector('.parallax'),
        recorrido: null,
        limite: null
    }

    var efecto = {

        start: function () {
            window.addEventListener('scroll', efecto.scrollParallax);
        },

        scrollParallax: function () {

            propParallax.recorrido = window.pageYOffset;
            propParallax.limite = propParallax.seccion.offsetTop + propParallax.seccion.offsetHeight;

            if (propParallax.recorrido > propParallax.seccion.offsetTop - window.outerHeight && propParallax.recorrido <= propParallax.limite) {

                propParallax.seccion.style.backgroundPositionY = (propParallax.recorrido - propParallax.seccion.offsetTop) / 2 + 'px';
            }
            else {

                propParallax.seccion.style.backgroundPositionY = 0;
            }
        }
    }

    efecto.start();
}())
