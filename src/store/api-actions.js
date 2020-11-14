import {ActionCreator} from "./action";
import {adaptOffer, adaptReview} from "../utils";
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

const fetchReviewsList = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
  .then(({data}) => dispatch(ActionCreator.loadReviews(
      data.map((it) => adaptReview(it))
  )))
);

export {checkAuth, fetchOffersList, fetchReviewsList, login};
