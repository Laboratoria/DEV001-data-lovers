import { filtroPokeKanto, filtroPorTipo } from './data.js'; //importamos la función filtroxtipo y filtropokekanto

// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';


const tarjeta = document.getElementById("contenedor");
const mostrartodo = (mostrar) => { //Antes de hacer lo que sea hay que limpiar el espacio*****
    tarjeta.innerHTML = '' //Se limpian los datos justo antes de aplicar filter ESTO APLICARLO EN MAIN
    mostrar.forEach((elementos) => {
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
        imagen.src = `${elementos.img}` //Investigar pq le pusimos template strings / mete una variable ${indica que es javascript, lo debe convertir a texto}
        nombre.innerHTML = `${elementos.name}` //Trae un string del array
        numero.innerHTML = `${elementos.num}`
        tipo.innerHTML = `${elementos.type}`
        div.appendChild(numero)
        div.appendChild(imagen)
        div.appendChild(nombre)
        div.appendChild(tipo)
        tarjeta.appendChild(div)

    })
}
mostrartodo(filtroPokeKanto(data.pokemon));
const mySelect = document.getElementById("mySelect");

function myFunction() {
    const tipoSeleccionado = mySelect.value;
    // console.log(tipoSeleccionado);
    const tipoElegido = filtroPorTipo(filtroPokeKanto(data.pokemon), tipoSeleccionado); //Trabajamos la función de filtrado dentro del mySelect porque
    //ahí la vamos a ocupar
    mostrartodo(tipoElegido); //Función que contiene el filtropokekanto donde está la data de los 151 pokes ()

}

// const orden = document.getElementById("orden");

// function ordenPoke() {
//     const ordenSeleccionado = orden.value;
//     console.log(ordenSeleccionado);
//     const ordenElegido = ordenAlfabetico(filtroPokeKanto(data.pokemon), ordenSeleccionado);
//     mostrartodo(ordenElegido);
// }

mySelect.addEventListener("change", myFunction);
// mySelect.addEventListener("change", ordenPoke);


//Crear un filter por tipo (agua, fuego, etc)
//El filter debe pasar x pokeKanto ya que ahí están los 151 pokemones con los que estamos trabajando
//POKEKANTO ES EL ARRAY NUEVO CREADO CON FOREACH
//Según la selección del usuario, creada a través de mySelect donde se despliegan los tipos, 
//debería mostrarse en pantalla el tipo correspondiente

//Desglose de.filter
//La primera const en pokeKanto(es el array que queremos recorrer)
//Crear otra const para el resultado (El tipo de pokemon), a ésta se le agrega el arreglo a recorrer, 
// que podría ser pokeKanto( ? ) y el que queremos obtener(pokeKanto.filter)
//Luego viene el recorrido del Array (pokeKanto) y la evaluación de cada uno (value)
//Éste recorrido busca que coincida con lo que el usuario quiere buscar (según el tipo)



//revisar tipos de datos / parámetros y funciones / cómo acceder a array y a objetos******
//revisar arrays.includes