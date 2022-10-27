// estas funciones son de ejemplo

export const filterData = (data, condition) => {
  const result = [];

  data.filter((data) => {
    if (!result.includes(data[condition])) { result.push(data[condition]); }

    return result;

  });

  return result;
};
