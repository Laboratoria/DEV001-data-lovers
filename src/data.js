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

export const orden = (dataFilter) => {
 const sortOrden =  dataFilter.sort(function (a, b) {
    if (a.name < b.name) {
      return 1;
    }
    if (a.name > b.name) {
      return -1;
    }
    return 0;
   
})
return sortOrden;
};

export const sortOrdenZ = (dataFilter) => {
const sortOrdenZ =  dataFilter.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  return 0;
 
})
return sortOrdenZ;
}  

export const statisticsFrequency = (originalDataLength, categoryDataLength) => {
  let firstData = originalDataLength.length;
  let secondData = categoryDataLength.length;
  return Math.round(secondData * 100 / firstData);
}