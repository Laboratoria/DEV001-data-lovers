import { filtroPokeKanto } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

const tarjeta = document.getElementById("contenedor");

const mostrartodo = (mostrar) => {
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
        imagen.src = `${elementos.img}`
        nombre.innerHTML = `${elementos.name}`
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
    const botonDesplegado = mySelect.value;
    console.log(botonDesplegado);
}
mySelect.addEventListener("change", myFunction);

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