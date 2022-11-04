//import { example } from './data.js';
import data from './data/harrypotter/data.js';

import { getbooks, getcharacters, filterByHouse, filterByGender, sortByNameAz, sortByNameZa } from "./data.js"

//aqui importamos la tarjeta desde el archivo que creamos nosotras plantilla.js
import { tarjeta, tarjeta2 } from './plantilla.js'



//con const targets le estamos diciendo al docmuento html que tome el valor de data targes es decir que lo hale aca// 
const targets = document.querySelectorAll('[data-target]')
const content = document.querySelectorAll('[data-content]')

// target es un arreglo y aplicamos foreach para que recorra book y character
//luego a cada target dentro del for eac se le aplica un evento addevelist al cual  hace un llamado a la funcion anonima

targets.forEach(target => {
   target.addEventListener("click", () => {
      content.forEach(c => {
        //con remove, removemos el mismo titulo, es decir que no se vea cuando el usuario lo preciona
         c.classList.remove("active")
      })
      //dataset lo utilizamos para ser el llamado desde html con el data-target
      const t = document.querySelector(target.dataset.target)
      // con este classlist axcede a la lista de clase de nuestro elemnto (nuestro menu de inicio)
      t.classList.add("active")
   })
})


//con este let capturamos la clase tarjeta del html//
let capturetarjeta = document.querySelector(".barajas")
let capturetarjeta2 = document.querySelector(".personajes")
//let capturetarjeta3 = ducument.querySelector(".fotofun")


//el foreach recorre todos los libros luego lo insertamos en cada tarjeta con el insertAdjacentHTML//
getbooks(data).forEach(libro => {
   capturetarjeta.insertAdjacentHTML("beforeend", tarjeta(libro));
})
//el foreach recorre todos los personajes, con el beforeend recorre justo dentro del elemento despues de su ultimo elemnto hijo//
getcharacters(data).forEach(nombre => {
   capturetarjeta2.insertAdjacentHTML("beforeend", tarjeta2(nombre));
})


// con el id seleccionamos la casa y con el change sabemos cuando se cambia de casa
let select = document.getElementById("selectfiltrar")
select.addEventListener("change", (e) => {
   let arreglofiltrado = filterByHouse(data.characters, e.target.value)

   let personajesfiltros = document.querySelector(".personajes")
   personajesfiltros.innerHTML = ""
   arreglofiltrado.forEach(personajes => {
      capturetarjeta2.insertAdjacentHTML("beforeend", tarjeta2(personajes));
   })
})


//con este let capturamos los personajes por generos//
let select2 = document.getElementById("selectgender")
select2.addEventListener("change", (e) => {
   let generofiltrado = filterByGender(data.characters, e.target.value)
   // con este let recoremos la data personaje para filtrar por genero//
   //"beforeend" recorre el elemento hasta su ultimo elemnto hijo//
   let generofiltros = document.querySelector(".personajes")
   generofiltros.innerHTML = ""
   generofiltrado.forEach(personajes => {
      capturetarjeta2.insertAdjacentHTML("beforeend", tarjeta2(personajes));
   })
})




   //con este let mostramos los personajes ordenados de la A a la Z
let select3 = document.getElementById("selectordenar");
select3.addEventListener("change", (e) => {
   //console.log(e.target.value)//
   if (e.target.value == "za") {
      let arreglodescendente = sortByNameZa (data.characters, e.target.value);

      let nombresdescendentes = document.querySelector(".personajes")
      nombresdescendentes.innerHTML = ""
      arreglodescendente.forEach(personajes => {
         capturetarjeta2.insertAdjacentHTML("beforeend", tarjeta2(personajes));
      })


      //con este let mostramos los personajes ordenados de la Z a la A
   } else {
      let arregloascendente = sortByNameAz(data.characters, e.target.value);

      let nombresascendentes = document.querySelector(".personajes")
      nombresascendentes.innerHTML = ""
      arregloascendente.forEach(personajes => {
         capturetarjeta2.insertAdjacentHTML("beforeend", tarjeta2(personajes));
      })
   }
})



