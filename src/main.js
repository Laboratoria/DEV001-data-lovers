import rickandmorty from './data/rickandmorty/rickandmorty.js';
import {filterGender, filterStatus, filterSpecies, orden, sortOrdenZ, statisticsFrequency} from './data.js';
let data = rickandmorty.results;





let containerData = document.getElementById("cards");
let filterOption = document.getElementById("filter");
let sortOption = document.getElementById("sort");
let filterOptionStatus = document.getElementById("filterStatus");
let filterOptionGender = document.getElementById ("filterGender");
let filterOptionSpecies = document.getElementById ("filterSpecies")

const templateTarjeta = (x) =>{
   x.forEach ((results) => {
        let info = `<div class="card"><img src="${results.image}"><br><p><strong>Name:</strong> ${results.name}</p><br><p><strong>Status:</strong> ${results.status}</p><br><p><strong>Species:</strong> ${results.species}</p><br><p><strong>Gender:</strong> ${results.gender}</p><br><p><strong>Origin:</strong> ${results["origin"].name}</p></div>`;
        containerData.insertAdjacentHTML("afterbegin", info);
})};

  
//funcion filtrado por gender
filterOptionGender.addEventListener("change",() => { 
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

    }});

    //funcion filtrado por Species
    filterOptionSpecies.addEventListener("change",() => { 
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
            dataFiltrada =  filterSpecies (data, "Unknown");
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
    
        }});
    
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

    }});

//funcion filtrado
 filterOption.addEventListener("change", () => {
    let dataFiltrada;
    switch (filterOption.value) {
        case "generoFem": containerData.innerHTML = ""; 
        dataFiltrada =  filterGender (data, "Female");
        templateTarjeta (dataFiltrada);   
            break;
        case "generoMale": containerData.innerHTML = ""; 
        dataFiltrada =  filterGender (data, "Male");
        templateTarjeta (dataFiltrada); 
            break;
        case "generoindefinido": containerData.innerHTML = ""; 
        dataFiltrada = templateTarjeta (filterGender (data, "Unknown" )); 
        templateTarjeta (filterGender (data, "Genderless"));   
            break;
        case "statusAlive": containerData.innerHTML = "";
            dataFiltrada = filterStatus (data, "Alive");
            templateTarjeta (dataFiltrada);             
            break;
        case "statusDead": containerData.innerHTML = "";
            dataFiltrada = filterStatus (data, "Dead");
            templateTarjeta(dataFiltrada);           
            break;
        case "speciesHuman": containerData.innerHTML = "";
            dataFiltrada =  filterSpecies (data, "Human");
        templateTarjeta (dataFiltrada);             
            break;
        case "speciesAlien": containerData.innerHTML = "";
        dataFiltrada =  filterSpecies (data, "Alien");
        templateTarjeta (dataFiltrada);                        
            break;
        case "all": containerData.innerHTML = "";
            dataFiltrada = templateTarjeta (data);
            templateTarjeta (dataFiltrada);                 
            break; 
               
            
    }
    
  
// funcion ordenar
      sortOption.addEventListener("click", () => {        
           if (sortOption.value == "name") {
            containerData.innerHTML = ""
           return templateTarjeta (orden(dataFiltrada));   
        }
        else if (sortOption.value == "nameZ") {
            containerData.innerHTML = ""
        return templateTarjeta (sortOrdenZ(dataFiltrada)); }
       
    });

    });
 
    //lo comenté mientras porque arrojaba error en test! 
// // Sección estadísticas
const filterFemale = filterGender (data, "Female");
// console.log(filterFemale.length)
// console.log(data.length)
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
