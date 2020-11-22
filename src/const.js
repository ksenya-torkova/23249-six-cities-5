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

const mockOffer = {
  id: 13,
  cityName: City.AMSTERDAM,
  coordinatesCity: {
    lat: 52.3909553943508,
    lng: 4.85309666406198,
    zoom: 12
  },
  coordinates: {
    lat: 52.3909553943508,
    lng: 4.85309666406398,
    zoom: 12
  },
  title: `Beautiful & luxurious studio at great location`,
  preview: `http://picsum.photos/248/152?r=123`,
  photos: [`http://picsum.photos/248/152?r=123}`],
  desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!`,
  isPremium: true,
  rating: 4.3,
  type: `apartment`,
  bedroomsCount: 2,
  maxGuests: 1,
  costPerNight: 100,
  features: [`Wifi`, `Heating`, `Kitchen`, `Cable TV`],
  isFavorite: true,
  owner:
  {
    id: 373,
    avatar: `http://picsum.photos/74/74?r=123}`,
    name: `Onik_373`,
    isSuper: false
  }
};

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
  mockOffer,
  mockReview,
  SotringType,
};
