// estas funciones son de ejemplo

export const getbooks = (data) => {
  let datalibros = data.books
  return datalibros;
};
//con esta funcion estamos llamando los personajes desde 1 al 40
export const getcharacters = (data) => {
  let dataindividuos = data.characters.slice(1, 46)
  return dataindividuos;
};

export const anotherExample = () => {
  return 'OMG';
};

//export const filterByHouse = (data, houseName) => {
//  return data.characters.filter(character => {
//    character.house == houseName
//  })
//}

//función para filtrar que debemos utilizar 
export const filterByHouse = (data, houseName) => {
  const arrPersonajesCasas = data.characters.filter(character => character.house == houseName);
  return arrPersonajesCasas
}




// aqui van las funciones puras
