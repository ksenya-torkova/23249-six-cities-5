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

const SotringType = {
  HIGH_TO_LOW: `Price: high to low`,
  LOW_TO_HIGH: `Price: low to high`,
  POPULAR: `Popular`,
  TOP_RATED: `Top rated first`,
};

export const SorterActiveClass = {
  ACTIVE: `places__option--active`
};

export const SorterType = {
  POPULAR: `Popular`,
  PRICE_LOW_TO_HIGH: `Price: low to high`,
  PRICE_HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED_FIRST: `Top rated first`
};

export const SorterListOpenedClass = {
  OPENED: `places__options--opened`
};

export {AuthorizationStatus, City, SotringType};
