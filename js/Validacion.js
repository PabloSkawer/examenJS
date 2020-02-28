function validar(e) {
    borrarErrores();
    if (valMedicamento() && valPesoKg() && valPosologia() && valMgUnidad()) {
        return true
    }
    else {
        e.preventDefault();
        return false
    }
}

function valMedicamento() {

    var elemento = document.getElementById('medicamento');
    if (elemento.value.trim() != "") {
        return true;
    }
    else {
        elemento.style.backgroundColor = 'red';
        document.getElementById('errorMedicamento').innerHTML = "Campo requerido";
        return false;
    }
}

function valPesoKg() {

    var elemento = document.getElementById('peso');
    var regExp = new RegExp('^[0-9]');
    if (elemento.value.trim() != "") {
        if (regExp.test(elemento.value)) {
            return true
        }
        else {
            elemento.style.backgroundColor = 'red';
            document.getElementById('errorPeso').innerHTML = "Tiene que ser numérico";
            return false;
        }
    }
    else {
        elemento.style.borderColor = 'red';
        document.getElementById('errorPeso').innerHTML = "Obligatorio";
        return false;
    }


}

function valPosologia() {

    var elemento = document.getElementById('posologia');
    var regExp = new RegExp('[0-9]');
    if (elemento.value.trim() != "") {
        if (regExp.test(elemento.value)) {
            return true
        }
        else {
            elemento.style.backgroundColor = 'red';
            document.getElementById('errorPosologia').innerHTML = 'Tiene que ser numérico entre 0.1 y 100';
            return false;
        }
    }
    else {
        elemento.style.backgroundColor = 'red';
        document.getElementById('errorPosologia').innerHTML = 'Obligatorio';
        return false;
    }

}

function valMgUnidad() {

    var elemento = document.getElementById('mgUnidad');
    var regExp = new RegExp('^[0-9]{1,5}([/]{1}[0-9]{1,5})?$');
    if (elemento.value.trim() != "") {

        if (regExp.test(elemento.value)) {
            return true;
        }
        else {
            elemento.style.backgroundColor = 'red';
            document.getElementById('errorMg').innerHTML = 'Numeros enteros o divisiones (N/N)';
            return false;
        }
    }
    else {
        elemento.style.backgroundColor = 'red';
        document.getElementById('errorMg').innerHTML = 'Obligatorio';
        return false;
    }
}

function borrarErrores() {

    var inputs = document.getElementsByTagName('input');
    for (let c = 0; c < inputs.length; c++) inputs[c].style.borderColor = "";

}