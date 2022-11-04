import objetoghibli from './data/ghibli/ghibli.js'; /*libera nuestra data*/
//console.log(objetoghibli.films[0]);
//console.log(objetoghibli.films.length);

// eslint-disable-next-line no-console
console.log(objetoghibli);

//Funcion para mostrar las peliculas
let show = function (dataGhibli){ 
  let newHtml= ""
    dataGhibli.forEach(function(film,index){
      console.log (film);
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
