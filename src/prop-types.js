import PropTypes from "prop-types";

const cardData = {
  id: PropTypes.number.isRequired,
  previewImage: PropTypes.string.isRequired,
  isBookmark: PropTypes.bool.isRequired,
  isPremium: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};

const reviewData = {
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  raiting: PropTypes.number.isRequired,
  userImage: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
};

const activeCardTypes = {};

const appTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(cardData)).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape(reviewData)).isRequired,
};

const cardListTypes = {
  rooms: PropTypes.arrayOf(PropTypes.shape(cardData)).isRequired,
};

const citiesListTypes = {
  changeCity: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
  currentCity: PropTypes.string.isRequired,
  sortingType: PropTypes.string.isRequired,
};

const citiesPlaceCardTypes = {
  cardData: PropTypes.shape(cardData).isRequired,
};

const cityTypes = {
  city: PropTypes.string.isRequired,
  isCurrent: PropTypes.bool.isRequired,
  onCityClick: PropTypes.func.isRequired,
};

const dropdownSortingTypes = {};

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

const fieldChangeTypes = {};

const mainHeaderTypes = {
  isMainPage: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired,
};

const mainPageTypes = {
  cities: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape(cardData)).isRequired,
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
  additionalCardClass: PropTypes.string.isRequired,
  additionalContentClass: PropTypes.string.isRequired,
  additionalImageClass: PropTypes.string.isRequired,
  cardData: PropTypes.shape(cardData).isRequired,
  updateActiveCardId: PropTypes.func.isRequired,
};

const privateRouteTypes = {};

const reviewFormTypes = {
  onFieldChange: PropTypes.func.isRequired,
};

const reviewItemTypes = {
  review: PropTypes.shape(reviewData).isRequired,
};

const reviewsBlockTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape(reviewData)).isRequired,
};

const roomTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(cardData)).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape(reviewData)).isRequired,
  city: PropTypes.string.isRequired,
};

const sortingItemTypes = {
  itemName: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onSortingItemClick: PropTypes.func.isRequired
};

const sortingTypes = {
  sortingType: PropTypes.string.isRequired,
  updateSortingType: PropTypes.func.isRequired,
};

export {
  activeCardTypes,
  appTypes,
  cardListTypes,
  citiesListTypes,
  citiesPlaceCardTypes,
  cityTypes,
  dropdownSortingTypes,
  favoritesCardsListTypes,
  favoritesCardTypes,
  favoritesLocationsItemTypes,
  favoriteTypes,
  fieldChangeTypes,
  mainHeaderTypes,
  mainPageTypes,
  mapTypes,
  nearPlaceCard,
  nearPlacesListTypes,
  noOffersTypes,
  placeCardTypes,
  privateRouteTypes,
  reviewFormTypes,
  reviewItemTypes,
  reviewsBlockTypes,
  roomTypes,
  sortingItemTypes,
  sortingTypes,
};
