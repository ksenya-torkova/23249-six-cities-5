import PropTypes from "prop-types";

const cardData = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isBookmarked: PropTypes.bool.isRequired,
  isPremium: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  raiting: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};

const appTypes = {
  mainRooms: PropTypes.arrayOf(PropTypes.shape(cardData)).isRequired,
  otherPlaces: PropTypes.arrayOf(PropTypes.shape(cardData)).isRequired,
  placesAmount: PropTypes.number.isRequired,
};

const cardListTypes = {
  rooms: PropTypes.arrayOf(PropTypes.shape(cardData)).isRequired,
};

const citiesPlaceCardTypes = {
  cardData: PropTypes.shape(cardData).isRequired,
};

const favoriteTypes = {
  rooms: PropTypes.arrayOf(PropTypes.shape(cardData)).isRequired,
};

const favoritesCardTypes = {
  cardData: PropTypes.shape(cardData).isRequired,
};

const mainPageTypes = {
  placesAmount: PropTypes.number.isRequired,
};

const mapTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(cardData)).isRequired,
};

const nearPlaceCard = {
  cardData: PropTypes.shape(cardData).isRequired,
};

const placeCardTypes = {
  cardData: PropTypes.shape(cardData).isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  additionalClass: PropTypes.string,
};

const roomTypes = {
  rooms: PropTypes.arrayOf(PropTypes.shape(cardData)).isRequired,
};

export {
  appTypes,
  cardListTypes,
  citiesPlaceCardTypes,
  favoriteTypes,
  favoritesCardTypes,
  mainPageTypes,
  mapTypes,
  nearPlaceCard,
  placeCardTypes,
  roomTypes
};
