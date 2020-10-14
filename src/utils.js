const getRandomInteger = function (min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

const getRandomArrayItem = (arr) => {
  const randomIndex = getRandomInteger(0, arr.length - 1);

  return arr[randomIndex];
};

export {getRandomInteger, getRandomArrayItem};
