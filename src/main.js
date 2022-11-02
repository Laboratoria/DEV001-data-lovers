import rickandmorty from './data/rickandmorty/rickandmorty.js';
import { filterGender, filterStatus, filterSpecies, statisticsFrequency, ordenAZ, ordenZA, buscar, quiz } from './data.js';

// Data por utilizar Rick and Morty
let data = rickandmorty.results;

// let containerMobile = document.getElementById("container-mobile");
let containerData = document.getElementById("cards");
let sortOption = document.getElementById("sort");
let filterOptionStatus = document.getElementById("filterStatus");
let filterOptionGender = document.getElementById("filterGender");
let filterOptionSpecies = document.getElementById("filterSpecies");
let buscarPersonajes = document.querySelector("#buscar");
let mostrarStatistics = document.getElementById("statistics");
const clearButton = document.getElementById("clear-button");

// Modal inicio
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// Usuario hace click y modal se abre
btn.onclick = function () {
    modal.style.display = "block";
};
// Usuario hace click en <span> (x), modal se cierra
span.onclick = function () {
    modal.style.display = "none";
};
// Usuario hace click fuera del modal, modal se cierra
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
// Random function en quiz
const randomButton = document.getElementById("random-function");
randomButton.addEventListener("click", () => {
    let dataRandom;
    let checked1 = document.getElementById("checkedornot");
    let checked1children = checked1.children;
    let checked2 = document.getElementById("checkedornot2");
    let checked2children = checked2.children;
    let mostrarCardQuiz = document.getElementById("cardPersonaje");
    // Recorre todos los children de checked1, regresa los filtrados según selección de usuario y guarda data en variable dataRandom
    for (let item of checked1children) {
        if (item.checked) {
            console.log(filterGender(data, item.value));
            dataRandom = filterGender(data, item.value);

        }
    };
    // Recorre todos los children de checked2, regresa los filtrados según selección de usuario, retorna valor final de dataRandom   
    for (let item of checked2children) {
        if (item.checked) {
            dataRandom = filterStatus(dataRandom, item.value);
            console.log(dataRandom);
        }
    };
    // Ingresa valor de variable dataRandom a la función `quiz` y guarda el valor en la variable dataRandom
    dataRandom = quiz(dataRandom);
    // Template de card en el quiz, se inserta en el innerHTML en el div con id "mostrarCardQuiz"
    let cardQuiz = `</div><h3>You're sooo ${dataRandom.name}!</h3><div class="cardQuiz"><img class="imgRandom" src="${dataRandom.image}"><br><p><strong>Name:</strong> ${dataRandom.name}</p><br><p><strong>Status:</strong> ${dataRandom.status}</p><br><p><strong>Species:</strong> ${dataRandom.species}</p><br><p><strong>Gender:</strong> ${dataRandom.gender}</p><br><p><strong>Origin:</strong> ${dataRandom["origin"].name}</p>`;
    mostrarCardQuiz.innerHTML = cardQuiz;
});
// Oculta información del modal cuando se envían las respuestas ingresadas en el quiz
randomButton.addEventListener("click", () => {
    let x = document.getElementById("checkedornot3");
    let y = document.getElementById("checkedornot");
    let z = document.getElementById("checkedornot2");
    if (x.hidden === false && y.hidden === false && z.hidden === false) {
        x.hidden = true;
        y.hidden = true;
        z.hidden = true;
    }
});
// fin modal

// Template de cards personajes en container, muestra las cards en la interfaz e incluye método de ordenar AZ-ZA. Depende de la data ingresada.
const templateTarjeta = (x) => {
    x.forEach((results) => {
        let info = `<div class="card"><img src="${results.image}"><br><p><strong>Name:</strong> ${results.name}</p><br><p><strong>Status:</strong> ${results.status}</p><br><p><strong>Species:</strong> ${results.species}</p><br><p><strong>Gender:</strong> ${results.gender}</p><br><p><strong>Origin:</strong> ${results["origin"].name}</p></div>`;
        containerData.insertAdjacentHTML("afterbegin", info);
    })
    let dataSort = x;
    sortOption.addEventListener("click", () => {
        if (sortOption.value == "name") {
            containerData.innerHTML = ""
            return templateTarjeta(ordenAZ(dataSort));
        }
        else if (sortOption.value == "nameZ") {
            containerData.innerHTML = ""
            return templateTarjeta(ordenZA(dataSort));
        }

    });
};
// Define función de búsqueda de personajes por nombre. Depende de data ingresada.
const searchInput = (x) => {
    buscarPersonajes.addEventListener('keyup', () => {
        let dataPersonajes = buscar(x, 'name', buscarPersonajes.value);
        containerData.innerHTML = "";
        return templateTarjeta(dataPersonajes);
    });
};
// clear button
templateTarjeta(data);
clearButton.addEventListener("click", () => {
    return window.location.reload();
});

