import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
let pokeKanto = []
data.pokemon.forEach(function(pokemon) {
    if (pokemon.generation.name === "kanto") {
        pokeKanto.push(pokemon);
    }
})
console.log(pokeKanto)
const tarjeta = document.getElementById("contenedor");

const mostrartodo = (mostrar) => {
    mostrar.forEach((hola) => {
        const div = document.createElement("div"); //creamos un div
        div.className = "tarjeta"; //Le agregamos una clase
        const imagen = document.createElement("img"); //creo una variable para las fotos de la data
        const nombre = document.createElement("p"); //el nombre del pokemon de la data
        const numero = document.createElement("p"); //el número del pokemon extraído de la data
        numero.className = "numero"
        imagen.className = "imagen" //otorgamos una clase
        nombre.className = "nombre"
        imagen.src = `${hola.img}`
        nombre.innerHTML = `${hola.name}`
        numero.innerHTML = `${hola.num}`
        div.appendChild(numero)
        div.appendChild(imagen)
        div.appendChild(nombre)
        tarjeta.appendChild(div)

    })
}
mostrartodo(pokeKanto)