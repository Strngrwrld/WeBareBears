(function () {

	var propScroll = {

		posicion: window.pageYOffset,
		scroll: document.getElementsByClassName('scroll'),

		destino: null,
		seccion_distancia: null,
		intervalo: null
	}

	var funScroll = {

		inicio: function () {

			for (var i = 0; i < propScroll.scroll.length; i++) {
				propScroll.scroll[i].addEventListener('click', funScroll.moverse);
			}

			for (var i = 0; i < propScroll.volver_arriba.length; i++) {
				propScroll.volver_arriba[i].addEventListener('click', funScroll.subir);
			}

		},

		moverse: function (e) {

			e.preventDefault();

			clearInterval(propScroll.intervalo);

			propScroll.destino = this.getAttribute('href');
			propScroll.seccion_distancia = document.querySelector(propScroll.destino).offsetTop - 94;

			propScroll.posicion = window.pageYOffset;

			propScroll.intervalo = setInterval(function () {

				if (propScroll.posicion < propScroll.seccion_distancia) {

					propScroll.posicion += 45;

					if (propScroll.posicion >= propScroll.seccion_distancia) {
						clearInterval(propScroll.intervalo);
					}
				}

				else {

					propScroll.posicion -= 35;

					if (propScroll.posicion <= propScroll.seccion_distancia) {
						clearInterval(propScroll.intervalo);
					}
				}

				window.scrollTo(0, propScroll.posicion)

			}, 10);

		}

	}

	funScroll.inicio()
}())
