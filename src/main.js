import rickandmorty from './data/rickandmorty/rickandmorty.js';
import {filterGender, filterStatus, filterSpecies, orden, sortOrdenZ} from './data.js';
let data = rickandmorty.results;

let containerData = document.getElementById("cards");
let filterOption = document.getElementById("filter");
let sortOption = document.getElementById("sort");

const templateTarjeta = (x) =>{
    //let personajesRM =
     x.forEach ((results) => {
        let info = `<div class="card"><img src="${results.image}"><br><p>Name: ${results.name}</p><br><p>Status: ${results.status}</p><br><p>Species: ${results.species}</p><br><p>Gender: ${results.gender}</p><br><p>Origin: ${results["origin"].name}</p></div>`;
        containerData.insertAdjacentHTML("afterbegin", info);
})};

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
// función ordenar
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
     


   
    







