
//con const hacemos el llamado desde el html 
const targets = document.querySelectorAll('[data-target]')
const content = document.querySelectorAll('[data-content]')

// comentar  despues de entender bien el videotargets.forEach//
targets.forEach(target => {
 target.addEventListener("click", () => {
    content.forEach(c =>{
        c.classList.remove("active")
    } )
    const t = document.querySelector ( target.dataset.target)
    t.classList.add("active")
 } )   
} )

//import { example } from './data.js';
// import data from './data/harrypotter/data.js';
import data from './data/harrypotter/data.js';
import {getbooks, getcharacters } from "./data.js"
//aqui importamos la tarjeta desde el archivo que creamos nosotras plantilla.js
import { tarjeta, tarjeta2 } from './plantilla.js'


//con este let capturamos la clase tarjeta del html//
let capturetarjeta = document.querySelector(".barajas")
let capturetarjeta2 = document.querySelector (".personajes")


//el foreach recorre todos los libros//
   getbooks(data).forEach ( libro => {
   capturetarjeta.insertAdjacentHTML("beforeend", tarjeta(libro));
})
//el foreach recorre todos los personajes//
getcharacters(data).forEach ( nombre => {
    capturetarjeta2.insertAdjacentHTML("beforeend", tarjeta(nombre));
 })










//for( i=0, i<8 i++)

//con esta comentamos
