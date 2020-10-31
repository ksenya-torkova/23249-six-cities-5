const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const getRandomInteger = function (min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

const getRandomArrayItem = (arr) => {
  const randomIndex = getRandomInteger(0, arr.length - 1);

  return arr[randomIndex];
};

const getOffersByCity = (offers, city) => {
  const offersByCity = offers.slice().filter((offer) => offer.city === city);
  return offersByCity;
};

export {extend, getRandomInteger, getRandomArrayItem, getOffersByCity};
