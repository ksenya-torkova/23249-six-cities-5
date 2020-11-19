import {ActionCreator} from "./action";
import {adaptAuthInfo, adaptOffer, adaptReview} from "../utils";
import {AuthorizationStatus} from "../const";

const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(ActionCreator.loadOffers(
        data.map((it) => adaptOffer(it))
    )))
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then((response) => {
      const authInfo = adaptAuthInfo(response.data);
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.setUserInfo(authInfo));
    })
    .catch((err) => {
      throw err;
    })
);

const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then((response) => {
      const authInfo = adaptAuthInfo(response.data);
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.setUserInfo(authInfo));
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

const fetchOfferById = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}`)
    .then(({data}) => {
      dispatch(ActionCreator.loadOfferById(adaptOffer(data)));
    })
);

const fetchNearOffersById = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}/nearby`)
    .then(({data}) => {
      dispatch(ActionCreator.loadNearOffersById(
          data.map((it) => adaptOffer(it))
      ));
    })
);

const postReview = (id, {review: comment, rating}) => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, {comment, rating})
    .then(({data}) => {
      const offerModifiedComments = data.map((it) => adaptReview(it));
      dispatch(ActionCreator.setUserReview(offerModifiedComments));
    })
);

export {
  checkAuth,
  fetchNearOffersById,
  fetchOfferById,
  fetchOffersList,
  fetchReviewsList,
  login,
  postReview,
};
