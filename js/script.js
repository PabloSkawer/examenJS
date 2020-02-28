window.onload = inicio;

function inicio () {
    document.getElementById('calcular').addEventListener('click', insertarMed);    
    for(let c = 0 ; c < document.getElementsByName('ordenar').length ; c++)
        document.getElementsByName('ordenar')[c].addEventListener('click', ordenar);
    getJSON("http://localhost:3000/medicamentos")
        .then (function print(json) {
            let test = JSON.parse(json)
            for (let i = 0; i < test.length; i++) {
                var medCargado = new Medicamento(test[i].nombre, test[i].peso, test[i].posologia, test[i].presentacion, test[i].repartir, test[i].mgUnidad, test[i].proximaDosis, test[i].id)
                medicamentos.push(medCargado)
            }
            listar();
    comprobarCookie();
        })
    document.getElementById('filtro').addEventListener('change', ordenar);
}

var medicamentos = [];

function insertarMed(e){

    e.preventDefault();

    if(validar()){

        var med = new Medicamento(document.getElementById('medicamento').value, document.getElementById('peso').value, document.getElementById('posologia').value, document.getElementById('presentacion').value, document.getElementById('repartir').value, document.getElementById('mgUnidad').value);
        med.administrarDosis();
        console.log(med);
        medicamentos.push(med);
        listar();
        sendJSON("http://localhost:3000/medicamentos", med)

    }

}


function listar(){

    document.getElementById('mostrar').innerHTML = '';

    medicamentos.forEach(elemento => {
        document.getElementById('mostrar').appendChild(elemento.toHtml());
    });

}

function adminDosis(e){

    let boton = e.target;
    let idDiv = boton.parentElement.parentElement.id;

    medicamentos.forEach(elemento => {

        if(idDiv == elemento.id){ 
        
            elemento.administrarDosis();
            //document.getElementById("span"+idDiv).innerHTML = elemento.proximaDosis;
            updateJSON("http://localhost:3000/medicamentos/"+idDiv, elemento);

        }

    });

    listar();

}

function borrarMed(e) {

    let boton = e.target;
    let idDiv = boton.parentElement.parentElement.id;

    medicamentos.forEach(elemento => {

        if(idDiv == elemento.id) {
            
            deleteJSON("http://localhost:3000/medicamentos/"+idDiv);
            location.reload();
        }

    });

    listar();

}

function ordenar() {

    var elementos =  document.getElementById('mostrar').getElementsByClassName('card');
    var filtro = document.getElementById('filtro').value;
    
    switch(filtro){
            
        case "0":
            filtro = "todos";
            break;
            
        case "1":
            filtro = "comprimidos";
            break;
            
        case "2":
            filtro = "gotas";
            break;
            
        case "3":
            filtro = "inyectables";
            break;
            
        case "4":
            filtro = "sobres";
            break;
            
        case "5":
            filtro = "solución";
            break;
           
    }
    
    crearCookie('orden', filtro, 1)
    
    if(filtro == "todos") {
        console.log("mostrar todos");
        for(let c = 0 ; c < elementos.length ; c++){
            elementos[c].style.display = 'block'             
        }
    }
    else {
        for(let c = 0 ; c < elementos.length ; c++){
        
            if(elementos[c].getElementsByTagName('img')[0].alt == filtro){ 
                elementos[c].style.display = 'block' 
            }
        
            else {
                elementos[c].style.display = 'none' ;
            }
        
        }
    }


}

function comprobarCookie(){
    
    var filtro = document.getElementById('filtro');
    
    switch(leerCookie('orden')){
            
        case "todos":
            filtro.getElementsByTagName('option')[0].selected = true
            break;
            
        case "comprimidos":
            filtro.getElementsByTagName('option')[1].selected = true
            break;
            
        case "gotas":
            filtro.getElementsByTagName('option')[2].selected = true
            break;
            
        case "inyectables":
            filtro.getElementsByTagName('option')[3].selected = true
            break;
            
        case "sobres":
            filtro.getElementsByTagName('option')[4].selected = true
            break;
            
        case "solucion":
            filtro.getElementsByTagName('option')[5].selected = true
            break;
            
    }
    
    ordenar();
    
}