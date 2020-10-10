import {getRandomInteger, getRandomArrayItem} from "../utils";

const photos = [
  `room.jpg`,
  `apartment-01.jpg`,
  `apartment-02.jpg`,
  `apartment-03.jpg`,
  `studio-01.jpg`,
  `room.jpg`,
];

const types = [
  `Apartment`,
  `Private room`,
  `hostel`,
  `villa`,
  `bungalow`,
];

const names = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
];

const generateRoom = () => {
  return {
    image: getRandomArrayItem(photos),
    price: getRandomInteger(50, 500),
    isPremium: Math.random() > 0.5,
    isBookmarked: Math.random() > 0.5,
    raiting: getRandomInteger(0, 5),
    type: getRandomArrayItem(types),
    name: getRandomArrayItem(names),
  };
};

const generateRoomsList = (amount) => {
  return new Array(amount).fill(``).map(generateRoom);
};

export {generateRoomsList};
