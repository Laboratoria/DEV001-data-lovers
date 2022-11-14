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
  dataGhibli.forEach(pelicula =>{
    pelicula.people.forEach(persona =>{
      
     if (persona.gender === generoPersonaje){
      personajesFiltrados.push(persona)
     }
    })
  })
  return personajesFiltrados;
}
