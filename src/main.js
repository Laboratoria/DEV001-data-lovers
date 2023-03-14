import ghibli from "./data/ghibli/ghibli.js";
import {mostrarPeliculaIndividual, filtrarDirectores, ordenarYears, ordenarScore, estadisticaData } from './data.js';
//Variables globales
const pelicula = document.getElementById("peliculas");
const modal = document.getElementById("modal");
const cerrar = document.getElementById("close");
const home = document.getElementById("home");
const pagina = document.getElementById("muestra");
const personajes = document.getElementById("personajes");
const fecha = document.getElementById("fecha");
const popular = document.getElementById("popular");
const header = document.getElementById("header_inicio");

//cargar pagina
window.onload = () => {
  mostrarEnPantalla(datosTodasPeliculas());
  estadisticasData();
 
};
//array con todas las peliculas
function datosTodasPeliculas() {
  const films = ghibli.films
  return films
}

//seccion directores
const directores = document.querySelectorAll(".menu_director");
directores.forEach((director => {
  director.addEventListener("click", () => {
    pelicula.innerHTML = "";
    const idDirector = director.id;
    const dataDirec = filtrarDirectores(idDirector, datosTodasPeliculas());
    mostrarEnPantalla(dataDirec);
  });
}));

//seccion home
home.addEventListener("click", () => {
  pelicula.innerHTML = ""
  mostrarEnPantalla(datosTodasPeliculas());
});

//renderizar peluculas
function mostrarEnPantalla(array) {
const peliculas = array.map(function (array) {
return `
       <div class = "card_pelicula">
          <img src="${array.poster}" alt="${array.title}">
         
          <div class = "textos_card">
             <h2>${array.title}</h2>
             <p>director: ${array.director}</p>
             <p>year: ${array.release_date}</p>
          </div>
       <div class = "boton_card" 
         <span><p><i class="bx bxs-star"></i>${array.rt_score}</p></span>
         <button class="select" id = "${array.id}" >view more...</button>
       </div>
      </div> 
     `
  });
pelicula.innerHTML += peliculas.join('')
}
//este es el modal con los detalles de las peliculas al dar click
pelicula.addEventListener('mouseup', (e) => {
   //console.log(e.target.className)
const abrir = e.target.className
  if (abrir === "select") {
     modal.style.display = "block";
     header.style.display = "none"
   }
});
// //modal peliculas
 pelicula.addEventListener('mouseup', (e) => {
  //console.log(e.target.id)
const idCard = e.target.id;

const id = mostrarPeliculaIndividual(idCard, datosTodasPeliculas());
const idModal = id.map(function (element) {
   return`
            <div class="modal_pelicula">
               <div class="modal_imagen">
                  <img src="${element.poster}" alt="">
               </div>
               <div class="modal_titulo_descripcion">
                  <h2>${element.title}</h2>
                  <div class = "modal_director"
                    <p >producer: ${element.producer}</p>
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
});
pagina.innerHTML = idModal;
const personajesPeople = id.map(function (persona) {
   const personajesP = persona.people;
  const pantalla = personajesP.map(function (persona) {
    return  `<div class = "cont_people">
                   <img src="${persona.img}" alt="${persona.name}">
                  <div class ="con_people_text"
                     <p>Name: ${persona.name}</p>
                     <p>Specie: ${persona.specie}</p>
                   </div> 
                </div>
                `
   })
  return pantalla.join('')
});
personajes.innerHTML = "";
personajes.innerHTML += personajesPeople
 });
//cerrar modal
cerrar.addEventListener("click", function () {
  modal.style.display = "none";
  header.style.display = "block";
});
//pelicula por fecha
fecha.addEventListener("click", function () {
  pelicula.innerHTML = ""
  const mostrarYear = ordenarYears(datosTodasPeliculas());
  mostrarEnPantalla(mostrarYear);
});
//peliculas populares
popular.addEventListener("click", function () {
  pelicula.innerHTML = "";
  const mostrarPopular = ordenarScore(datosTodasPeliculas());
  mostrarEnPantalla(mostrarPopular);
});
//estadistica
function estadisticasData() {
  const estadistica = estadisticaData(datosTodasPeliculas());
  const estadistic = document.getElementById("contenedor_etadistica");
  const nameDirec = document.getElementById("name_direc");
 const claves = Object.keys(estadistica);
 const nameDirector = claves.map(function (dir){
     return  `<div class="directores_name">
              <p>⭐${dir}</p>
             </div>`
   
 });
nameDirec.innerHTML = nameDirector.join('')
const todos = Object.entries(estadistica);
const valoresTodos = todos.map(function (valores){
  const nameDirec = valores[0];
  const numDirec = valores[1];
  const porcentaje = (numDirec * 100) / 20;
 return ` <div class="barra" style="--bar-value:${porcentaje}%;"  title="${nameDirec} ${porcentaje}%"></div>`
 });
 estadistic.innerHTML += valoresTodos.join('');
}








