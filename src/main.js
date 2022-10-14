import rickandmorty from './data/rickandmorty/rickandmorty.js';
import {filterGender, filterStatus, filterSpecies} from './data.js';
let data = rickandmorty.results;

let containerData = document.getElementById("cards");
//console.log(example, data);

let filterOption = document.getElementById("filter");

const templateTargeta = (x) =>{
    let personajesRM = x.forEach ((results) => {
        let info = `<div class="card"><img src="${results.image}"><br><p>Name: ${results.name}</p><br><p>Status: ${results.status}</p><br><p>Species: ${results.species}</p><br><p>Gender: ${results.gender}</p><br><p>Origin: ${results["origin"].name}</p></div>`;
        containerData.insertAdjacentHTML("afterbegin", info);
})};


 filterOption.addEventListener("change", () => {
    switch (filterOption.value) {
        case "generoFem": templateTargeta (filterGender (data, "Female"));              
            break;
        case "generoMale": templateTargeta (filterGender (data, "Male"));
            break;
        case "generoindefinido": templateTargeta (filterGender (data, "unknown"));
         templateTargeta (filterGender (data, "Genderless"));
            break;
        case "statusAlive": templateTargeta (filterStatus (data, "Alive"));              
            break;
        case "statusDead": templateTargeta (filterStatus (data, "Dead"));              
            break;
        case "speciesHuman": templateTargeta (filterSpecies (data, "Human"));              
            break;
        case "speciesAlien": templateTargeta (filterSpecies (data, "Alien"));              
            break;
        case "all": templateTargeta(data);              
            break;
    }
     
     });
    










