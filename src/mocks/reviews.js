import {getRandomInteger, getRandomArrayItem} from "../utils";

const image = [
  `avatar-angelina.jpg`,
  `avatar-max.jpg`,
  `avatar.svg`,
];

const names = [
  `Anna`,
  `Eugene`,
  `Jack`,
  `Julia`,
  `Max`,
];

const descriptions = [
  `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery`,
  `Beautiful & luxurious apartment at great location`,
  `Nice, cozy, warm big bed apartment`,
];

const dates = [
  `April 2019`,
  `August 2019`,
  `December 2019`,
  `January 2020`,
  `May 2018`,
];

const generateReview = () => {
  return {
    date: getRandomArrayItem(dates),
    description: getRandomArrayItem(descriptions),
    raiting: getRandomInteger(0, 5),
    userImage: getRandomArrayItem(image),
    userName: getRandomArrayItem(names),
  };
};

const generateReviewsList = (amount) => {
  return new Array(amount).fill(``).map(generateReview);
};

export {generateReviewsList};
