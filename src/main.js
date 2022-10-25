import rickandmorty from './data/rickandmorty/rickandmorty.js';
import {filterGender, filterStatus, filterSpecies, statisticsFrequency, ordenAZ, ordenZA, buscar} from './data.js';
let data = rickandmorty.results;

// let containerMobile = document.getElementById("container-mobile");
let containerData = document.getElementById("cards");
let sortOption = document.getElementById("sort");
let filterOptionStatus = document.getElementById("filterStatus");
let filterOptionGender = document.getElementById ("filterGender");
let filterOptionSpecies = document.getElementById ("filterSpecies");
let buscarPersonajes = document.querySelector("#buscar");
// Template de cards personajes, muestra las cards en la interfaz. Depende de la data ingresada
const templateTarjeta = (x) =>{
   x.forEach ((results) => {
        let info = `<div class="card"><img src="${results.image}"><br><p><strong>Name:</strong> ${results.name}</p><br><p><strong>Status:</strong> ${results.status}</p><br><p><strong>Species:</strong> ${results.species}</p><br><p><strong>Gender:</strong> ${results.gender}</p><br><p><strong>Origin:</strong> ${results["origin"].name}</p></div>`;
        containerData.insertAdjacentHTML("afterbegin", info);
})};
templateTarjeta(data);

//funcion filtrado por Gender
filterOptionGender.addEventListener("click",() => { 
    let dataFiltrada;
    switch (filterOptionGender.value) {
        case "genderFem": containerData.innerHTML = ""; 
        dataFiltrada =  filterGender (data, "Female");
        templateTarjeta (dataFiltrada);   
            break;
        case "genderMale": containerData.innerHTML = ""; 
        dataFiltrada =  filterGender (data, "Male");
        templateTarjeta (dataFiltrada);   
            break;
        case "genderUnknown": containerData.innerHTML = ""; 
        dataFiltrada =  filterGender (data, "unknown");
        templateTarjeta (dataFiltrada);   
            break;  
        case "genderLess": containerData.innerHTML = ""; 
        dataFiltrada =  filterGender (data, "Genderless");
        templateTarjeta (dataFiltrada);   
                break; 
        case "all": containerData.innerHTML = "";
        dataFiltrada = templateTarjeta (data);
        templateTarjeta (dataFiltrada);                 
            break;       
    }

    // funcion sort AZ - ZA
    sortOption.addEventListener("click", () => {        
        if (sortOption.value == "name") {
         containerData.innerHTML = ""
        return templateTarjeta (ordenAZ(dataFiltrada));   
     }
     else if (sortOption.value == "nameZ") {
         containerData.innerHTML = ""
     return templateTarjeta (ordenZA(dataFiltrada)); }
    
    });
    let options = filterOptionGender.value;
   alert(`Did you know that ${options} represents ${statisticsFrequency(data, dataFiltrada)}% of the ${data.length} characters in the show`);
});
    //funcion filtrado por Species
    filterOptionSpecies.addEventListener("click",() => { 
        let dataFiltrada;
        switch (filterOptionSpecies.value) {
            case "speciesHuman": containerData.innerHTML = ""; 
            dataFiltrada =  filterSpecies (data, "Human");
            templateTarjeta (dataFiltrada);   
                break;
            case "speciesAlien": containerData.innerHTML = ""; 
            dataFiltrada =  filterSpecies (data, "Alien");
            templateTarjeta (dataFiltrada);   
                break;
            case "speciesMytholog": containerData.innerHTML = ""; 
            dataFiltrada =  filterSpecies (data, "Mytholog");
            templateTarjeta (dataFiltrada);   
                break;  
            case "speciesUnknown": containerData.innerHTML = ""; 
            dataFiltrada =  filterSpecies (data, "unknown");
            templateTarjeta (dataFiltrada);   
                break; 
            case "speciesRobot": containerData.innerHTML = ""; 
            dataFiltrada =  filterSpecies (data, "Robot");
            templateTarjeta (dataFiltrada);   
                break;
            case "speciesPoopybutthole": containerData.innerHTML = ""; 
            dataFiltrada =  filterSpecies (data, "Poopybutthole");
            templateTarjeta (dataFiltrada);   
                break;
            case "speciesParasite": containerData.innerHTML = ""; 
            dataFiltrada =  filterSpecies (data, "Parasite");
            templateTarjeta (dataFiltrada);   
                break;
            case "speciesAnimal": containerData.innerHTML = ""; 
            dataFiltrada =  filterSpecies (data, "Animal");
            templateTarjeta (dataFiltrada);   
                break;
            case "speciesDisease": containerData.innerHTML = ""; 
            dataFiltrada =  filterSpecies (data, "Disease");
            templateTarjeta (dataFiltrada);   
                break;
            case "speciesHumanoid": containerData.innerHTML = ""; 
            dataFiltrada =  filterSpecies (data, "Humanoid");
            templateTarjeta (dataFiltrada);   
                break;
            case "speciesCronenberg": containerData.innerHTML = ""; 
            dataFiltrada =  filterSpecies (data, "Cronenberg");
            templateTarjeta (dataFiltrada);   
                break;
            case "speciesVampire": containerData.innerHTML = ""; 
            dataFiltrada =  filterSpecies (data, "Vampire");
            templateTarjeta (dataFiltrada);   
                break;
            case "all": containerData.innerHTML = "";
            dataFiltrada = templateTarjeta (data);
            templateTarjeta (dataFiltrada);                 
                break;       
    
        }
        // función ordenar AZ - ZA
        sortOption.addEventListener("click", () => {        
            if (sortOption.value == "name") {
             containerData.innerHTML = ""
            return templateTarjeta (ordenAZ(dataFiltrada));   
         }
         else if (sortOption.value == "nameZ") {
             containerData.innerHTML = ""
         return templateTarjeta (ordenZA(dataFiltrada)); }
        
     });
    });
