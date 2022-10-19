


export const mostrarPeliculaIndividual = (id, data) => {
  const idCard = id;
  const filmsId = data.filter(data => data.id == idCard);

  return filmsId
}



export const filtrarDirectores = (directores, data) => {

  const filDirectores = directores;
  const filtroDirectores = data.filter(data => data.director == filDirectores);
  return filtroDirectores;
}

export const ordenarYears = (data) => {
  let clave
  for (let i = 0; i < data.length; i++) {

    clave = data.sort(function (a, b) {
      if (a.release_date == b.release_date) {
        return 0;
      }
      if (a.release_date > b.release_date) {
        return -1;
      }

      return 1;
    });
    return clave;


  }

  
};

export const ordenarScore = (data) => {
  let clave
  for (let i = 0; i < data.length; i++) {

    clave = data.sort(function (a, b) {
      if (parseInt(a.rt_score )== parseInt(b.rt_score)) {
        return 0;
      }
      if (parseInt(a.rt_score) > parseInt(b.rt_score)) {
        return -1;
      }

      return 1;
    });
    return clave;


  }

  
};


export const estadisticaData = (data) => {
    const directorEstadistica = []
   data.forEach((datos =>{
      directorEstadistica.push(datos.director)
   }));

   const resultado = directorEstadistica.reduce((previousValue, currentValue) => ((previousValue[currentValue] = previousValue[currentValue] + 1 || 1), previousValue), {})
   
   return resultado;
}


