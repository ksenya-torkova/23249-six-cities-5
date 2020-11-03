const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  UPDATE_OFFERS: `UPDATE_OFFERS`,
  UPDATE_ACTIVE_CARD_ID: `UPDATE_ACTIVE_CARD_ID`,
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),

  updateOffers: () => ({
    type: ActionType.UPDATE_OFFERS,
    payload: []
  }),

  updateActiveCardId: (id) => ({
    type: ActionType.UPDATE_ACTIVE_CARD_ID,
    payload: id
  }),
};

export {ActionType, ActionCreator};
