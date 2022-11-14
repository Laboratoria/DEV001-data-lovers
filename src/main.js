import objetoghibli from './data/ghibli/ghibli.js'; /*libera nuestra data*/
import {filterDirector, sortPelis, filterGender} from './data.js';
// eslint-disable-next-line no-console
//console.log(objetoghibli);

let showPersonaje = function(personas){
  let newHtml= ""
  personas.forEach(function(personaje,index){
    
      let templatePelicula =`
      <div class="cardPrincipal">
        <img src="${personaje.img}" alt="img">
        ${personaje.name}
        <button class= "showMore" data-film-id="${index}">Show More</button>
        <div class="modal" id="modal-film-${index}">
          <div class= "modal-content">
            <span class="close-button" data-film-id="${index}">&times;</span>
            <p>${personaje.name}</p>
            <p>Age: ${personaje.age}</p>
            <p>Specie: ${personaje.specie}</p>
          </div>
        </div>
      </div>`;
     newHtml+= templatePelicula;
  });
  document.getElementById("root").innerHTML = newHtml;

    const showMore = document.getElementsByClassName("showMore");
    const closeButton = document.getElementsByClassName("close-button");

    for(let i=0 ;i < showMore.length ; i++) {
      showMore[i].addEventListener("click", toggleModal);
    }
    for(let i=0 ; i < closeButton.length ; i++) {
      closeButton[i].addEventListener("click",toggleModal);
    }
}
//Funcion para mostrar las peliculas
let show = function (dataGhibli){ 
  let newHtml= ""
    dataGhibli.forEach(function(film,index){
      
        let templatePelicula =`
        <div class="cardPrincipal">
          <img src="${film.poster}" alt="poster">
          ${film.title}
          <button class= "showMore" data-film-id="${index}">Show More</button>
          <div class="modal" id="modal-film-${index}">
            <div class= "modal-content">
              <span class="close-button" data-film-id="${index}">&times;</span>
              <p>${film.title}</p>
              <p>Sypnosis: ${film.description}</p>
              <p>Director: ${film.director}</p>
            </div>
          </div>
        </div>`;
       newHtml+= templatePelicula;
    });
    document.getElementById("root").innerHTML = newHtml;

    const showMore = document.getElementsByClassName("showMore");
    const closeButton = document.getElementsByClassName("close-button");

    for(let i=0 ;i < showMore.length ; i++) {
      showMore[i].addEventListener("click", toggleModal);
    }
    for(let i=0 ; i < closeButton.length ; i++) {
      closeButton[i].addEventListener("click",toggleModal);
    }
}
show(objetoghibli.films);

//*funcion modal*//
function toggleModal(event) {
  let indice = event.target.attributes["data-film-id"].value;
  let idModal = "modal-film-"+indice;
  document.getElementById (idModal).classList.toggle("show-modal");
    
}
//*sort a-z y z-a*//
const sortSelect = document.getElementById("sort-movies-by");

sortSelect.addEventListener("change",() =>{
  let copyData = objetoghibli ;
  
switch(sortSelect.value){
  case "a-z": 
    show(sortPelis(copyData.films));
    break;
  case "z-a":
    show(sortPelis(copyData.films).reverse());
    break;
}
});
//*Filtrar por director*//
const filterSelect = document.getElementById("filter-director");

 filterSelect.addEventListener("change", () =>{
 
  
 show(filterDirector(objetoghibli.films,filterSelect.value));
 });
 /*Filtrado por gender */
const filterSelect2 = document.getElementById("filter-gender");

filterSelect2.addEventListener("change", () =>{

  
  showPersonaje (filterGender(objetoghibli.films, filterSelect2.value));
});










