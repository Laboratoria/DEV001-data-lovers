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

//función para filtrar la casa que debemos utilizar 
export const filterByHouse = (data, houseName) => {
  const arrPersonajesCasas = data.filter(character => character.house == houseName);
  return arrPersonajesCasas
};

//función para filtrar por genero
export const filterByGender = (data, genero) => {
  const arrGender = data.filter(genders => genders.gender == genero);
  return arrGender
};

//esta función nos ordena de la A a la Z
export const sortByNameAz = (data) => {
  const Az = data.sort(function (Az, Za) {
    if (Az.name < Za.name) {
      return -1;
    }
  })
  return Az;
}
export const sortByNameZa = (data) => {
  const Za = data.sort(function (Az, Za) {
    if (Az.name < Za.name) {
      return -1;
    }
  })
  return Za.reverse();
}



// const ctx = document.getElementById('myChart').getContext('2d');
// const myChart = new Chart(ctx, {
//   type: 'bar',
//   data: {
//     labels: ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'],
//     datasets: [{
//       label: 'Ranking of houses',
//       data: [17, 12, 3, 5],
//       backgroundColor: [
//         'rgba(255, 99, 132,)',
//         'rgba(54, 162, 235)',
//         'rgba(255, 206, 86)',
//         'rgba(75, 192, 192)',
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//       ],
//       borderWidth: 1
//     }]
//   }
// })








// aqui van las funciones puras
