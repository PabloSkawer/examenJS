class Medicamento {
	
    constructor(nombre, peso, posologia, presentacion, repartir, mgUnidad, proximaDosis, id){
        this.nombre = nombre;
        this.peso = peso;
        this.posologia = posologia;
        this.presentacion = presentacion;
        this.repartir = repartir;
        this.mgUnidad = this.convertirMgUnidad(mgUnidad);
        this.proximaDosis = proximaDosis;
        this.id = id; 
    }
    convertirMgUnidad = (mgUnidad) => {
        mgUnidad = ""+mgUnidad;
        mgUnidad = mgUnidad.split('/');
        if(mgUnidad[1] != null) mgUnidad = mgUnidad[0] / mgUnidad[1];
        else mgUnidad = mgUnidad[0];
        return mgUnidad;

    }
    calcularDosisDia = () => {
        return this.peso*this.posologia;
    }

    calcularDosisMg = () => {
        return parseFloat((this.calcularDosisDia()/this.repartir).toFixed(2));
    }

    calcularDosisMl = () => {
        return parseFloat((this.calcularDosisMg()/this.mgUnidad).toFixed(2));
    }

    administrarDosis = () => {
        var hora = new Date();
        switch(this.repartir){
            case "1":
                var h = 24;
                break;
            case "2":
                var h = 12;
                break;
            case "3":
                var h = 8;
                break;
            case "4":
                var h = 6;
                break;
        }
        hora = hora.setTime(hora.getTime() + (h*60*60*1000));
        hora = new Date(hora);
        let resultado = "";
        if(hora.getHours() < 10) resultado = 0 + "" + hora.getHours();
        else resultado = hora.getHours();
        if(hora.getMinutes() < 10) resultado += 0 + "" + hora.getMinutes();
        else resultado += ":" + hora.getMinutes();
        this.proximaDosis = resultado;
    }
    
    tipoPres = () => {
        switch(this.presentacion){ 
            case 1:
                case "1":
                return "comprimidos";
            case 2:
                case "2":
                return "gotas";
            case 3:
                case "3":
                return "inyectables";
            case 4:
                case "4":
                return "sobres";
            case 5:
                case "5":
                return "solucion";
        }
    }
    
    toHtml = () => {
        let div = document.createElement('div');
        div.setAttribute('class', "card");
        let img = document.createElement('img');
        img.setAttribute('src', 'img/'+this.tipoPres()+'.png');
        img.setAttribute('alt', this.tipoPres());
        img.setAttribute('data-presentacion', this.presentacion);
        div.appendChild(img);
        let div2 = document.createElement('div');
        div2.setAttribute('class', 'card-container');
        let titulo = document.createElement('h2');
        titulo.innerHTML = this.nombre;
        div2.appendChild(titulo);
        let p1 = document.createElement('p');
        p1.innerHTML = "<strong>Dosis día:</strong> <span tittle='dosis diaria'>"+this.calcularDosisDia()+" mg/dosis</span>";
        div2.appendChild(p1);
        let p2 = document.createElement('p');
        p2.innerHTML = "<strong>Dosis:</strong> <span title='dosis'>"+this.calcularDosisMg()+" mg/dosis = "+this.calcularDosisMl() + " la " + this.tipoPres() + " cada " + (24/this.repartir) + " horas";
        div2.appendChild(p2);
        let p3 = document.createElement('p');
        p3.innerHTML = "<strong>Próxima dosis:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
        +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
        +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
        +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
        +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+this.proximaDosis;
        div2.appendChild(p3);
        let administrar = document.createElement('button');
        administrar.innerHTML = "Administrar dosis";
        administrar.setAttribute('class', 'administrar')
        administrar.addEventListener('click', admin)
        div2.appendChild(administrar);
        let borrar = document.createElement('button');
        borrar.innerHTML = "Eliminar";
        borrar.setAttribute('class', 'eliminar')
        borrar.addEventListener('click', borrando)
        div2.appendChild(borrar);
        div.appendChild(div2);
        div.setAttribute('id', this.id);
        
        function borrando(){
            div.remove();
        }
        function admin(){
            titulo=window.prompt("introduzca el nuevo nombre");
        }
        return div;
        
  
    }
    
}