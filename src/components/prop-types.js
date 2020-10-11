import PropTypes from "prop-types";

const appTypes = {
  mainRooms: PropTypes.array.isRequired,
  otherPlaces: PropTypes.array.isRequired,
  placesAmount: PropTypes.number.isRequired,
};

const cardListTypes = {
  rooms: PropTypes.array.isRequired,
};

const mainPageTypes = {
  placesAmount: PropTypes.number.isRequired,
};

const placeCardTypes = {
  cardData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    isBookmarked: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    raiting: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  additionalClass: PropTypes.string,
};

const roomTypes = {
  rooms: PropTypes.array.isRequired
};

export {appTypes, cardListTypes, mainPageTypes, placeCardTypes, roomTypes};
