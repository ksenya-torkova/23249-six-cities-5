import {ActionType} from "./action";
import {cities, City} from "../const";
import {extend} from "../utils";
import {generateRoomsList} from "../mocks/offer";

const OFFER_CARDS_AMOUNT = 15;

const offerCards = generateRoomsList(OFFER_CARDS_AMOUNT);

const initialState = {
  cities,
  city: City.AMSTERDAM,
  activeCardId: 0,
  offers: offerCards,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload
      });

    case ActionType.UPDATE_OFFERS:
      return extend(state, {
        offers: offerCards
      });

    case ActionType.UPDATE_ACTIVE_CARD_ID:
      return Object.assign({}, state, {activeCardId: action.payload});

    default:
      return state;
  }
};

export {reducer};
