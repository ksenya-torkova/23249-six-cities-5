import {ActionCreator} from "./action";
import {adaptOffer} from "../utils";
import {AuthorizationStatus} from "../const";

const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(ActionCreator.loadOffers(
        data.map((it) => adaptOffer(it))
    )))
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch((err) => {
      throw err;
    })
);

const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then((userName) => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.setUserInfo(userName.data));
    })
    .catch((err) => {
      throw err;
    })
);

export {checkAuth, fetchOffersList, login};
