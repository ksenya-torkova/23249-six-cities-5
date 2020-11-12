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
    isBookmark: offer[`is_favourite`],
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

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const getRandomInteger = function (min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

const getRandomArrayItem = (arr) => {
  const randomIndex = getRandomInteger(0, arr.length - 1);

  return arr[randomIndex];
};

const getOffersByCity = (offers, city) => {
  const offersByCity = offers.slice().filter((offer) => offer.city.name === city);
  return offersByCity;
};

export {adaptOffer, extend, getRandomInteger, getRandomArrayItem, getOffersByCity};
