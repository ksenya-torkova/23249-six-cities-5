import {ActionType} from "../../action";
import {cities, City, SotringType} from "../../../const";
import {extend} from "../../../utils";

const offerCards = [];

const initialState = {
  cities,
  city: City.AMSTERDAM,
  activeCardId: 0,
  sortingType: SotringType.POPULAR,
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload
      });

    case ActionType.SORT_HIGH_TO_LOW:
      return Object.assign({}, state,
          {offers: state.offers.slice(0).sort((firstOffer, secondOffer) => firstOffer.price > secondOffer.price ? -1 : 1)}
      );

    case ActionType.SORT_LOW_TO_HIGH:
      return Object.assign({}, state,
          {offers: state.offers.slice(0).sort((firstOffer, secondOffer) => firstOffer.price > secondOffer.price ? 1 : -1)}
      );

    case ActionType.SORT_POPULAR:
      return Object.assign({}, state, {offers: offerCards.filter((offer) => offer.city === state.city)});

    case ActionType.SORT_TOP_RATED:
      return Object.assign({}, state,
          {offers: state.offers.slice(0).sort((firstOffer, secondOffer) => firstOffer.raiting > secondOffer.raiting ? -1 : 1)}
      );

    case ActionType.UPDATE_ACTIVE_CARD_ID:
      return Object.assign({}, state, {activeCardId: action.payload});

    case ActionType.UPDATE_OFFERS:
      return extend(state, {
        offers: offerCards
      });

    case ActionType.UPDATE_SORTING_TYPE:
      return Object.assign({}, state, {sortingType: action.payload});

    default:
      return state;
  }
};

export {app};
