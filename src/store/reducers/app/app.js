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
