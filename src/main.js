import ghibli from "./data/ghibli/ghibli.js";
const objetos = ghibli

import { mostrarPeliculaIndividual, filtrarDirectores,ordenarYears,ordenarScore} from './data.js';
//Variables globales
const pelicula = document.getElementById("peliculas");
const modal = document.getElementById("modal");
const cerrar = document.getElementById("close");
const home = document.getElementById("home");
const pagina = document.getElementById("muestra");
const personajes = document.getElementById("personajes");
const location = document.getElementById("locacion");
const vehiculos = document.getElementById("vehiculos");
const fecha = document.getElementById("fecha");
const popular = document.getElementById("popular");

window.onload = () => {
  mostrarEnPantalla(datosTodasPeliculas());
 // mostrarIndividual()
  
};

function datosTodasPeliculas() {
  const films = objetos.films
  let arrayFilms = [...films]


  return arrayFilms
}


//mostrarIndividual()

//seccion directores
const directores = document.querySelectorAll(".menu_director");

directores.forEach((director =>{
   const directorI = director;
  
   directorI.addEventListener("click", () =>{
      pelicula.innerHTML = "";
      const idDirector = directorI.id;
      const dataDirec =filtrarDirectores(idDirector, datosTodasPeliculas());
   
     mostrarEnPantalla(dataDirec);
    
   });
   
}));




home.addEventListener("click", () =>{
  pelicula.innerHTML = ""
  mostrarEnPantalla(datosTodasPeliculas());
});


function mostrarEnPantalla(data) {
  const array = data;
   for (let i = 0; i < array.length; i++) {
    
      pelicula.innerHTML += `
                     <div class = "card_pelicula">
                        <img src="${array[i].poster}" alt="${array[i].title}">
                        <div class = "textos_card"
                           <p>${array[i].title}</p>
                           <p>director: ${array[i].director}</p>
                           <p>year: ${array[i].release_date}</p>
                        </div>
                     <div class = "boton_card" 
                       <span><p><i class="bx bxs-star"></i>${array[i].rt_score}</p></span>
                       <button class="select" id = "${array[i].id}" >view more...</button>
                     </div>
                    </div> 
                   
                  `
               }
              
}


//este es el modal con los detalles de las peliculas al dar click

let abrir;

pelicula.addEventListener('mouseup', (e) => {
  abrir =e.path[0].className
   
   //abrir = e.path[2].classList.value
   //console.log(e.srcElement.className)
  //console.log(e.path[0].className)
   if(abrir === "select"){
    
      modal.style.display = "block";
      
   }
   
   
})


  
 pelicula.addEventListener('mouseup', (e) => {
  //console.log(e.path[0].id)
  let idCard;
  //idCard = e.path[2].id
  idCard = e.path[0].id
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


cerrar.addEventListener("click", function() {
    modal.style.display = "none";
});


fecha.addEventListener("click",function(){
  pelicula.innerHTML = ""
  const mostrarYear = ordenarYears(datosTodasPeliculas())
  mostrarEnPantalla(mostrarYear)
});

popular.addEventListener("click",function(){
  pelicula.innerHTML = "";
  const mostrarPopular = ordenarScore(datosTodasPeliculas());
  mostrarEnPantalla(mostrarPopular);
}); 