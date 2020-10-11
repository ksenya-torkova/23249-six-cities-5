import {getRandomInteger, getRandomArrayItem} from "../utils";
import {nanoid} from "nanoid";

const photos = [
  `apartment-01.jpg`,
  `apartment-02.jpg`,
  `apartment-03.jpg`,
  `room.jpg`,
  `room.jpg`,
];

const types = [
  `Apartment`,
  `Bungalow`,
  `Hostel`,
  `Private room`,
  `Villa`,
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
    id: nanoid(),
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
