// Exporta función filterGender que filtra según data ingresada y el género del personaje dentro del objeto
export const filterGender = (data, gender) => {
  const filtrado = data.filter(item => item.gender === gender);
return filtrado;
};

// Exporta función filterStatus que filtra según data ingresada y el estado del personaje dentro del objeto
export const filterStatus = (data, status) => {
  const filtrado = data.filter(item => item.status === status);
return filtrado;
};

// Exporta función filterSpecies que filtra según data ingresada y la especie del personaje dentro del objeto
export const filterSpecies = (data, species) => {
  const filtrado = data.filter(item => item.species === species);
return filtrado;
};

// Exporta función ordenAZ que ordenan de forma ascendente los personajes del objeto según la data filtrada ingresada  
export const ordenAZ = (dataFilter) => {
 const sortOrdenAZ =  dataFilter.sort(function (a, b) {
    if (a.name < b.name) {
      return 1;
    }
    if (a.name > b.name) {
      return -1;
    }
//return 0;
})
return sortOrdenAZ;
};

// Exporta función ordenZA que ordenan de forma descendente los personajes del objeto según la data filtrada ingresada  
export const ordenZA = (dataFilter) => {
const sortOrdenZA =  dataFilter.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
 //return 0;
 
})
return sortOrdenZA;
};

// Exporta función statisticsFrequency que retorna la proporción de la categoría de los personajes respecto del total de la data
export const statisticsFrequency = (originalDataLength, categoryDataLength) => {
  let firstData = originalDataLength.length;
  let secondData = categoryDataLength.length;
  return Math.round(secondData * 100 / firstData);
};

//Buscar
export const buscar = (data, condition, value) => {
  return data.filter(item => item[condition].toLowerCase().includes(value.toLowerCase()));
};

// función selección al azar de personaje Quiz
export function quiz (data){
  return data [Math.floor(Math.random()*data.length)]
};