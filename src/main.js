import data from './data/harrypotter/harry.js';

import { llamarData , llamarModal} from './mostrardata.js';
import { encontrarId, ordenarAaZ, ordenarFecha } from './data.js';




// eslint-disable-next-line no-unused-vars


//const dataLibros=data.books;
//const dataPersonajes=data.characters;
//const dataPociones=data.potions;
//const dataHechizos=data.spells;


let copiaDataLibros= [...data.books];
llamarData(copiaDataLibros);
mostrarModal();



function mostrarModal(){
  const celdas=document.querySelectorAll(".celdas");
  const span = document.getElementsByClassName("close")[0];
  celdas.forEach(celda  =>{
    celda.addEventListener("click", () =>{
      document.querySelector("#myModal").style.display="flex";
      const idtarjeta= celda.className.split(" ")[0];
      //console.log(idtarjeta)
      llamarModal(encontrarId(idtarjeta, data.books));
    }
    );
    const contenedor1=document.getElementById("libros1");
    span.onclick = function() {
      document.querySelector("#myModal").style.display = "none";
      contenedor1.innerHTML=" ";
    }
    window.onclick = function(event) {
      if (event.target == document.querySelector("#myModal")) {
        document.querySelector("#myModal").style.display = "none";
        contenedor1.innerHTML=" ";
      }
    }
  })
}

let contenedor1= document.getElementById("libros");

const selector=document.getElementById("select");
selector.addEventListener("change", () => {
  contenedor1.innerHTML=" ";
  switch (selector.value) {
    case "all":

      llamarData(data.books);
      
      break;
    case "ordenarAZ":
      llamarData(ordenarAaZ(data.books));
      break;
    case "ordenarZA":
      llamarData(ordenarAaZ(data.books).reverse());
      break;
    case "recienteAntiguo":
      llamarData(ordenarFecha(data.books));
      break;
    case "antiguoReciente":
      llamarData(ordenarFecha(data.books).reverse());
      break;
    

  }
  mostrarModal();
});





    

/*

const caja4= document.getElementById("Personajes");


dataPersonajes.forEach(l =>{
  let dataPersonas= `<div class= "contenedorCeldas4">
  <div class= "celdas4">
  <h1 class= "nameCeldas4">${l.name}</h1>
  <p class="descrpcionCeldas4"><b>Casa: </b> ${l.house}</p>
  </div>
  
  </div>`
  

  caja4.insertAdjacentHTML("beforeend", dataPersonas);
});


dataPociones.forEach(l=>{
const caja2=document.getElementById("pociones");

const plantillaPociones=   
`<div class="contenedorPociones">
<div class="pociones01">
 <h1 class="idPociones">${l.id}</h1><br>
  <h1 class="namePociones"> ${ l.name }</h1>
  <p class="desPociones><b>Descripción: </b>${ l.description}<br> 
 </div>
 </div>`;
 
 caja2.insertAdjacentHTML("beforeend", plantillaPociones);})



dataHechizos.forEach(l=>{
const plantillaHechizos=   
`<div class="contenedorHechizos">
<div class="hechizos">
 <h1 class="h1hechizos"><b>Nombre: </b>${l.name}</h1><br>
  <p class="phechizos"><b>Pronunciación: </b> ${ l.pronunciation }</p>
  <p><b>Descripción: </b>${ l.description}<br> 
 </div>`;
document.body.innerHTML = plantillaHechizos;})

*/



