// estas funciones son de ejemplo

export const getbooks = (data) => {
  let datalibros = data.books
  return datalibros;
};
//con esta funcion estamos llamando los personajes desde 1 al 40
export const getcharacters = (data) => {
  let dataindividuos = data.characters.slice(1,40)
  return dataindividuos;
};

export const anotherExample = () => {
  return 'OMG';
};


// aqui van las funciones puras
