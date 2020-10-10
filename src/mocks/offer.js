import {getRandomInteger, getRandomArrayItem} from "../utils";

const photos = [
  `apartment-01.jpg`,
  `apartment-02.jpg`,
  `apartment-03.jpg`,
  `room.jpg`,
  `room.jpg`,
  `studio-01.jpg`,
];

const types = [
  `Apartment`,
  `bungalow`,
  `hostel`,
  `Private room`,
  `villa`,
];

const names = [
  `Beautiful & luxurious apartment at great location`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
  `White castle`,
  `Wood and stone place`,
];

const generateRoom = () => {
  return {
    image: getRandomArrayItem(photos),
    isBookmarked: Math.random() > 0.5,
    isPremium: Math.random() > 0.5,
    name: getRandomArrayItem(names),
    price: getRandomInteger(50, 500),
    raiting: getRandomInteger(0, 5),
    type: getRandomArrayItem(types),
  };
};

const generateRoomsList = (amount) => {
  return new Array(amount).fill(``).map(generateRoom);
};

export {generateRoomsList};
