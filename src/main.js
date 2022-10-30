import { filterDataByProperty, filterDataByProperties, sortDataAZ } from './data.js';

import data from './data/ghibli/ghibli.js';

const gFilms = data.films;
/*

window.addEventListener('load', init, false);

function init() {
    const welcome = document.querySelector('.mainSection__welcome');
    welcome.style.visibility = 'visible';
    const directorsSection = document.querySelector('.mainSection__directors');
    directorsSection.style.visibility = 'hidden';
    const producersSection = document.querySelector('.mainSection__producers');
    producersSection.style.visibility = 'hidden';
    const moviesSection = document.querySelector('.mainSection__movies');
    moviesSection.style.visibility = 'hidden';
}*/




//console.log(data["films"][0]["producer"]);

const iconHamburger = document.getElementById("hamburgerIcon");

iconHamburger.addEventListener('click', showMenuLeftResponsive);

function showMenuLeftResponsive() {

    const x = document.getElementById("menuLeft");
    if (x.className === "menuLeft") {
        x.className += " responsive";
    } else {
        x.className = "menuLeft";
    }
}
/*

//console.log(data["films"][k]["producer"]);
const producer = document.querySelector(".producers"); //aquí accedo al div con el class = "productores"
const showProducer = document.createDocumentFragment();

filterDataByProperty(gFilms,"producer").forEach(function (value) {
  const item = document.createElement("DIV"); //Esto crea un elemento de HTML (es en mayúscula porque es sensible)
  item.innerHTML = value; //esto lo va guardando en un div
  showProducer.appendChild(item); //esto crea el div
});
 
producer.appendChild(showProducer); //y aquí se muestra
*/

//console.log(filterDataByValue(gFilms, "producer", "Hayao Miyazaki"));
//console.log(filterDataByValue(gFilms, "director", "Isao Takahata"));


const showData = (data, property) => {

    if (property === false) {

        data.forEach(value => {
            document.getElementById('section__gContainer').insertAdjacentHTML('beforeend', `<div class="gibliInfo" id="${value}">${value}</div>`)

        });

    }
    else {
        //let movieTitle=data.title;
        data.forEach(data => {

            const name = data[property];
            document.getElementById('section__gContainer').insertAdjacentHTML('beforeend', `<div class="gibliInfo" id="${name}">${name}</div>`)

        });

    }

}

//console.log("P: " + filterDataByProperty(gFilms, 'producer'));
//console.log("D: " + filterDataByProperty(gFilms, 'director'));

document
    .getElementById("directorsMenu")
    .addEventListener("click", function (event) {
        event.preventDefault();

        /*  let welcomeSection = document.querySelector('.mainSection__welcome');
          welcomeSection.style.visibility = 'hidden';
          let directorsSection = document.querySelector('.mainSection__directors');
          directorsSection.style.visibility = 'visible';
          directorsSection.section__ghibliInfo.style.visibility = 'visible';*/


        showData(filterDataByProperty(gFilms, 'director'), false);

    })



document
    .getElementById("producersMenu")
    .addEventListener("click", function (event) {
        event.preventDefault();

        /* let welcomeSection = document.querySelector('.mainSection__welcome');
         welcomeSection.style.visibility = 'hidden';
         let producersSection = document.querySelector('.mainSection__producers');
         producersSection.style.visibility = 'visible';*/

        showData(filterDataByProperty(gFilms, 'producer'), false);

    })



document
    .getElementById("moviesMenu")
    .addEventListener("click", function (event) {
        event.preventDefault();

        /*let welcomeSection = document.querySelector('.mainSection__welcome');
        welcomeSection.style.visibility = 'hidden';
        let moviesSection = document.querySelector('.mainSection__movies');
        moviesSection.style.visibility = 'visible';*/

        const movies = filterDataByProperties(gFilms, ["title", "poster"]);

        const moviesFragment = document.createDocumentFragment();

        movies.forEach(movie => {
            const title = document.createElement("p");
            title.innerText = movie.title;
            const poster = document.createElement("img");
            poster.src = movie.poster;
            const movieCard = document.createElement("div");
            movieCard.appendChild(poster);
            movieCard.appendChild(title);
            moviesFragment.appendChild(movieCard);
        });
        document.querySelector(".movies").appendChild(moviesFragment);

        const obj2 = sortDataAZ(movies, "title");

        obj2.forEach((obj2) => { console.log("orderAZ: " + ": " + obj2["title"]) });



    })


//console.log(filterDataByProperties(gFilms, ["title", "poster"]));


/*let d = document.getElementById("directorsMenu"); // Encuentra el elemento "p" en el sitio
d.onclick = showDirectors; // Agrega función onclick al elemento

function showDirectors(event) {
    event.preventDefault();

    showData(filterDataByProperty(gFilms, 'director'), false);
}*/

