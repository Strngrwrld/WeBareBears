(function () {

    var propForm = {

        formulario: document.formulario_contacto,
        elements: document.formulario_contacto.elements,
        error: null,
        textoError: null
    }

    var formulario = {

        inicio: function () {

            for (var i = 0; i < propForm.elements.length; i++) {

                if (propForm.elements[i].type == 'text' || propForm.elements[i].type == 'email' || propForm.elements[i].nodeName.toLowerCase() == 'textarea') {

                    propForm.elements[i].addEventListener('focus', formulario.focusInput);
                    propForm.elements[i].addEventListener('blur', formulario.blurInput);
                }
            }

            propForm.formulario.addEventListener('submit', formulario.validarInputs);
        },

        focusInput: function () {

            this.parentElement.children[1].className = 'label active';
        },

        blurInput: function () {

            if (this.value == '') {
                this.parentElement.children[1].className = 'label';
            }
        },

        validarInputs: function (e) {



            for (var i = 0; i < propForm.elements.length; i++) {


                if (propForm.elements[i].value == "") {
                    e.preventDefault();

                    if (propForm.elements[i].parentElement.children.length < 3) {

                        propForm.error = document.createElement('p');
                        propForm.textoError = document.createTextNode(propForm.elements[i].name + ' requerido.');
                        propForm.error.appendChild(propForm.textoError);
                        propForm.error.className = 'error';

                        propForm.elements[i].parentElement.appendChild(propForm.error);
                    }


                } else {

                    if (propForm.elements[i].parentElement.children.length >= 3) {

                        propForm.error = propForm.elements[i].parentElement.getElementsByTagName('p')[0];
                        propForm.elements[i].parentElement.removeChild(propForm.error);

                    }
                }


            }
            return false;
        }
    }

    formulario.inicio();

}())