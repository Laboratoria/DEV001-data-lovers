import { filtroPokeKanto, filtroPorTipo, ordenAZ, searchFilter } from './data.js'; //importamos la función filtroxtipo y filtropokekanto
import data from './data/pokemon/pokemon.js';

const tarjeta = document.getElementById("contenedor");
const mostrartodo = (mostrar) => { //Antes de hacer lo que sea hay que limpiar el espacio*****
    tarjeta.innerHTML = '' //Se limpian los datos justo antes de aplicar filter ESTO APLICARLO EN MAIN

    mostrar.forEach((elemento) => {
        const div = document.createElement("div"); //creamos un div
        div.className = "tarjeta"; //Le agregamos una clase
        const imagen = document.createElement("img"); //creo una variable para las fotos de la data
        const nombre = document.createElement("p"); //el nombre del pokemon de la data
        const numero = document.createElement("p"); //el número del pokemon extraído de la data
        const tipo = document.createElement("p");

        numero.className = "numero"
        imagen.className = "imagen" //otorgamos una clase
        nombre.className = "nombre"
        tipo.className = "tipo"

        imagen.src = `${elemento.img}` //Investigar pq le pusimos template strings / mete una variable ${indica que es javascript, lo debe convertir a texto}
        nombre.innerHTML = `${elemento.name}` //Trae un string del array
        numero.innerHTML = `${elemento.num}`
        tipo.innerHTML = `${elemento.type}`

        div.appendChild(numero)
        div.appendChild(imagen)
        div.appendChild(nombre)
        div.appendChild(tipo)
        tarjeta.appendChild(div)
    })
}
mostrartodo(filtroPokeKanto(data.pokemon));

const mySelect = document.getElementById("mySelect");
function funcionFiltrar() {
    const tipoSeleccionado = mySelect.value;
    const tipoElegido = filtroPorTipo(filtroPokeKanto(data.pokemon), tipoSeleccionado);//Trabajamos la función de filtrado dentro del mySelect porque

    mostrartodo(tipoElegido); //Función que contiene el filtropokekanto donde está la data de los 151 pokes ()
}
mySelect.addEventListener("change", funcionFiltrar);

const orden = document.getElementById("orden");
function funcionOrden() {
    const ordenSeleccionado = orden.value;
    const ordenElegido = ordenAZ(filtroPokeKanto(data.pokemon), ordenSeleccionado); //Trabajamos la función de filtrado dentro del mySelect porque
  
    mostrartodo(ordenElegido);
}
orden.addEventListener("change", funcionOrden);

const search = document.getElementById("search");
function funcionBuscar() {
    const nombreBuscado = search.value;
    const escrito = searchFilter(filtroPokeKanto(data.pokemon),nombreBuscado);

    mostrartodo(escrito); 
}
search.addEventListener("keyup", funcionBuscar);





    
    

