// estas funciones son de ejemplo

export const filterDataByProperty = (data, condition) => {
  const result = [];

  data.filter((data) => {
    if (!result.includes(data[condition])) { result.push(data[condition]); }

    return result;

  });

  return result;

};


export const filterDataByValue = (data, condition,value) => {

  return data.filter(film=>film[condition]===value);

};

