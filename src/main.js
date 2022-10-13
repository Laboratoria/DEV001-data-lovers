import rickandmorty from './data/rickandmorty/rickandmorty.js';

let data = rickandmorty.results;

let containerData = document.getElementById("cards");
//console.log(example, data);

let personajesRM = data.forEach ((results) => {
    let info = `<div class="card"><img src="${results.image}"><br><p>Name: ${results.name}</p><br><p>Status: ${results.status}</p><br><p>Species: ${results.species}</p><br><p>Gender: ${results.gender}</p><br><p>Origin: ${results["origin"].name}</p></div>`;
    containerData.insertAdjacentHTML("afterbegin", info);
})
