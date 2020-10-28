import {cities, City} from "../const";
import {ActionType} from "./action";
import {extend} from "../utils";
import {generateRoomsList} from "../mocks/offer";

const OFFER_CARDS_AMOUNT = 4;

const offerCards = generateRoomsList(OFFER_CARDS_AMOUNT);

const initialState = {
  cities,
  city: City.AMSTERDAM,
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
  }

  return state;
};

export {reducer};
