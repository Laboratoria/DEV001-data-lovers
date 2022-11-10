// estas funciones son de ejemplo

//Sort A-Z Y Z-A
export const sortPelis = (dataGhibli) =>{
  let copyArray = dataGhibli;
  const pelisOrdenadas = copyArray.sort((prev, next) =>{
    if (prev.title < next.title) {
     return -1;
    }
  });
  return pelisOrdenadas;
}
// Filter director
export const filterDirector = (dataGhibli,nombreDirector) => {
  const directorFiltrado = dataGhibli.filter(function(pelicula){
    return pelicula.director == nombreDirector
  });
  return directorFiltrado;
}
//Filter gender
export const filterGender = (dataGhibli,generoPersonaje) => {
  const personajesFiltrados = []
  dataGhibli.films.forEach(pelicula =>{
    pelicula.people.forEach(persona =>{
      //console.log(persona);
     if (persona.gender === generoPersonaje){
      personajesFiltrados.push(persona)
     }
    })
  })
  return personajesFiltrados;
}




/*export const filterGender = (dataGhibli,nombreGenero) =>{
  const generoFiltrado = dataGhibli.filter(function(personaje){
    return personaje.gender == nombreGenero
  });
  return generoFiltrado;
}

//primero un forEach para mostrar cada pelicula
//segundo forEach para que pase por cada array de personas de cada pelicula
//si es del genero deseado que se agregue al nuevo array*/
