const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  SORT_HIGH_TO_LOW: `SORT_HIGH_TO_LOW`,
  SORT_LOW_TO_HIGH: `SORT_LOW_TO_HIGH`,
  SORT_POPULAR: `SORT_POPULAR`,
  SORT_TOP_RATED: `SORT_TOP_RATED`,
  UPDATE_ACTIVE_CARD_ID: `UPDATE_ACTIVE_CARD_ID`,
  UPDATE_OFFERS: `UPDATE_OFFERS`,
  UPDATE_SORTING_TYPE: `UPDATE_SORTING_TYPE`,
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),

  sortHighToLow: () => ({
    type: ActionType.SORT_HIGH_TO_LOW,
  }),

  sortLowToHigh: () => ({
    type: ActionType.SORT_LOW_TO_HIGH,
  }),

  sortPopular: () => ({
    type: ActionType.SORT_POPULAR,
  }),

  sortTopRated: () => ({
    type: ActionType.SORT_TOP_RATED,
  }),

  updateActiveCardId: (id) => ({
    type: ActionType.UPDATE_ACTIVE_CARD_ID,
    payload: id
  }),

  updateOffers: () => ({
    type: ActionType.UPDATE_OFFERS,
    payload: []
  }),

  updateSortingType: (sortingType) => ({
    type: ActionType.UPDATE_SORTING_TYPE,
    payload: sortingType
  }),
};

export {ActionType, ActionCreator};
