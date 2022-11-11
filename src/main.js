import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.tiposdepoke')) {
      
    }
  }

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
        const tipo = document.createElement("p");
        numero.className = "numero"
        imagen.className = "imagen" //otorgamos una clase
        nombre.className = "nombre"
        tipo.className = "tipo"
        imagen.src = `${hola.img}`
        nombre.innerHTML = `${hola.name}`
        numero.innerHTML = `${hola.num}`
        tipo.innerHTML = `${hola.type}`
        div.appendChild(numero)
        div.appendChild(imagen)
        div.appendChild(nombre)
        div.appendChild(tipo)
        tarjeta.appendChild(div)

    })
}
mostrartodo(pokeKanto);
//const desplegar = document.getElementById("tiposdepoke")

//function desplegar() {document.getElementById("myDropdown").classList.toggle("show")
//;}
//document.getElementById('tiposdepoke').addEventListener('click', ()=>{
    
//})
// primero llamar al boton creado en html por su id tipos de poke
// que al escuchar click este boton despliegue y muestre los botones que tiene adentro 
// para cada uno de estos botones hijo hacer el filter, segun el tipo  de pokemon que refiere (fuego, agua, etc)
// que aparezcan en pantalla las tARJETAS de aquellos pokemones que cumplen con ese tipo.(a pesar que tengas mas de un tipo)


  
