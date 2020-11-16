import {MAX_REVIEWS_AMOUNT} from "./const";
import moment from "moment";

const adaptAuthInfo = (data) => {
  return {
    id: data[`id`],
    email: data[`email`],
    avatarUrl: data[`avatar_url`],
    isPro: data[`is_pro`],
  };
};

const adaptOffer = (offer) => {
  return {
    id: offer[`id`],
    city: {
      name: offer[`city`][`name`],
      coordinates: {
        latitude: offer[`city`][`location`][`latitude`],
        longitude: offer[`city`][`location`][`longitude`],
        zoom: offer[`city`][`location`][`zoom`]
      }
    },
    coordinates: {
      latitude: offer[`location`][`latitude`],
      longitude: offer[`location`][`longitude`],
      zoom: offer[`location`][`zoom`]
    },
    pictures: offer[`images`],
    previewImage: offer[`preview_image`],
    isPremium: offer[`is_premium`],
    isBookmark: offer[`is_favorite`],
    price: offer[`price`],
    title: offer[`title`],
    type: offer[`type`],
    rating: offer[`rating`],
    description: offer[`description`],
    bedroomsMax: offer[`bedrooms`],
    guestsMax: offer[`max_adults`],
    amenities: offer[`goods`],
    hostInfo: {
      avatar: offer[`host`][`avatar_url`],
      name: offer[`host`][`name`],
      isSuper: offer[`host`][`is_pro`],
    },
    nearOffers: []
  };
};

const adaptReview = (review) => {
  return {
    id: review[`id`],
    date: review[`date`],
    description: review[`comment`],
    rating: review[`rating`],
    userInfo: {
      avatar: review[`user`][`avatar_url`],
      name: review[`user`][`name`],
      id: review[`user`][`id`],
      isSuper: review[`user`][`is_pro`],
    },
  };
};

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const getOffersByCity = (offers, city) => {
  const offersByCity = offers.slice().filter((offer) => offer.city.name === city);
  return offersByCity;
};

const getSortedByDate = (reviews) => {
  const clonedReviews = reviews.slice();
  clonedReviews.sort((a, b) => moment(b.date).diff(a.date));
  return clonedReviews.slice(0, MAX_REVIEWS_AMOUNT);
};

export {
  adaptAuthInfo,
  adaptOffer,
  adaptReview,
  extend,
  getOffersByCity,
  getSortedByDate,
};
