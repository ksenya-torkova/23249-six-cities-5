const AuthorizationStatus = {
  AUTH: true,
  NO_AUTH: false,
};

const City = {
  PARIS: `Paris`,
  COLOGNE: `Cologne`,
  BRUSSELS: `Brussels`,
  AMSTERDAM: `Amsterdam`,
  HAMBURG: `Hamburg`,
  DUSSELDORF: `Dusseldorf`,
};

const MAX_REVIEWS_AMOUNT = 10;

const mockCards = [{
  id: 101,
  city: {
    name: `Amsterdam`,
    coordinates: {
      latitude: 52.38333,
      longitude: 4.9
    }
  },
  coordinates: {
    latitude: 52.3909553943508,
    longitude: 4.85309666406198
  },
  previewImage: `img/apartment-02.jpg`,
  pictures: [`img/apartment-02.jpg`, `img/apartment-02.jpg`, `img/apartment-02.jpg`, `img/apartment-02.jpg`, `img/apartment-02.jpg`, `img/apartment-02.jpg`],
  isPremium: true,
  isBookmark: true,
  price: 100,
  title: `Wood and stone place`,
  type: `Apartment`,
  rating: 5,
  description: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium`,
  bedroomsMax: `4 Bedrooms`,
  guestsMax: `Max 5 adults`,
  amenities: [`Wi-Fi`, `Heating`, `Kitchen`, `Parking`, `Flowers`, `Dishwasher`, `Towels`, `TV`],
  hostInfo: {
    avatar: `img/avatar-max.jpg`,
    name: `Ross`,
    isSuper: true,
  },
}];

const mockReview = {
  id: 37,
  author: {
    id: 43,
    avatar: `http://picsum.photos/74/74?r=123}`,
    name: `Sun-43`
  },
  rating: 5,
  date: new Date(`2020-11-04T21:00:00.000Z`),
  comment: `Dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora...`
};

const SotringType = {
  HIGH_TO_LOW: `Price: high to low`,
  LOW_TO_HIGH: `Price: low to high`,
  POPULAR: `Popular`,
  TOP_RATED: `Top rated first`,
};

export {
  AuthorizationStatus,
  City,
  MAX_REVIEWS_AMOUNT,
  mockCards,
  mockReview,
  SotringType,
};
