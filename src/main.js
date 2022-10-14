import ghibli from "./data/ghibli/ghibli.js";
const objetos = ghibli

import { mostrarDataEnPantalla} from './data.js';

function datosTodasPeliculas  () {
  const films = objetos.films
  let arrayFilms = [...films]


  return arrayFilms
}


//buscar las imagenes con enlaces rotos

 window.onload = () => {
  mostrarDataEnPantalla("all", datosTodasPeliculas());
};

mostrarEnPantalla();
function mostrarEnPantalla() {
  const pelicula = document.getElementById("peliculas");
  
   const array = mostrarDataEnPantalla("all", datosTodasPeliculas());
   for (let i = 0; i < array.length; i++) {
     // pelicula.innerHTML = ""
      pelicula.innerHTML += `
                 <div class = "card_pelicula">
                  <img src="${array[i].poster}" alt="${array[i].title}">
                  <p>${array[i].title}</p>
                  <p>${array[i].director}</p>
                  <p>${array[i].rt_score}</p>
                  </div> `;
    
    
  }
}

//boton para la siguiente HU 
//<button class="select" id = "${array[i].id}" >Ver mas...</button>

//este es el modal con los detalles de las peliculas al dar click

// const modal = document.getElementById("modal");
// const abrir = document.querySelectorAll(".select");
// const cerrar = document.getElementById("close");
// const buttons = document.querySelectorAll("button");

// abrir.forEach(abierto =>{
//      abierto.addEventListener("click", () => {
//       modal.style.display = "block";
//     });
// })
//   cerrar.addEventListener("click", function () {
//     modal.style.display = "none";
// });

// mostrarIndividual();
// function mostrarIndividual() {
//   for (let i = 0; i < buttons.length; i++) {
//     const boton = buttons[i];
//     let idCard;
//     const pagina = document.getElementById("muestra");
//     const personajes = document.getElementById("personajes");
//     const location = document.getElementById("locacion");
//     const vehiculos = document.getElementById("vehiculos");
//     boton.addEventListener("click", () => {
//       idCard = boton.id;
//       const id = dataGhibli.mostrarPeliculaIndividual(idCard);
      
//       id.forEach(element => {
//         pagina.innerHTML = `
//         <img src="${element.poster}" alt="">
//         <p>${element.title}</p>
//         <p>${element.director}</p>
//         <p>${element.description}</p>
//         <p>${element.producer}</p>
//         <p>${element.release_date}</p>
//         <p>${element.rt_score}</p>
         
//         `;
//           personajes.innerHTML = "";
//           element.people.forEach(persona =>{
//           personajes.innerHTML +=
//            `<div class = "cont-people">
//              <p>${persona.name}</p>
//              <p>${persona.gender}</p>
//              <p>${persona.age}</p>
//              <p>${persona.eye_color}</p>
//             <p>${persona.hair_color}</p>
//             <p>${persona.specie}</p>
//            </div>
//            ` 
//           });
          
//           location.innerHTML = ""
//           element.locations.forEach(locacion =>{
          
//             location.innerHTML +=
//             `<div class = "cont-locacion">
//             <p>${locacion.name}</p>
//             <p>${locacion.climate}</p>
//             <p>${locacion.terrain}</p>
//             <p>${locacion.surface_water}</p>
            
//             </div>`

//           });
          
//           vehiculos.innerHTML = ""
//           element.vehicles.forEach(vehiculo =>{
//             vehiculos.innerHTML +=
//             `<div class = "cont-vehiculos">
//             <p>${vehiculo.name}</p>
//             <p>${vehiculo.description}</p>
//             <p>${vehiculo.vehicle_class}</p>
//             <p>${vehiculo.length}</p>
//             <p>${vehiculo.pilot.name}</p>
                     
//             </div>`
//           });
//         });
//        });
  
//    }
// }


// //seccion directores
// const directores = document.querySelectorAll(".menu_director");

// directores.forEach((director =>{
//    const directorI = director;
  
//    directorI.addEventListener("click", () =>{
//       const idDirector = directorI.id;
//       const dataDirector = dataGhibli.filtrarDirectores(idDirector);
//       console.log(dataDirector);
//    })
// }))



