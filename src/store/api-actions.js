import {ActionCreator} from "./action";
import {adaptOffer} from "../utils";

const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(ActionCreator.loadOffers(
        data.map((it) => adaptOffer(it))
    )))
);

export {fetchOffersList};
