// estas funciones son de ejemplo

export const getbooks = (data) => {
  let datalibros = data.books
  return datalibros;
};
//con esta funcion estamos llamando los personajes desde 1 al 40
export const getcharacters = (data) => {
  let dataindividuos = data.characters
  return dataindividuos;
};

//función para filtrar que debemos utilizar 
export const filterByHouse = (data, houseName) => {
  const arrPersonajesCasas = data.filter(character => character.house == houseName);
  return arrPersonajesCasas
}

export const filterByGender = (data, genero) => {
  const arrGender = data.filter(genders => genders.gender == genero);
  return arrGender
}

//esta función nos ordena de la A a la Z
export const sortByNameAz = (data) => {
  const Az = data.sort(function (Az, Za) {
  if (Az.name < Za.name) {
    return -1;
  }  
  })
  return Az;
}

// export const sortByNameZa = (data) => {
//   const Za = data.sort(function (Az, Za) {
//     if (Az.name > Za.name) {
//       return -1;
//     }
//   })
//   return Za;
// }





// aqui van las funciones puras
