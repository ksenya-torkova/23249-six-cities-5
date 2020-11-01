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

const reviewData = {
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  raiting: PropTypes.number.isRequired,
  userImage: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
};

const appTypes = {
  placesAmount: PropTypes.number.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape(reviewData)).isRequired,
};

const cardListTypes = {
  rooms: PropTypes.arrayOf(PropTypes.shape(cardData)).isRequired,
};

const citiesListTypes = {
  changeCity: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
  currentCity: PropTypes.string.isRequired,
};

const citiesPlaceCardTypes = {
  cardData: PropTypes.shape(cardData).isRequired,
};

const cityTypes = {
  city: PropTypes.string.isRequired,
  isCurrent: PropTypes.bool.isRequired,
  onCityClick: PropTypes.func.isRequired,
};

const favoritesCardsListTypes = {
  city: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape(cardData)).isRequired,
};

const favoritesCardTypes = {
  cardData: PropTypes.shape(cardData).isRequired,
};

const favoritesLocationsItemTypes = {
  city: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape(cardData)).isRequired,
};

const favoriteTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(cardData)).isRequired,
};

const mainPageTypes = {
  cities: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape(cardData)).isRequired,
  placesAmount: PropTypes.number.isRequired,
};

const mapTypes = {
  className: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape(cardData)).isRequired,
};

const nearPlaceCard = {
  cardData: PropTypes.shape(cardData).isRequired,
};

const nearPlacesListTypes = {
  rooms: PropTypes.arrayOf(PropTypes.shape(cardData)).isRequired,
};

const noOffersTypes = {
  cities: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
};

const placeCardTypes = {
  cardData: PropTypes.shape(cardData).isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  additionalClass: PropTypes.string,
};

const reviewItemTypes = {
  review: PropTypes.shape(reviewData).isRequired,
};

const reviewsBlockTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape(reviewData)).isRequired,
};

const roomTypes = {
  rooms: PropTypes.arrayOf(PropTypes.shape(cardData)).isRequired,
};

export {
  appTypes,
  cardListTypes,
  citiesListTypes,
  citiesPlaceCardTypes,
  cityTypes,
  favoritesCardsListTypes,
  favoritesCardTypes,
  favoritesLocationsItemTypes,
  favoriteTypes,
  mainPageTypes,
  mapTypes,
  nearPlaceCard,
  nearPlacesListTypes,
  noOffersTypes,
  placeCardTypes,
  reviewItemTypes,
  reviewsBlockTypes,
  roomTypes,
};
