const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SET_USER_INFO: `SET_USER_INFO`,
  UPDATE_ACTIVE_CARD_ID: `UPDATE_ACTIVE_CARD_ID`,
  UPDATE_OFFERS: `UPDATE_OFFERS`,
  UPDATE_SORTING_TYPE: `UPDATE_SORTING_TYPE`,
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),

  loadOffers: (loadedOffers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: loadedOffers
  }),

  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),

  setUserInfo: (data) => ({
    type: ActionType.SET_USER_INFO,
    payload: data,
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
