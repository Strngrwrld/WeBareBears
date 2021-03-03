(function(){

	//Propiedades Slider
var propSlider = {
	slider: document.getElementById('slider'),
	slider2: document.getElementById('slider2'),
	slider3: document.getElementById('slider3'),
	primerSlide: null,
	primerSlide2: null,
	primerSlide3: null
}


//Métodos Slider
var metSlider = {
	inicio: function () {
		setInterval(metSlider.moverSlide,2000);
	}, 

	moverSlide: function () {
		propSlider.slider.style.transition = "all 1s ease";
		propSlider.slider.style.marginLeft = "-100%";

		propSlider.slider2.style.transition = "all 1s ease";
		propSlider.slider2.style.marginLeft = "-100%";

		propSlider.slider3.style.transition = "all 1s ease";
		propSlider.slider3.style.marginLeft = "-100%";

		setTimeout(function () {
			propSlider.primerSlide = propSlider.slider.firstElementChild;

			propSlider.slider.appendChild(propSlider.primerSlide);

			propSlider.slider.style.transition = "unset";
			propSlider.slider.style.marginLeft = 0;


			propSlider.primerSlide2 = propSlider.slider2.firstElementChild;

			propSlider.slider2.appendChild(propSlider.primerSlide2);

			propSlider.slider2.style.transition = "unset";
			propSlider.slider2.style.marginLeft = 0;


			propSlider.primerSlide3 = propSlider.slider3.firstElementChild;

			propSlider.slider3.appendChild(propSlider.primerSlide3);

			propSlider.slider3.style.transition = "unset";
			propSlider.slider3.style.marginLeft = 0;

		}, 1000);
	}
}

metSlider.inicio();


}())