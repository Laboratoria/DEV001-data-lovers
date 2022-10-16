// estas funciones son de ejemplo

export const filterData = (data, condition) => {
  let arrayData = [];
  for (let k in data) {
    if (!arrayData.includes(data[k][condition])) {
      arrayData.push(data[k][condition]);
    }
  }
  
  return arrayData;
};

export const anotherExample = () => {
  return 'OMG';
};
