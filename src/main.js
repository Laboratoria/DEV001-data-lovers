import { filterData } from './data.js';

import data from './data/ghibli/ghibli.js';

const gFilms=data.films;

//console.log(data["films"][0]["producer"]);

    const iconHamburger = document.getElementById("hamburgerIcon");

    iconHamburger.addEventListener('click', showMenuLeftResponsive);
    
    function showMenuLeftResponsive () {
        
    var x = document.getElementById("menuLeft");
    if (x.className === "menuLeft") {
        x.className += " responsive";
    } else {
        x.className = "menuLeft";
    }
}
      

    //console.log(data["films"][k]["producer"]);
    const producer = document.querySelector(".producers"); //aquí accedo al div con el class = "productores"
    const showProducer = document.createDocumentFragment();

    for (let i=0; i<filterData(gFilms,"producer").length;i++) {
        const item = document.createElement("DIV"); //Esto crea un elemento de HTML (es en mayúscula porque es sensible)
        item.innerHTML = filterData(gFilms,"producer")[i]; //esto lo va guardando en un div
        showProducer.appendChild(item); //esto crea el div
    }
    
    producer.appendChild(showProducer); //y aquí se muestra

