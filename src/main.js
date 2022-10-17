import ghibli from "./data/ghibli/ghibli.js";
const objetos = ghibli

import {  mostrarPeliculaIndividual, filtrarDirectores} from './data.js';


function datosTodasPeliculas() {
  const films = objetos.films
  let arrayFilms = [...films]


  return arrayFilms
}

const pelicula = document.getElementById("peliculas");
function mostrarEnPantalla(data) {
  const array = data;
   for (let i = 0; i < array.length; i++) {
    
      pelicula.innerHTML += `
                 
                     <div class = "card_pelicula">
                        <img src="${array[i].poster}" alt="${array[i].title}">
                        <div class = "textos_card"
                           <p>${array[i].title}</p>
                           <p>director: ${array[i].director}</p>
                     
                        </div>
                     <div class = "boton_card" 
                       <span><p><i class="bx bxs-star"></i>${array[i].rt_score}</p></span>
                       <button class="select" id = "${array[i].id}" >view more...</button>
                     </div>
                    </div> 
                   
                  `;
    
    
  }
}

//este es el modal con los detalles de las peliculas al dar click

const modal = document.getElementById("modal");
const abrir = document.querySelectorAll(".select");
const cerrar = document.getElementById("close");
const buttons = document.querySelectorAll(".select");

abrir.forEach(abierto =>{
     abierto.addEventListener("click", () => {
      modal.style.display = "block";
    });
})
  cerrar.addEventListener("click", function () {
    modal.style.display = "none";
});


function mostrarIndividual() {
  for (let i = 0; i < buttons.length; i++) {
    const boton = buttons[i];
    let idCard;
    const pagina = document.getElementById("muestra");
    const personajes = document.getElementById("personajes");
    const location = document.getElementById("locacion");
    const vehiculos = document.getElementById("vehiculos");
    boton.addEventListener("click", () => {
      idCard = boton.id;
      const id = mostrarPeliculaIndividual(idCard, datosTodasPeliculas() );
      
      id.forEach(element => {
        pagina.innerHTML = `
        <div class="modal_pelicula">
           <div class="modal_imagen">
              <img src="${element.poster}" alt="">
           </div>
           <div class="modal_titulo_descripcion">
              <h2>${element.title}</h2>
              <div class = "modal_director"
                <p>producer: ${element.producer}</p>
                <p>director: ${element.director}</p>
              </div>
              <div class="modal_texto_largo"  
                 <p>${element.description}</p>
              </div>  
              <div class="modal_score_date"
                <p>release date: ${element.release_date}</p>
                <p>score: <i class="bx bxs-star"></i>${element.rt_score}</p>
            </div>
        </div>
        `;
          personajes.innerHTML = "";
          element.people.forEach(persona =>{
          personajes.innerHTML +=
           `<div class = "cont-people">
            <img src="${persona.img}" alt="${persona.name}">
             <p>${persona.name}</p>
             <p>${persona.specie}</p>
           </div>
           ` 
          });
          
          location.innerHTML = ""
          element.locations.forEach(locacion =>{
          
            location.innerHTML +=
            `<div class = "cont-locacion">
               <img src="${locacion.img}" alt="${locacion.name}">
               <p>${locacion.name}</p>
               <p>${locacion.climate}</p>
            </div>`

          });
          
          vehiculos.innerHTML = ""
          element.vehicles.forEach(vehiculo =>{
            vehiculos.innerHTML +=
            `<div class = "cont-vehiculos">
            <img src="${vehiculo.img}" alt="${vehiculo.name}">
            <p>${vehiculo.name}</p>
            <p>${vehiculo.description}</p>
            <p>${vehiculo.pilot.name}</p>
                     
            </div>`
          });
        });
       });
  
   }
}

//seccion directores
const directores = document.querySelectorAll(".menu_director");

directores.forEach((director =>{
   const directorI = director;
  
   directorI.addEventListener("click", () =>{
    pelicula.innerHTML = "";
      const idDirector = directorI.id;
     const dataDirec =filtrarDirectores(idDirector, datosTodasPeliculas());
   
     mostrarEnPantalla(dataDirec);
    
   })
}))



window.onload = () => {
  mostrarEnPantalla(datosTodasPeliculas());
   mostrarIndividual()
  };