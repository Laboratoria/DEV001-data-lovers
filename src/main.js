import objetoghibli from './data/ghibli/ghibli.js'; /*libera nuestra data*/
//console.log(objetoghibli.films[0]);
//console.log(objetoghibli.films.length);

console.log(objetoghibli);


let show = function (dataGhibli){
    dataGhibli.films.forEach(function(film){
        console.log (film);
        document.getElementById("root").innerHTML+=film.title;
    });
}
show(objetoghibli);
















/*Funcion para recorrer el arreglo y tener acceso a sus personajes de ellos tomar imágen, nombre y género
function loopArray(objetoghibliFilms){
  for(let i = 0; i <objetoghibliFilms.length; i++){
    showcharacters (objetoghibliFilms[i].people);
  }
  showGenders(genderCharacters);
  }*/







//console.log(example, objetoghibli);


