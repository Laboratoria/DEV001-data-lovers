export const cleanClass = (allCardTypes) => {
  allCardTypes.forEach((cardType) => {
    cardType.classList.remove("borderRed");
  });
};

export const validateInput = (inputValue) => {
  const onlyLetters = /^[/^[-_ a-zA-Z]+$/;
  return onlyLetters.test(inputValue);
};

