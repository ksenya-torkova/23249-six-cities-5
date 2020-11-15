import {extend} from "../../../utils";
import {ActionType} from "../../action";

const initialState = {
  offers: [],
  reviews: [],
  offerById: {},
  nearOffersById: [],
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload,
      });

    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });

    case ActionType.LOAD_OFFER_BY_ID:
      return extend(state, {
        offerById: action.payload,
      });

    case ActionType.LOAD_NEAR_OFFERS_BY_ID:
      return extend(state, {
        nearOffersById: action.payload,
      });

    case ActionType.SET_USER_REVIEW:
      return extend(state, {
        reviews: action.payload,
      });
  }

  return state;
};

export {data};