//funcion filtrado por Gender
filterOptionGender.addEventListener("click", () => {
    let dataFiltrada;
    switch (filterOptionGender.value) {
        case "Female": containerData.innerHTML = "";
            dataFiltrada = filterGender(data, "Female");
            templateTarjeta(dataFiltrada);
            break;
        case "Male": containerData.innerHTML = "";
            dataFiltrada = filterGender(data, "Male");
            templateTarjeta(dataFiltrada);
            break;
        case "unknown": containerData.innerHTML = "";
            dataFiltrada = filterGender(data, "unknown");
            templateTarjeta(dataFiltrada);
            break;
        case "Genderless": containerData.innerHTML = "";
            dataFiltrada = filterGender(data, "Genderless");
            templateTarjeta(dataFiltrada);
            break;
        case "all": containerData.innerHTML = "";
            dataFiltrada = templateTarjeta(data);
            templateTarjeta(dataFiltrada);
            break;
    };
    // Función buscar en input por dataFiltrada
    searchInput(dataFiltrada);
    // Agrega mensaje en pantalla con estadísticas de la categoría
    let options = filterOptionGender.value;
    mostrarStatistics.innerHTML = `Did you know that ${options} represents ${statisticsFrequency(data, dataFiltrada)}% of the ${data.length} characters in the show`;
});

//funcion filtrado por Species
filterOptionSpecies.addEventListener("click", () => {
    let dataFiltrada;
    switch (filterOptionSpecies.value) {
        case "Human": containerData.innerHTML = "";
            dataFiltrada = filterSpecies(data, "Human");
            templateTarjeta(dataFiltrada);
            break;
        case "Alien": containerData.innerHTML = "";
            dataFiltrada = filterSpecies(data, "Alien");
            templateTarjeta(dataFiltrada);
            break;
        case "Mytholog": containerData.innerHTML = "";
            dataFiltrada = filterSpecies(data, "Mytholog");
            templateTarjeta(dataFiltrada);
            break;
        case "unknown": containerData.innerHTML = "";
            dataFiltrada = filterSpecies(data, "unknown");
            templateTarjeta(dataFiltrada);
            break;
        case "Robot": containerData.innerHTML = "";
            dataFiltrada = filterSpecies(data, "Robot");
            templateTarjeta(dataFiltrada);
            break;
        case "Poopybutthole": containerData.innerHTML = "";
            dataFiltrada = filterSpecies(data, "Poopybutthole");
            templateTarjeta(dataFiltrada);
            break;
        case "Parasite": containerData.innerHTML = "";
            dataFiltrada = filterSpecies(data, "Parasite");
            templateTarjeta(dataFiltrada);
            break;
        case "Animal": containerData.innerHTML = "";
            dataFiltrada = filterSpecies(data, "Animal");
            templateTarjeta(dataFiltrada);
            break;
        case "Disease": containerData.innerHTML = "";
            dataFiltrada = filterSpecies(data, "Disease");
            templateTarjeta(dataFiltrada);
            break;
        case "Humanoid": containerData.innerHTML = "";
            dataFiltrada = filterSpecies(data, "Humanoid");
            templateTarjeta(dataFiltrada);
            break;
        case "Cronenberg": containerData.innerHTML = "";
            dataFiltrada = filterSpecies(data, "Cronenberg");
            templateTarjeta(dataFiltrada);
            break;
        case "Vampire": containerData.innerHTML = "";
            dataFiltrada = filterSpecies(data, "Vampire");
            templateTarjeta(dataFiltrada);
            break;
        case "all": containerData.innerHTML = "";
            dataFiltrada = templateTarjeta(data);
            templateTarjeta(dataFiltrada);
            break;
    };
    // Función buscar en input por dataFiltrada
    searchInput(dataFiltrada);
    // Agrega mensaje en pantalla con estadísticas de la categoría
    let optionsSpecies = filterOptionSpecies.value;
    mostrarStatistics.innerHTML = `Did you know that ${optionsSpecies} represents ${statisticsFrequency(data, dataFiltrada)}% of the ${data.length} characters in the show`;
});

//funcion filtrado por Status
filterOptionStatus.addEventListener("change", () => {
    let dataFiltrada;
    switch (filterOptionStatus.value) {
        case "Alive": containerData.innerHTML = "";
            dataFiltrada = filterStatus(data, "Alive");
            templateTarjeta(dataFiltrada);
            break;
        case "Dead": containerData.innerHTML = "";
            dataFiltrada = filterStatus(data, "Dead");
            templateTarjeta(dataFiltrada);
            break;
        case "unknown": containerData.innerHTML = "";
            dataFiltrada = filterStatus(data, "unknown");
            templateTarjeta(dataFiltrada);
            break;
        case "all": containerData.innerHTML = "";
            dataFiltrada = templateTarjeta(data);
            templateTarjeta(dataFiltrada);
            break;
    }
    // Función buscar en input por dataFiltrada
    searchInput(dataFiltrada);
    // Agrega mensaje en pantalla con estadísticas de la categoría
    let optionsStatus = filterOptionStatus.value;
    mostrarStatistics.innerHTML = `Did you know that ${optionsStatus} represents ${statisticsFrequency(data, dataFiltrada)}% of the ${data.length} characters in the show`;
});

//buscar
buscarPersonajes.addEventListener('keyup', () => {
    let dataPersonajes = buscar(data, 'name', buscarPersonajes.value);
    containerData.innerHTML = "";
    templateTarjeta(dataPersonajes);
});