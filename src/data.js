// estas funciones son de ejemplo

// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };

//export const filterfem = rickandmorty.filter(rickandmorty.results = `${results.gender}` === "female");

export const filterGender = (data, gender) => {
  const filtrado = data.filter(item => item.gender === gender);
return filtrado;
};

export const filterStatus = (data, status) => {
  const filtrado = data.filter(item => item.status === status);
return filtrado;
};

export const filterSpecies = (data, species) => {
  const filtrado = data.filter(item => item.species === species);
return filtrado;
};