//funcion filtrado por Status
filterOptionStatus.addEventListener("change",() => { 
    let dataFiltrada;
    switch (filterOptionStatus.value) {
        case "statusAlive": containerData.innerHTML = ""; 
        dataFiltrada =  filterStatus (data, "Alive");
        templateTarjeta (dataFiltrada);   
            break;
        case "statusDead": containerData.innerHTML = ""; 
        dataFiltrada =  filterStatus (data, "Dead");
        templateTarjeta (dataFiltrada);   
            break;
        case "statusUnknown": containerData.innerHTML = ""; 
        dataFiltrada =  filterStatus (data, "unknown");
        templateTarjeta (dataFiltrada);   
            break;  
        case "all": containerData.innerHTML = "";
        dataFiltrada = templateTarjeta (data);
        templateTarjeta (dataFiltrada);                 
            break;       

    }
    // función ordenar AZ - ZA
    sortOption.addEventListener("click", () => {        
        if (sortOption.value == "name") {
         containerData.innerHTML = ""
        return templateTarjeta (ordenAZ(dataFiltrada));   
     }
     else if (sortOption.value == "nameZ") {
         containerData.innerHTML = ""
     return templateTarjeta (ordenZA(dataFiltrada)); }
    
 });
});


// Sección estadísticas
// Estadística de proporción de categorías en el total de la data
const filterFemale = filterGender (data, "Female");
console.log(filterFemale.length)
console.log(data.length)
console.log(statisticsFrequency(data, filterFemale))


// const filterMale = filterGender (data, "Male");
// console.log(filterMale.length);
// console.log(statisticsFrequency(data, filterMale));

// const filterAlive = filterStatus (data, "Alive");
// console.log(filterAlive.length)
// console.log(statisticsFrequency(data, filterAlive));

// const filterDead = filterStatus (data, "Dead");
// console.log(filterDead.length)
// console.log(statisticsFrequency(data, filterDead));

// const filterunknown = filterStatus (data, "Unknown");
// console.log(filterunknown.length)
// console.log(statisticsFrequency(data, filterunknown));

// Menú-mobile responsivo según orientación del dispositivo
// const mediaQueryList = window.matchMedia("(orientation: portrait)");
// const x = window.matchMedia("(max-width:700px)")
// function mobileScreen(x) {
//     if (x.matches && containerMobile.style.display === "none") {
//         return containerMobile.style.display = "block";
//     } else {
//         return containerMobile.style.display = "none";
//     }
// }

// mobileScreen(x);
// // Escucha evento 'change' cuando dispositivo mobile cambia a orientación portrait y ejecuta función mobileScreen
// mediaQueryList.addEventListener('change', mobileScreen);

//buscar


buscarPersonajes.addEventListener('keyup', () => {
    data = buscar(data, 'name', buscarPersonajes.value);
    containerData.innerHTML = "";
    templateTarjeta(data);
  });