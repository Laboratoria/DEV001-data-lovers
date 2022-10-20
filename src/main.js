//import { example } from './data.js';
// import data from './data/harrypotter/data.js';
import data from './data/harrypotter/data.js';
import { getbooks } from "./data.js"
//aqui importamos la tarjeta desde el archivo que creamos nosotras plantilla.js
import { tarjeta } from './plantilla.js'




//con este let capturamos la clase tarjeta del html//
let capturetarjeta = document.querySelector(".barajas")

//el foreach recorre todos los libros//
getbooks(data).forEach(libro => {
    capturetarjeta.insertAdjacentHTML("beforeend", tarjeta(libro));

})



//for( i=0, i<8 i++)

//con esta comentamos
