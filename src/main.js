import { filterDataByProperty, filterDataByValue, filterDataByProperties } from './data.js';

import data from './data/ghibli/ghibli.js';

const gFilms = data.films;

//console.log(data["films"][0]["producer"]);

const iconHamburger = document.getElementById("hamburgerIcon");

iconHamburger.addEventListener('click', showMenuLeftResponsive);

function showMenuLeftResponsive() {

    var x = document.getElementById("menuLeft");
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

console.log(filterDataByValue(gFilms, "producer", "Hayao Miyazaki"));
console.log(filterDataByValue(gFilms, "director", "Isao Takahata"));


const showData = (data, property) => {

    if (property === false) {

        data.forEach(value => {
            document.getElementById('section__ghibliInfo').insertAdjacentHTML('beforeend', `<div class="producers" id="${value}">${value}</div>`)

        });

    }
    else {
        //let movieTitle=data.title;
        data.forEach(data => {

            const name = data[property];
            document.getElementById('section__ghibliInfo').insertAdjacentHTML('beforeend', `<div class="producers" id="${name}">${name}</div>`)

        });

    }

}

console.log("P: " + filterDataByProperty(gFilms, 'producer'));
console.log("D: " + filterDataByProperty(gFilms, 'director'));


let p = document.getElementById("producersMenu"); // Encuentra el elemento "p" en el sitio
p.onclick = showProducers; // Agrega función onclick al elemento

function showProducers(event) {
    event.preventDefault();
    //document.getElementById("myDIV").style.display = "none";

    showData(filterDataByProperty(gFilms, 'producer'), false);
}

let d = document.getElementById("directorsMenu"); // Encuentra el elemento "p" en el sitio
d.onclick = showDirectors; // Agrega función onclick al elemento

function showDirectors(event) {
    event.preventDefault();

    showData(filterDataByProperty(gFilms, 'director'), false);
}

const properties = ["title", "poster"];
console.log(filterDataByProperties(gFilms, properties));
