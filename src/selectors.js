import {createSelector} from "reselect";
import {NameSpace} from "./store/reducers/root-reducer";
import {SotringType} from "./const";

const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;
const getCities = (cities) => Object.values(cities);
const getCity = (state) => state[NameSpace.APP].city;
const getHoveredOfferId = (state) => state[NameSpace.APP].activeCardId;
const getNearOffers = (state) => state[NameSpace.DATA].nearOffersById;
const getOfferByIdFromServer = (state) => state[NameSpace.DATA].offerById;
const getOffers = (state) => state[NameSpace.DATA].offers;
const getReviewsById = (state) => state[NameSpace.DATA].reviews;
const getSortingType = (state) => state[NameSpace.APP].sortingType;
const getUserInfo = (state) => state[NameSpace.USER].userInfo;

const selectCityOffers = createSelector([getOffers, getSortingType, getCity], (offers, sortingType, city) => {
  const cityOffers = offers.filter((offer) => offer.city.name === city);

  switch (sortingType) {
    case SotringType.POPULAR:
      return cityOffers;

    case SotringType.HIGH_TO_LOW:
      return cityOffers.sort((firstOffer, secondOffer) => secondOffer.price - firstOffer.price);

    case SotringType.LOW_TO_HIGH:
      return cityOffers.sort((firstOffer, secondOffer) => firstOffer.price - secondOffer.price);

    case SotringType.TOP_RATED:
      return cityOffers.sort((firstOffer, secondOffer) => secondOffer.rating - firstOffer.rating);
  }

  return false;
});

export {
  getAuthorizationStatus,
  getCities,
  getCity,
  getHoveredOfferId,
  getNearOffers,
  getOfferByIdFromServer,
  getOffers,
  getReviewsById,
  getSortingType,
  getUserInfo,
  selectCityOffers,
};
